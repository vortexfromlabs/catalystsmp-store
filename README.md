# Catalyst SMP Store

The official webstore for **Catalyst SMP** ([play.catalystsmp.net](https://play.catalystsmp.net)) — a
headless Tebex storefront built with Nuxt 3, Vue 3, Pinia and SCSS.

The look is a blend of authentic old-school Minecraft (blocky `Minecraftia` type, sharp edges) and a
modern premium dark UI (near-black page, soft crystal glow). One centred column: hero, the packages,
footer — nothing else.

## 🎨 Theme

All brand tokens live in two places:

| File                                    | Purpose                                                                                                                           |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `assets/styles/theme.scss`              | SCSS variable overrides handed to the whole template (palette, fonts, component settings).                                        |
| `assets/styles/elements/_catalyst.scss` | CSS custom properties (`--cat-*`), the `@font-face` for Minecraftia, base body/scrollbar styling and small component refinements. |

Palette:

| Token           | Value     | Used for                               |
| --------------- | --------- | -------------------------------------- |
| `--cat-bg`      | `#0a090e` | Page background (deep obsidian)        |
| `--cat-surface` | `#14121b` | Cards, sidebars, modals (slate-purple) |
| `--cat-primary` | `#a154f2` | Neon crystal accent + glow             |
| `--cat-cyan`    | `#00ffff` | Secondary highlight, hover states      |

Typography: headings, store titles, section names, price tags and buttons use `Minecraftia`
(`--cat-font-heading`); body copy uses the system UI stack (`--cat-font-body`). The font is
self-hosted from `public/fonts/Minecraftia.ttf`, so there is no third-party font request. Minecraftia
needs a commercial licence for commercial use — see `public/fonts/README.md`.

Checkout itself is themed through `tebexJsConfig` in `app.config.ts` (Tebex.js picks up the same
purple/cyan pair).

## 🧩 Store layout

```
pages/index.vue              hero → one section per Tebex category → footer (owns the <NuxtPage /> outlet for modal routes)
components/store/
  StoreHero.vue              logo, "Store" heading, subtitle and the click-to-copy server IP
  MembershipCard.vue         rank card: optional tag strip, "Catalyst+++" name, included-shard panel,
                             Homes / Auction slots / Order slots rows, price chip as the buy button
  ShardCard.vue              currency card: bonus badge, art, struck-through base amount, price chip
  StoreFooter.vue            centred IP, Mojang disclaimer, legal triggers, Tebex credit
  LegalModals.vue            modal host for the five legal/support pages
utils/store-presentation.ts  derives tags, perks, billing labels and Shard bonus % from the Tebex payload
utils/legal-content.ts       Store Privacy, Catalyst Privacy, Support, Terms, Refunds
```

The page is deliberately bare — no nav bar, no hero buttons, no "how it works" section. The only
chrome that appears is the cart/account control in the top-right corner, and only once something is in
the basket or somebody is signed in.

The presentation layer never mutates the Tebex payload: it reads package names, `type` and
descriptions to decide whether a package is a monthly membership (Homes / Auction slots / Order slots
breakdown, `USD / month`) or a one-time Shard pack (`+10%` … `+40%` bonus badges). Write perks on the
Tebex dashboard as `Homes: 9` lines — or plain sentences like `40 homes` — and the card picks both up,
so re-tuning a tier needs no code change.

## 🔌 Tebex integration (unchanged)

- `@tebexio` headless endpoints stay in `services/*` and Pinia stores (`basket`, `auth`, `category`).
- Every "Add to cart" button calls `useBasketStore().addPackageToBasket()`, which keeps the existing
  behaviour: redirects to the Minecraft username popup (`/login`) when signed out, opens the variable
  flow (`/package/:id/variables`) when the package needs input, and queues pending actions until login.
- `components/CartSidebar.vue` launches `window.Tebex.checkout` with the basket ident, so payment,
  Java authentication and the `payment_complete` confetti hook all behave exactly as before.
- Do not remove `<NuxtPage />` from `pages/index.vue`: `/login`, `/package/:id`, `/package/:id/gift`
  and `/package/:id/variables` are child routes rendered as overlays on top of the store.

## ⚙️ Setup

```bash
npm install
cp .env.example .env   # then fill in the values below
npm run dev            # http://localhost:3000
```

Getting your API keys: [creator.tebex.io → Developers → API keys](https://creator.tebex.io/developers/api-keys).

```bash
NUXT_PUBLIC_API_PUBLIC_KEY=<public token>   # used client side
NUXT_API_PRIVATE_KEY=<private key>          # server only, never exposed
```

Store name, Discord invite, server IP, confetti and checkout theming are configured in
`app.config.ts`.

> Offline development: when the Headless API cannot be reached and the app runs in dev mode,
> `pages/index.vue` falls back to `utils/demo-catalogue.ts` so the design can still be reviewed. That
> branch is gated on `import.meta.dev` and never renders in a production build.

## 🚀 Deploy

Any Node or serverless host works (`npm run build` → `node .output/server/index.mjs`). For Cloudflare
Pages, set the two env vars above in the build configuration — `.env` is not read at runtime.

## 🔗 Useful links

- [Headless API documentation](https://docs.tebex.io/developers/headless-api/overview)
- [Tebex.js documentation](https://docs.tebex.io/developers/tebex.js)
- [Nuxt 3](https://nuxt.com/docs) · [Vue 3](https://vuejs.org/guide/introduction.html) · [Pinia](https://pinia.vuejs.org)

---

Catalyst SMP is not affiliated with or endorsed by Mojang Studios or Microsoft.
