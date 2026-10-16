export type LegalPageKey =
    | "storePrivacy"
    | "serverPrivacy"
    | "support"
    | "terms"
    | "refunds";

export interface LegalSection {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
}

export interface LegalPage {
    key: LegalPageKey;
    /** Short label used for the footer link and the modal trigger. */
    label: string;
    title: string;
    updated: string;
    intro: string;
    sections: LegalSection[];
    links?: Array<{ label: string; href: string }>;
}

export const LEGAL_PAGES: Record<LegalPageKey, LegalPage> = {
    storePrivacy: {
        key: "storePrivacy",
        label: "Store Privacy Policy",
        title: "Store Privacy Policy",
        updated: "Last updated: 1 January 2026",
        intro: "This webstore is a headless storefront. Browsing happens here, while payment, invoicing and checkout are operated by Tebex Ltd as our Merchant of Record.",
        sections: [
            {
                heading: "What Tebex collects",
                bullets: [
                    "Payment instrument details, billing name and billing country.",
                    "Order and transaction identifiers, amounts and refund status.",
                    "Device and session data required to prevent fraud and abuse.",
                ],
                paragraphs: [
                    "Catalyst SMP never receives or stores your full card number, CVV or payment credentials — those are handled entirely by Tebex and their payment providers.",
                ],
            },
            {
                heading: "What Catalyst SMP collects",
                bullets: [
                    "Your Minecraft username and the account UUID attached to your basket.",
                    "The package IDs you purchased and the delivery outcome.",
                    "Support correspondence you start from this store.",
                ],
            },
            {
                heading: "Cookies & local storage",
                paragraphs: [
                    "The store keeps your basket identifier and signed-in username in your browser's local storage so your cart survives a refresh. Clearing your browser data removes them, and a basket that is never checked out expires automatically.",
                ],
            },
            {
                heading: "Your choices",
                paragraphs: [
                    "You can request a copy or deletion of the store-side data we hold about you at any time via a Discord ticket or support email. Requests about payment records must go to Tebex directly, as they are the data controller for that information.",
                ],
            },
        ],
        links: [
            {
                label: "Tebex Privacy Policy",
                href: "https://checkout.tebex.io/privacy",
            },
            {
                label: "Tebex Terms of Service",
                href: "https://checkout.tebex.io/terms",
            },
            {
                label: "Tebex Impressum",
                href: "https://checkout.tebex.io/impressum",
            },
        ],
    },

    serverPrivacy: {
        key: "serverPrivacy",
        label: "Catalyst Privacy Policy",
        title: "Catalyst SMP Privacy Policy",
        updated: "Last updated: 1 January 2026",
        intro: "This policy covers the data the Catalyst SMP network itself processes in order to run the game server, the economy and moderation.",
        sections: [
            {
                heading: "Identifiers",
                paragraphs: [
                    "When you connect we resolve your Minecraft account and store the permanent UUID alongside your current username. The UUID is the primary key for everything on the network: ranks, Shards balances, land claims, homes and statistics.",
                    "Usernames are treated as display data only, which is why your purchases follow you after a rename.",
                ],
            },
            {
                heading: "Connection & IP logs",
                paragraphs: [
                    "The server records the IP address used to connect together with a timestamp. These logs exist to stop ban evasion, DDoS attacks, alt-account market manipulation and account sharing.",
                ],
                bullets: [
                    "Raw connection logs are retained for 30 days, then aggregated or deleted.",
                    "IPs are never published, sold or shared with advertisers.",
                    "Where the network's own authentication is used instead of a paid Mojang account, only a salted hash of the credentials is stored.",
                ],
            },
            {
                heading: "Gameplay & moderation records",
                paragraphs: [
                    "We keep the data needed to moderate fairly: chat and command logs where a rule is reported, inventory and economy snapshots tied to a rollback, anti-cheat flags, and the history of punishments issued against your UUID.",
                ],
                bullets: [
                    "Punishment records are kept for the lifetime of the account so appeals can be reviewed.",
                    "Economy ledgers are retained so duplication and fraud can be investigated.",
                    "Chat logs unrelated to a report are rotated out on a rolling basis.",
                ],
            },
            {
                heading: "Retention & deletion",
                paragraphs: [
                    "Open an appeal or data request ticket on Discord and we will export the gameplay data tied to your UUID, or delete the account and its non-essential records. Purchase records required for tax, accounting or dispute defence are retained for the period the law requires, even after an account deletion.",
                ],
            },
        ],
    },

    support: {
        key: "support",
        label: "Support",
        title: "Support & Order Help",
        updated: "We reply within 24 hours, Monday to Sunday",
        intro: "Almost every delivery issue can be solved in a minute from inside the game. Try the steps below first, then open a ticket if you are still stuck.",
        sections: [
            {
                heading: "Before you contact us",
                bullets: [
                    "Re-log to the server — most perks apply on the next join.",
                    "Run the reload command the store tells you to, if any.",
                    "Confirm you are on the Java Edition address above with the account that made the purchase.",
                ],
            },
            {
                heading: "Open a Discord ticket",
                paragraphs: [
                    "Join the Catalyst SMP Discord and use #open-a-ticket in the “Store & Purchases” category. Ticket routing sends your conversation straight to the staff member who handles delivery for that package, so you skip the queue.",
                ],
                bullets: [
                    "Discord: discord.gg/catalystsmp",
                    "Email: support@catalystsmp.net",
                    "Include your in-game username and the Tebex order ID from your receipt.",
                ],
            },
            {
                heading: "Payment, invoices & chargebacks",
                paragraphs: [
                    "Anything touching money — duplicate charges, declined payments, invoices, billing name changes — has to go through Tebex as Merchant of Record. Use the receipt link in your confirmation email or contact Tebex support directly; we will happily confirm delivery on our side once they open the case.",
                ],
            },
        ],
        links: [
            { label: "Open Discord", href: "https://discord.gg/catalystsmp" },
        ],
    },

    terms: {
        key: "terms",
        label: "Terms of Service",
        title: "Terms of Service",
        updated: "Last updated: 1 January 2026",
        intro: "Buying from this store means you agree to the terms below and to the server rules published in-game via /rules and on the Discord.",
        sections: [
            {
                heading: "Virtual property",
                paragraphs: [
                    "Ranks, Shards, kits, cosmetics and any other item delivered by this store are a revocable licence to use a feature on Catalyst SMP. They hold no real-world monetary value, are not transferable outside the store's gifting flow, and cannot be exchanged back into money. Nothing purchased here is a claim on the network or its operator.",
                ],
            },
            {
                heading: "Accounts & the one-owner rule",
                bullets: [
                    "One account per player. Alt accounts used to farm vote rewards, auctions or membership perks will be consolidated or punished.",
                    "Sharing an account keeps the perks with the account, not the person playing on it.",
                    "Buying, selling or trading accounts, ranks or Shards for money outside this store is a bannable offence and voids the items.",
                ],
            },
            {
                heading: "Anti-cheat",
                paragraphs: [
                    "Modified clients, macros, duping exploits, unfair PvP utilities and any third-party tool that gives a competitive edge lead to removal of perks without refund. Anti-cheat flags are reviewed by staff and you can always appeal — if we are wrong we restore what you paid for.",
                ],
            },
            {
                heading: "Economy rules",
                paragraphs: [
                    "Scamming, misleading auction listings, real-money trading, price manipulation and laundering through the auction house are treated as theft from other players. We can roll back transactions and remove balances obtained this way.",
                ],
            },
            {
                heading: "Changes to the store",
                paragraphs: [
                    "Perks, prices and the contents of a tier can change as the network evolves, and packages may be retired. If a change materially removes something you paid for we offer a proportional alternative: a different tier, a shard credit, or an extension of your subscription.",
                ],
            },
        ],
    },

    refunds: {
        key: "refunds",
        label: "Refund Policy",
        title: "Refund Policy",
        updated: "Digital content · please read before purchasing",
        intro: "Store purchases are for digital content delivered automatically, which means the right of withdrawal you may have for physical goods ends once delivery happens.",
        sections: [
            {
                heading: "When we refund",
                bullets: [
                    "The perk or item was never delivered and our staff cannot make it appear.",
                    "You were charged twice for the same order, or a payment failed but still settled.",
                    "A subscription renewed within 24 hours of you contacting us to cancel.",
                    "You purchased for the wrong account within 24 hours and have used nothing from it.",
                ],
            },
            {
                heading: "When we cannot refund",
                bullets: [
                    "Shards, kits or cosmetics that have already been used, spent or traded.",
                    "Regret after using membership perks, including time spent with them active.",
                    "Purchases on an account punished for cheating, scamming or account sharing.",
                    "Anything bought by a minor without a parent or guardian getting in touch first.",
                ],
            },
            {
                heading: "Chargebacks",
                paragraphs: [
                    "Please open a support ticket before you dispute with your bank. A chargeback filed against a delivered order is handled by Tebex's dispute team, and accounts tied to a lost dispute are closed for the digital content and any linked balances. If we made a mistake we will always refund it first — the ticket route is faster for everyone.",
                ],
            },
            {
                heading: "How to ask",
                paragraphs: [
                    "Reply to your receipt email or open a Discord ticket with your username and order ID. We respond within 24 hours and refunds, where approved, are issued to the original payment method by Tebex within 5–10 business days.",
                ],
            },
        ],
    },
};

export const LEGAL_PAGE_ORDER: LegalPageKey[] = [
    "storePrivacy",
    "serverPrivacy",
    "support",
    "terms",
    "refunds",
];
