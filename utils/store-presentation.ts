import type { Package } from "~/types";

/**
 * Catalyst SMP presentation helpers.
 *
 * Nothing here mutates the Tebex payload - it only reads a package name, type
 * and description to decide how the card should look, so the basket and
 * checkout hooks stay untouched.
 */

export type StoreAccent = "purple" | "cyan" | "gold";
export type StoreKind = "membership" | "currency" | "other";

export interface PackagePerk {
    label: string;
    value: string;
}

export interface PackagePresentation {
    kind: StoreKind;
    /** Package name split so trailing "+", "++" or "+++" can be coloured. */
    nameBase: string;
    nameSuffix: string;
    /** Caps line shown at the top of a highlighted card, e.g. "OCTOBER ONLY". */
    tag: string | null;
    featured: boolean;
    accent: StoreAccent;
    /** Perk rows: Homes / Auction slots / Order slots / anything from Tebex. */
    perks: PackagePerk[];
    /** "/month" for subscriptions, null for one-time packs. */
    cycle: string | null;
    /** Shards bundled inside a rank, e.g. "5,000". */
    shardsIncluded: string | null;
    /** "5,500 Shards" for currency packs. */
    amountLabel: string | null;
    /** Pre-bonus amount, rendered struck-through next to the total. */
    baseAmountLabel: string | null;
    bonusPercent: number | null;
    isCurrency: boolean;
}

const MEMBERSHIP_TAGS: Record<string, string> = {
    "+": "STARTER",
    "++": "MOST POPULAR",
    "+++": "BEST VALUE",
};

const CURRENCY_SIZES = [
    {
        test: /\b(max|mega|ultimate|jumbo|giant|x ?large|xl|unlimited)\b/i,
        bonus: 40,
    },
    { test: /\b(large|big|huge|grand)\b/i, bonus: 30 },
    { test: /\b(medium|mid|standard|regular)\b/i, bonus: 20 },
    { test: /\b(small|mini|starter|trial|tiny)\b/i, bonus: 10 },
];

const CURRENCY_WORDS = /(shard|coin|currency|credit|gold|gem|token|balance)/i;
const BONUS_IN_TEXT = /\+\s*(\d{1,3})\s*%/i;
const PERCENT_SUFFIX = /(\d+(?:[.,]\d+)?)\s*%/;

export const stripHtml = (value?: string | null): string =>
    (value ?? "")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/(p|li|ul|ol|div|tr|h\d)>/gi, "\n")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .split("\n")
        .map((line) => line.replace(/\s+/g, " ").trim())
        .filter(Boolean)
        .join("\n");

const isMembership = (pkg: Package): boolean => {
    const type = (pkg.type ?? "").toLowerCase();
    const haystack = `${pkg.name} ${stripHtml(pkg.description)}`.toLowerCase();

    return (
        type.includes("subscription") ||
        /\b(per month|monthly|subscription|recurring)\b/.test(haystack)
    );
};

const detectKind = (pkg: Package): StoreKind => {
    if (isMembership(pkg)) return "membership";

    const type = (pkg.type ?? "").toLowerCase();
    if (type.includes("currency")) return "currency";

    return CURRENCY_WORDS.test(pkg.name ?? "") ? "currency" : "other";
};

/** "Catalyst+++" -> { base: "Catalyst", suffix: "+++" } */
const splitName = (name: string): { base: string; suffix: string } => {
    const match = /^(.*?)(\+{1,3})$/.exec(name.trim());

    return match
        ? { base: match[1].trim(), suffix: match[2] }
        : { base: name.trim(), suffix: "" };
};

const formatNumber = (value: number): string => value.toLocaleString("en-US");

/** Pull "5,500 Shards" (or "1000 shards") out of any string. */
const readAmount = (haystack: string): number | null => {
    const match =
        /(\d{1,3}(?:[.,]\d{3})+|\d{2,9})\s*(?:shards?|coins?|credits?|gems?)/i.exec(
            haystack,
        );

    if (!match) return null;

    const raw = match[1].replace(/[.,]/g, "");
    const amount = Number.parseInt(raw, 10);

    return Number.isFinite(amount) && amount > 0 ? amount : null;
};

const readBonus = (pkg: Package, haystack: string): number | null => {
    const explicit = BONUS_IN_TEXT.exec(haystack);

    if (explicit) return Number.parseInt(explicit[1], 10);

    const suffix = PERCENT_SUFFIX.exec(pkg.name ?? "");

    if (suffix) return Number.parseInt(suffix[1], 10);

    // Fall back to the size word in the name ("Large Shard Pack" -> +30%).
    const size = CURRENCY_SIZES.find((rule) => rule.test.test(pkg.name ?? ""));

    if (size) return size.bonus;

    // Last resort: base vs total amount, e.g. "5,000 + 500 bonus shards".
    const amounts = [...haystack.matchAll(/(\d{2,9})/g)].map((m) =>
        Number.parseInt(m[1], 10),
    );

    if (amounts.length >= 2) {
        const base = Math.min(...amounts);
        const total = Math.max(...amounts);
        const bonus = Math.round(((total - base) / base) * 100);

        if (bonus >= 5) return bonus;
    }

    return null;
};

/** Free-form perks Tebex stores often write inline rather than as "Label: value". */
const PERK_PATTERNS: Array<{ label: string; source: string }> = [
    { label: "Homes", source: "(\\d+)\\s*homes?|homes?[^\\d]{0,10}(\\d+)" },
    {
        label: "Auction slots",
        source: "auction\\s*slots?[^\\d]{0,12}(\\d+)|(\\d+)\\s*auction\\s*slots?",
    },
    {
        label: "Order slots",
        source: "order\\s*slots?[^\\d]{0,12}(\\d+)|(\\d+)\\s*order\\s*slots?",
    },
    { label: "Kits", source: "kits?[^\\d]{0,10}(every\\s*\\d+\\s*h)" },
    { label: "Particle effects", source: "particle\\s*effects?" },
];

const LINE_PERK =
    /^([A-Za-z][A-Za-z /]{1,30}):\s*([A-Za-z0-9$,. %+/_-]{1,24})$/;

/**
 * Perks are read from the package description so the card layout stays
 * data-driven: dashboard editors can keep writing "Homes: 10" (or plain
 * sentences) and the storefront picks both up.
 */
const readPerks = (pkg: Package): PackagePerk[] => {
    const lines = stripHtml(pkg.description).split("\n");
    const perks = new Map<string, string>();

    for (const line of lines) {
        const match = LINE_PERK.exec(line);

        if (!match) continue;

        const label = match[1].trim().replace(/\s+/g, " ");
        let value = match[2].trim();

        // The included-shard panel already shows this, and "Homes: Homes: 4"
        // style values only need the number.
        if (/^shards?$/i.test(label)) continue;

        if (value.toLowerCase().startsWith(label.toLowerCase())) {
            value =
                value
                    .slice(label.length)
                    .replace(/^[\s:–-]+/, "")
                    .trim() || "Included";
        }

        perks.set(label.toLowerCase(), value);
    }

    const freeText = lines.join(" ");

    for (const pattern of PERK_PATTERNS) {
        const label = pattern.label.toLowerCase();

        if (perks.has(label)) continue;

        const match = new RegExp(pattern.source, "i").exec(freeText);

        if (!match) continue;

        perks.set(label, (match[1] ?? match[2] ?? "Included").trim());
    }

    return [...perks.entries()]
        .filter(([, value]) => value && value !== "-")
        .slice(0, 5)
        .map(([label, value]) => ({
            label: label.replace(/^./, (char) => char.toUpperCase()),
            value,
        }));
};

export const presentPackage = (pkg: Package): PackagePresentation => {
    const kind = detectKind(pkg);
    const haystack = `${pkg.name} ${stripHtml(pkg.description)}`;
    const currency = kind === "currency";
    const { base, suffix } = splitName(pkg.name ?? "");

    const amount = readAmount(haystack);
    const bonusPercent = currency ? readBonus(pkg, haystack) : null;

    // Only show the struck-through base when it can be derived exactly - a
    // rounded guess is worse than no comparison at all.
    const rawBase =
        currency && amount && bonusPercent
            ? amount / (1 + bonusPercent / 100)
            : null;
    const baseAmount =
        rawBase !== null && Math.abs(rawBase - Math.round(rawBase)) < 0.01
            ? Math.round(rawBase)
            : null;

    return {
        kind,
        nameBase: base,
        nameSuffix: suffix,
        tag: suffix ? MEMBERSHIP_TAGS[suffix] ?? null : null,
        featured: currency
            ? !!bonusPercent && bonusPercent >= 30
            : suffix === "+++",
        accent: currency ? "cyan" : suffix === "+++" ? "gold" : "purple",
        perks: currency ? [] : readPerks(pkg),
        cycle: currency || kind === "other" ? null : "/month",
        shardsIncluded:
            kind === "membership" && amount ? formatNumber(amount) : null,
        amountLabel:
            currency && amount ? `${formatNumber(amount)} Shards` : null,
        baseAmountLabel:
            baseAmount && amount && baseAmount !== amount
                ? formatNumber(baseAmount)
                : null,
        bonusPercent,
        isCurrency: currency,
    };
};

/** Currency packs read best when sorted smallest -> largest. */
export const sortPackagesForCategory = (packages: Package[] = []): Package[] =>
    [...packages].sort((a, b) => {
        const aCur = detectKind(a) === "currency";
        const bCur = detectKind(b) === "currency";

        if (aCur !== bCur) return aCur ? 1 : -1;

        return (a.total_price ?? 0) - (b.total_price ?? 0);
    });

export const formatBonusBadge = (percent: number | null): string | null =>
    percent && percent > 0 ? `+${percent}%` : null;
