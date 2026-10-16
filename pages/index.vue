<template>
  <div class="catalyst-store">
    <a class="skip-link" href="#store">Skip to the store</a>

    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#top" aria-label="Catalyst SMP Store home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 2.8 35 11.4v17.2L20 37.2 5 28.6V11.4L20 2.8Z" fill="currentColor" fill-opacity=".13" />
              <path d="M20 2.8 35 11.4v17.2L20 37.2 5 28.6V11.4L20 2.8Z" stroke="currentColor" stroke-width="1.5" />
              <path d="M24.9 13.6a7.5 7.5 0 1 0 0 12.8" stroke="currentColor" stroke-width="3" stroke-linecap="square" />
              <path d="m27.2 13.2 3.2-2.1M27.2 26.8l3.2 2.1" stroke="#b9a0ff" stroke-width="2" stroke-linecap="square" />
            </svg>
          </span>
          <span class="brand-copy">
            <strong>CATALYST <span>SMP</span></strong>
            <small>OFFICIAL STORE</small>
          </span>
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <a href="#store">Store</a>
          <a href="#how-it-works">How it works</a>
        </nav>

        <button
          class="header-ip"
          type="button"
          :aria-label="copyState ? 'Server address copied' : 'Copy server address'"
          @click="copyServerIp"
        >
          <span class="header-status-dot" aria-hidden="true"></span>
          <span class="header-ip-text">{{ copyState ? 'IP COPIED' : 'PLAY.CATALYSTSMP.NET' }}</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="8" y="8" width="12" height="12" rx="2" />
            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
          </svg>
        </button>
      </div>
    </header>

    <main id="main-content">
      <section id="top" class="hero" aria-labelledby="hero-title">
        <div class="hero-inner">
          <div class="hero-copy">
            <p class="eyebrow"><span class="eyebrow-line"></span> THE OFFICIAL CATALYST SMP STORE</p>
            <h1 id="hero-title">Enter the world.<br /><span>Shape it.</span></h1>
            <p class="hero-description">
              Find the extras that make your time on Catalyst SMP your own.
              Pick an upgrade, check out securely, and get back to your story.
            </p>

            <div class="hero-actions">
              <a class="primary-button" href="#store">
                Explore the store
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              <button class="server-button" type="button" @click="copyServerIp">
                <span class="server-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z" />
                    <path d="m8.5 10 3.5-2 3.5 2v4L12 16l-3.5-2v-4Z" />
                  </svg>
                </span>
                <span class="server-copy">
                  <small>JOIN THE SERVER</small>
                  <strong>play.catalystsmp.net</strong>
                </span>
                <span class="server-copy-label">{{ copyState ? 'COPIED' : 'COPY IP' }}</span>
              </button>
            </div>

            <div class="hero-note">
              <span class="note-check" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none"><path d="m5 10 3.2 3.2L15.5 6" /></svg>
              </span>
              <span>Made for the Catalyst SMP community</span>
            </div>
          </div>

          <div class="hero-art" aria-hidden="true">
            <div class="art-grid"></div>
            <div class="art-glow"></div>
            <div class="orbit orbit-one"></div>
            <div class="orbit orbit-two"></div>
            <div class="art-spark spark-one"></div>
            <div class="art-spark spark-two"></div>
            <div class="art-spark spark-three"></div>

            <div class="crystal-wrap">
              <svg class="crystal" viewBox="0 0 460 460" fill="none">
                <defs>
                  <linearGradient id="crystalMain" x1="103" y1="104" x2="344" y2="348" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E8D8FF" />
                    <stop offset=".3" stop-color="#A985FF" />
                    <stop offset=".68" stop-color="#7146EF" />
                    <stop offset="1" stop-color="#39208E" />
                  </linearGradient>
                  <linearGradient id="crystalSide" x1="150" y1="116" x2="290" y2="360" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C9B0FF" />
                    <stop offset="1" stop-color="#5630C5" />
                  </linearGradient>
                  <linearGradient id="crystalDark" x1="295" y1="167" x2="359" y2="320" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#875CFF" />
                    <stop offset="1" stop-color="#321776" />
                  </linearGradient>
                  <filter id="crystalGlow" x="38" y="35" width="384" height="390" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="22" />
                  </filter>
                </defs>
                <circle cx="230" cy="230" r="142" fill="#8A5BFF" fill-opacity=".25" filter="url(#crystalGlow)" />
                <path d="m229 70 89 42 61 88-35 111-98 78-105-37-61-93 28-104 61-68 60-17Z" fill="#211638" stroke="#AC8AFF" stroke-opacity=".5" stroke-width="2" />
                <path d="m229 70 17 137-105-120 88-17Z" fill="#E7D9FF" />
                <path d="m229 70 89 42-72 95-17-137Z" fill="url(#crystalMain)" />
                <path d="m318 112 61 88-134 7 73-95Z" fill="#9B78FF" />
                <path d="m379 200-35 111-99-104 134-7Z" fill="url(#crystalDark)" />
                <path d="m344 311-98 78-1-182 99 104Z" fill="#6642D4" />
                <path d="m246 389-105-37 104-145 1 182Z" fill="url(#crystalSide)" />
                <path d="m141 352-61-93 85-172 61 120-85 145Z" fill="#8C64F4" />
                <path d="m165 87 81 120-61-12-48-40 28-68Z" fill="#F0E8FF" fill-opacity=".75" />
                <path d="m185 195 61 12-104 145 43-157Z" fill="#B69AFF" />
                <path d="m246 207 99 104-99-1-1-103Z" fill="#4527A6" />
                <path d="m246 310 98 1-98 78v-79Z" fill="#321D7B" />
                <path d="m185 195 61 12-1 103-60-115Z" fill="#D2C0FF" fill-opacity=".72" />
                <path d="m229 70 89 42 61 88-35 111-98 78-105-37-61-93 28-104 61-68 60-17Z" stroke="#E8DBFF" stroke-opacity=".58" stroke-width="2" />
                <path d="m110 165 54-60m175 12 32 45M92 280l49 72m208-42 28-74" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="3" stroke-linecap="round" />
              </svg>
            </div>

            <div class="art-label art-label-top">
              <span class="label-dot"></span>
              <span>CATALYST SMP</span>
              <small>SURVIVAL WORLD</small>
            </div>
            <div class="art-label art-label-bottom">
              <span class="label-glyph">✦</span>
              <span>YOUR NEXT CHAPTER</span>
            </div>
            <div class="art-coordinate">C / 01&nbsp;&nbsp; — &nbsp;&nbsp;SURVIVAL</div>
          </div>
        </div>
      </section>

      <div class="trust-strip" aria-label="Store information">
        <div class="trust-inner">
          <span class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
            OFFICIAL CATALYST STORE
          </span>
          <span class="trust-divider" aria-hidden="true"></span>
          <span class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="M3.5 10h17M7 15h4" /></svg>
            CHECKOUT POWERED BY TEBEX
          </span>
          <span class="trust-divider" aria-hidden="true"></span>
          <span class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v18M4.5 7.5h15M6 17h12" /><path d="m5 7.5 3 6H2l3-6Zm14 0 3 6h-6l3-6ZM12 3l3 4.5H9L12 3Z" /></svg>
            BUILT FOR THE SMP
          </span>
        </div>
      </div>

      <section id="store" class="store-section" aria-labelledby="store-title" :aria-busy="pending">
        <div class="section-heading">
          <div>
            <p class="section-kicker">THE CATALYST COLLECTION</p>
            <h2 id="store-title">Choose your <span>upgrade.</span></h2>
            <p class="section-description">Browse the current packages and find the right fit for your next adventure.</p>
          </div>
          <div v-if="!pending && categoryList.length" class="catalogue-count">
            <span class="count-indicator"></span>
            {{ categoryList.length }} {{ categoryList.length === 1 ? 'collection' : 'collections' }}
          </div>
        </div>

        <nav v-if="!pending && categoryList.length" class="category-nav" aria-label="Store categories">
          <a v-for="category in categoryList" :key="category.id" :href="`#${categoryId(category)}`">
            {{ category.name }}
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
          </a>
        </nav>

        <div v-if="pending" class="loading-panel" role="status" aria-live="polite">
          <span class="loading-orb"></span>
          <span>Loading the Catalyst catalogue…</span>
        </div>

        <div v-else-if="error" class="state-panel" role="alert">
          <span class="state-icon" aria-hidden="true">!</span>
          <h3>We couldn't load the store.</h3>
          <p>Please try again in a moment.</p>
          <button class="retry-button" type="button" @click="refresh()">Try again</button>
        </div>

        <div v-else-if="!categoryList.length" class="state-panel">
          <span class="state-icon" aria-hidden="true">✦</span>
          <h3>The catalogue is taking a breather.</h3>
          <p>There aren't any packages available right now. Check back soon.</p>
        </div>

        <div v-else class="category-list">
          <section
            v-for="(category, index) in categoryList"
            :id="categoryId(category)"
            :key="category.id"
            class="category-section"
            :aria-labelledby="`${categoryId(category)}-title`"
          >
            <div class="category-heading">
              <div class="category-heading-main">
                <span class="category-index">{{ String(index + 1).padStart(2, '0') }}</span>
                <div>
                  <h3 :id="`${categoryId(category)}-title`">{{ category.name }}</h3>
                  <p>{{ category.packages?.length ?? 0 }} {{ (category.packages?.length ?? 0) === 1 ? 'item' : 'items' }} in this collection</p>
                </div>
              </div>
              <a class="back-to-top" href="#top">
                BACK TO TOP
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 12V4m0 0L4.5 7.5M8 4l3.5 3.5" /></svg>
              </a>
            </div>

            <div v-if="category.packages?.length" class="product-grid">
              <article v-for="pkg in category.packages" :key="pkg.id" class="product-cell">
                <PackageCard
                  :pkg="pkg"
                  :row="(category.packages?.length ?? 0) === 1"
                  hide-options
                />
              </article>
            </div>

            <div v-else class="category-empty">
              <span aria-hidden="true">✦</span>
              <p>Nothing in this collection just yet.</p>
            </div>
          </section>
        </div>
      </section>

      <section id="how-it-works" class="guide-section" aria-labelledby="guide-title">
        <div class="guide-heading">
          <p class="section-kicker">SIMPLE. SECURE. READY.</p>
          <h2 id="guide-title">From checkout<br />to <span>in-game.</span></h2>
          <p>Three quick steps to get back to what matters: playing.</p>
        </div>

        <div class="steps-grid">
          <article class="step-card">
            <span class="step-number">01</span>
            <span class="step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5h16v13H4zM8 9h8M8 13h5" /><path d="m16 17 2 2 3-4" /></svg>
            </span>
            <h3>Pick your package</h3>
            <p>Explore the collections above and choose the option that suits you.</p>
          </article>
          <article class="step-card">
            <span class="step-number">02</span>
            <span class="step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 10h16M8 15h3" /></svg>
            </span>
            <h3>Checkout securely</h3>
            <p>Follow the checkout flow and double-check your Minecraft account details.</p>
          </article>
          <article class="step-card">
            <span class="step-number">03</span>
            <span class="step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M4 20V9l8-5 8 5v11H4Z" /><path d="M9 20v-6h6v6M8 10h.01M16 10h.01" /></svg>
            </span>
            <h3>Back to Catalyst</h3>
            <p>Join the server and enjoy your purchase in the world you call home.</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main">
        <a class="brand footer-brand" href="#top" aria-label="Catalyst SMP Store home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 2.8 35 11.4v17.2L20 37.2 5 28.6V11.4L20 2.8Z" fill="currentColor" fill-opacity=".13" />
              <path d="M20 2.8 35 11.4v17.2L20 37.2 5 28.6V11.4L20 2.8Z" stroke="currentColor" stroke-width="1.5" />
              <path d="M24.9 13.6a7.5 7.5 0 1 0 0 12.8" stroke="currentColor" stroke-width="3" stroke-linecap="square" />
              <path d="m27.2 13.2 3.2-2.1M27.2 26.8l3.2 2.1" stroke="#b9a0ff" stroke-width="2" stroke-linecap="square" />
            </svg>
          </span>
          <span class="brand-copy">
            <strong>CATALYST <span>SMP</span></strong>
            <small>OFFICIAL STORE</small>
          </span>
        </a>

        <div class="footer-right">
          <p>Make your mark. Then make another.</p>
          <div class="footer-links">
            <a href="#store">Browse packages</a>
            <a href="#how-it-works">How it works</a>
            <button type="button" @click="copyServerIp">Copy server IP</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Not affiliated with or endorsed by Mojang Studios or Microsoft.</span>
        <span>Checkout powered by Tebex.</span>
      </div>
    </footer>

    <div v-if="toastMessage" class="toast-message" role="status" aria-live="polite">
      <span class="toast-check" aria-hidden="true">✓</span>
      {{ toastMessage }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, ref } from 'vue'

const SERVER_IP = 'play.catalystsmp.net'

useSeoMeta({
  title: 'Catalyst SMP Store',
  ogTitle: 'Catalyst SMP Store',
  description: 'Explore the official Catalyst SMP store and choose an upgrade for your next adventure.',
  ogDescription: 'Explore the official Catalyst SMP store and choose an upgrade for your next adventure.',
  twitterCard: 'summary_large_image',
})

const categoryStore = useCategoryStore()
const { data: categories, pending, error, refresh } = await useAsyncData(
  'catalyst-store-categories',
  () => categoryStore.fetchCategories(),
  { default: () => [] },
)

const categoryList = computed(() => (Array.isArray(categories.value) ? categories.value : []))

function categoryId(category: { id?: string | number; name?: string }) {
  const raw = `${category.id ?? ''}-${category.name ?? ''}`
  const slug = raw
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  return `category-${slug || 'collection'}`
}

const copyState = ref(false)
const toastMessage = ref('')
let toastTimeout: ReturnType<typeof setTimeout> | undefined

async function copyServerIp() {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(SERVER_IP)
    } else if (import.meta.client) {
      const input = document.createElement('textarea')
      input.value = SERVER_IP
      input.setAttribute('readonly', '')
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      const copied = document.execCommand('copy')
      input.remove()
      if (!copied) throw new Error('Clipboard access was denied')
    } else {
      return
    }

    copyState.value = true
    toastMessage.value = 'Server IP copied to clipboard'
  } catch {
    copyState.value = false
    toastMessage.value = `Server IP: ${SERVER_IP}`
  }

  if (toastTimeout) clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    copyState.value = false
    toastMessage.value = ''
  }, 2600)
}

onBeforeUnmount(() => {
  if (toastTimeout) clearTimeout(toastTimeout)
})
</script>

<style scoped>
.catalyst-store {
  --bg: #090a0e;
  --panel: #111219;
  --panel-raised: #151621;
  --line: rgba(255, 255, 255, 0.09);
  --muted: #9798a9;
  --soft: #c5c5d0;
  --white: #f7f6fb;
  --violet: #a586ff;
  --violet-bright: #c0a9ff;
  --mint: #8de5c0;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 73% 5%, rgba(110, 70, 190, 0.14), transparent 34rem),
    radial-gradient(ellipse at 4% 38%, rgba(58, 115, 139, 0.07), transparent 32rem),
    var(--bg);
  color: var(--white);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
}

:global(html) {
  scroll-behavior: smooth;
  scroll-padding-top: 96px;
  background: #090a0e;
}

:global(body) {
  margin: 0;
}

:global(::selection) {
  color: #100c1c;
  background: #c0a9ff;
}

.catalyst-store * {
  box-sizing: border-box;
}

.catalyst-store a {
  color: inherit;
}

.skip-link {
  position: absolute;
  z-index: 100;
  top: 8px;
  left: 8px;
  padding: 10px 14px;
  transform: translateY(-150%);
  border-radius: 8px;
  background: var(--white);
  color: #090a0e !important;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: sticky;
  z-index: 40;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.065);
  background: rgba(9, 10, 14, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.header-inner,
.hero-inner,
.trust-inner,
.store-section,
.guide-section,
.footer-main,
.footer-bottom {
  width: min(1180px, calc(100% - 56px));
  margin-inline: auto;
}

.header-inner {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  flex: 0 0 auto;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 40px;
  height: 40px;
  color: var(--violet);
  place-items: center;
}

.brand-mark svg {
  display: block;
  width: 100%;
  height: 100%;
}

.brand-copy {
  display: grid;
  gap: 3px;
}

.brand-copy strong {
  color: var(--white);
  font-size: 13px;
  font-weight: 850;
  letter-spacing: 0.14em;
  line-height: 1;
}

.brand-copy strong span {
  color: var(--violet-bright);
}

.brand-copy small {
  color: #797a89;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.23em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 34px;
  margin-left: auto;
}

.main-nav a {
  color: #b0b0bd;
  font-size: 12px;
  font-weight: 550;
  text-decoration: none;
  transition: color 160ms ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--white);
}

.header-ip {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 38px;
  padding: 0 12px;
  border: 1px solid rgba(165, 134, 255, 0.27);
  border-radius: 7px;
  background: rgba(165, 134, 255, 0.07);
  color: #d7cbff;
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.header-ip:hover {
  transform: translateY(-1px);
  border-color: rgba(165, 134, 255, 0.55);
  background: rgba(165, 134, 255, 0.13);
}

.header-ip-text {
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 0.12em;
}

.header-ip svg {
  width: 15px;
  height: 15px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}

.header-status-dot,
.count-indicator,
.label-dot {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--mint);
  box-shadow: 0 0 12px rgba(141, 229, 192, 0.6);
}

.hero {
  position: relative;
  isolation: isolate;
  padding: clamp(56px, 8vw, 100px) 0 67px;
}

.hero::before {
  position: absolute;
  z-index: -1;
  top: 0;
  left: -14%;
  width: 64%;
  height: 90%;
  background: radial-gradient(ellipse, rgba(110, 70, 190, 0.1), transparent 68%);
  content: "";
  pointer-events: none;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(400px, 0.96fr);
  align-items: center;
  gap: clamp(20px, 4vw, 60px);
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding: 20px 0 28px;
}

.eyebrow,
.section-kicker {
  display: flex;
  align-items: center;
  gap: 11px;
  margin: 0 0 23px;
  color: var(--violet-bright);
  font-size: 10px;
  font-weight: 760;
  letter-spacing: 0.2em;
}

.eyebrow-line {
  display: inline-block;
  width: 27px;
  height: 1px;
  background: var(--violet);
  box-shadow: 0 0 12px rgba(165, 134, 255, 0.7);
}

.hero h1 {
  max-width: 730px;
  margin: 0;
  color: var(--white);
  font-size: clamp(54px, 7.3vw, 98px);
  font-weight: 760;
  letter-spacing: -0.085em;
  line-height: 0.98;
}

.hero h1 span,
.section-heading h2 span,
.guide-heading h2 span {
  color: transparent;
  background: linear-gradient(100deg, #d2c2ff 3%, #a586ff 45%, #8b7bff 100%);
  background-clip: text;
  -webkit-background-clip: text;
}

.hero-description {
  max-width: 495px;
  margin: 24px 0 28px;
  color: #a8a8b6;
  font-size: 15px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.primary-button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 0 20px;
  border: 1px solid #bba6ff;
  border-radius: 7px;
  background: linear-gradient(135deg, #c9b8ff, #a587ff);
  box-shadow: 0 8px 30px rgba(113, 70, 239, 0.22), inset 0 1px rgba(255, 255, 255, 0.4);
  color: #171023 !important;
  font-size: 12px;
  font-weight: 760;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 36px rgba(113, 70, 239, 0.32), inset 0 1px rgba(255, 255, 255, 0.45);
}

.primary-button svg {
  width: 17px;
  height: 17px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.server-button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--white);
  cursor: pointer;
  text-align: left;
  transition: background 160ms ease, border-color 160ms ease;
}

.server-button:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.055);
}

.server-icon {
  display: grid;
  width: 33px;
  height: 33px;
  border: 1px solid rgba(165, 134, 255, 0.19);
  border-radius: 6px;
  background: rgba(165, 134, 255, 0.09);
  color: #c6b2ff;
  place-items: center;
}

.server-icon svg {
  width: 19px;
  height: 19px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.4;
}

.server-copy {
  display: grid;
  gap: 3px;
}

.server-copy small {
  color: #858594;
  font-size: 8px;
  font-weight: 740;
  letter-spacing: 0.15em;
}

.server-copy strong {
  color: #e7e4ef;
  font-size: 11px;
  font-weight: 650;
}

.server-copy-label {
  margin-left: 4px;
  color: #aaa0c6;
  font-size: 8px;
  font-weight: 750;
  letter-spacing: 0.1em;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 24px;
  color: #858592;
  font-size: 11px;
}

.note-check {
  display: grid;
  width: 17px;
  height: 17px;
  border: 1px solid rgba(141, 229, 192, 0.35);
  border-radius: 50%;
  background: rgba(141, 229, 192, 0.08);
  color: var(--mint);
  place-items: center;
}

.note-check svg {
  width: 11px;
  height: 11px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.hero-art {
  position: relative;
  display: grid;
  min-height: 460px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  background:
    radial-gradient(ellipse at 48% 51%, rgba(131, 93, 228, 0.14), transparent 43%),
    linear-gradient(145deg, rgba(20, 19, 29, 0.96), rgba(13, 14, 20, 0.9));
  place-items: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035), 0 30px 90px rgba(0, 0, 0, 0.18);
}

.art-grid {
  position: absolute;
  inset: 0;
  opacity: 0.28;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(ellipse at center, black 15%, transparent 78%);
}

.art-glow {
  position: absolute;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background: rgba(120, 82, 227, 0.22);
  filter: blur(75px);
}

.orbit {
  position: absolute;
  width: 310px;
  height: 310px;
  border: 1px solid rgba(178, 157, 255, 0.17);
  border-radius: 50%;
  transform: rotate(-25deg) scaleY(0.44);
}

.orbit-one {
  animation: orbit-turn 22s linear infinite;
}

.orbit-two {
  width: 380px;
  height: 380px;
  border-color: rgba(163, 134, 255, 0.12);
  transform: rotate(55deg) scaleY(0.48);
}

.crystal-wrap {
  position: relative;
  z-index: 2;
  display: grid;
  width: min(75%, 355px);
  aspect-ratio: 1;
  filter: drop-shadow(0 24px 35px rgba(70, 41, 161, 0.3));
  animation: crystal-float 5s ease-in-out infinite;
  place-items: center;
}

.crystal {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.art-label {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 6px;
  background: rgba(14, 14, 21, 0.76);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.22);
  color: #d7d4e1;
  font-size: 9px;
  font-weight: 740;
  letter-spacing: 0.12em;
  backdrop-filter: blur(10px);
}

.art-label-top {
  top: 11%;
  left: 7%;
}

.art-label-top small {
  margin-left: 4px;
  color: #8c8b9a;
  font-size: 7px;
  letter-spacing: 0.1em;
}

.art-label-bottom {
  right: 7%;
  bottom: 12%;
  color: #d9d0f4;
}

.label-glyph {
  color: var(--violet-bright);
  font-size: 13px;
}

.art-coordinate {
  position: absolute;
  right: 6%;
  top: 8%;
  color: #777685;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 8px;
  letter-spacing: 0.12em;
}

.art-spark {
  position: absolute;
  z-index: 1;
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  background: #d5c5ff;
  box-shadow: 0 0 15px 3px rgba(177, 147, 255, 0.7);
}

.spark-one { top: 28%; left: 19%; }
.spark-two { right: 17%; top: 36%; width: 3px; height: 3px; }
.spark-three { bottom: 26%; left: 28%; width: 3px; height: 3px; }

.trust-strip {
  border-block: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.018);
}

.trust-inner {
  display: flex;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
}

.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #a8a7b4;
  font-size: 9px;
  font-weight: 740;
  letter-spacing: 0.14em;
}

.trust-item svg {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  stroke: #a58aff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.trust-divider {
  width: 1px;
  height: 22px;
  flex: 0 0 auto;
  background: rgba(255, 255, 255, 0.1);
}

.store-section {
  padding-top: 94px;
  padding-bottom: 42px;
  scroll-margin-top: 100px;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}

.section-kicker {
  margin-bottom: 13px;
  color: #a993ef;
  font-size: 9px;
}

.section-heading h2,
.guide-heading h2 {
  margin: 0;
  color: var(--white);
  font-size: clamp(32px, 4vw, 49px);
  font-weight: 720;
  letter-spacing: -0.065em;
  line-height: 1.08;
}

.section-description {
  max-width: 510px;
  margin: 12px 0 0;
  color: #9696a5;
  font-size: 13px;
  line-height: 1.65;
}

.catalogue-count {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 4px;
  color: #9b9ba9;
  font-size: 11px;
}

.count-indicator {
  width: 6px;
  height: 6px;
}

.category-nav {
  display: flex;
  gap: 8px;
  margin: 0 0 35px;
  padding: 0 0 10px;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(165, 134, 255, 0.3) transparent;
}

.category-nav a {
  display: inline-flex;
  min-height: 36px;
  flex: 0 0 auto;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border: 1px solid rgba(255, 255, 255, 0.085);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.025);
  color: #c5c3ce;
  font-size: 11px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 160ms ease, color 160ms ease, background 160ms ease;
}

.category-nav a:hover {
  border-color: rgba(165, 134, 255, 0.43);
  background: rgba(165, 134, 255, 0.08);
  color: var(--white);
}

.category-nav svg {
  width: 13px;
  height: 13px;
  stroke: #898697;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.category-section {
  margin-bottom: 55px;
  scroll-margin-top: 105px;
}

.category-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}

.category-heading-main {
  display: flex;
  align-items: center;
  gap: 14px;
}

.category-index {
  display: grid;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(165, 134, 255, 0.22);
  border-radius: 7px;
  background: rgba(165, 134, 255, 0.075);
  color: #c2b1fa;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  font-weight: 700;
  place-items: center;
}

.category-heading h3 {
  margin: 0;
  color: #f1eff7;
  font-size: 19px;
  font-weight: 690;
  letter-spacing: -0.035em;
}

.category-heading p {
  margin: 5px 0 0;
  color: #838391;
  font-size: 10px;
}

.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #858392 !important;
  font-size: 8px;
  font-weight: 730;
  letter-spacing: 0.12em;
  text-decoration: none;
  transition: color 160ms ease;
}

.back-to-top:hover {
  color: var(--violet-bright) !important;
}

.back-to-top svg {
  width: 15px;
  height: 15px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.product-cell {
  min-width: 0;
  --catalyst-accent: #a586ff;
  --catalyst-accent-soft: rgba(165, 134, 255, 0.14);
}

.category-empty {
  display: flex;
  min-height: 92px;
  align-items: center;
  gap: 12px;
  padding: 18px;
  border: 1px dashed rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  color: #9695a3;
}

.category-empty span {
  color: var(--violet);
  font-size: 18px;
}

.category-empty p {
  margin: 0;
  font-size: 12px;
}

.loading-panel,
.state-panel {
  display: flex;
  min-height: 210px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.025);
  color: #a6a5b2;
  text-align: center;
}

.loading-panel {
  flex-direction: row;
  gap: 13px;
  font-size: 12px;
}

.loading-orb {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(165, 134, 255, 0.23);
  border-top-color: var(--violet-bright);
  border-radius: 50%;
  animation: spin 800ms linear infinite;
}

.state-panel {
  padding: 28px;
}

.state-icon {
  display: grid;
  width: 36px;
  height: 36px;
  margin-bottom: 12px;
  border: 1px solid rgba(165, 134, 255, 0.24);
  border-radius: 10px;
  background: rgba(165, 134, 255, 0.1);
  color: #c4b2ff;
  font-size: 16px;
  font-weight: 700;
  place-items: center;
}

.state-panel h3 {
  margin: 0;
  color: #f2f0f7;
  font-size: 16px;
}

.state-panel p {
  margin: 8px 0 0;
  font-size: 12px;
}

.retry-button {
  margin-top: 16px;
  padding: 9px 14px;
  border: 1px solid rgba(165, 134, 255, 0.35);
  border-radius: 6px;
  background: rgba(165, 134, 255, 0.1);
  color: #dbd2ff;
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 650;
}

.retry-button:hover {
  background: rgba(165, 134, 255, 0.18);
}

.guide-section {
  display: grid;
  grid-template-columns: minmax(220px, 0.78fr) minmax(0, 1.8fr);
  align-items: center;
  gap: clamp(34px, 6vw, 86px);
  margin-top: 8px;
  margin-bottom: 104px;
  padding: 38px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 12px;
  background:
    radial-gradient(ellipse at 0 0, rgba(138, 91, 255, 0.1), transparent 44%),
    linear-gradient(135deg, rgba(19, 19, 27, 0.94), rgba(15, 16, 22, 0.9));
  scroll-margin-top: 100px;
}

.guide-heading .section-kicker {
  display: block;
  line-height: 1.5;
}

.guide-heading h2 {
  font-size: clamp(32px, 4vw, 45px);
}

.guide-heading > p:last-child {
  max-width: 280px;
  margin: 14px 0 0;
  color: #9998a7;
  font-size: 12px;
  line-height: 1.7;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
}

.step-card {
  position: relative;
  min-height: 188px;
  padding: 19px 15px 16px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 8px;
  background: rgba(8, 9, 13, 0.43);
}

.step-number {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #737281;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 9px;
}

.step-icon {
  display: grid;
  width: 36px;
  height: 36px;
  margin-bottom: 20px;
  border: 1px solid rgba(165, 134, 255, 0.18);
  border-radius: 7px;
  background: rgba(165, 134, 255, 0.08);
  color: #bba7ff;
  place-items: center;
}

.step-icon svg {
  width: 19px;
  height: 19px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.4;
}

.step-card h3 {
  margin: 0 0 8px;
  color: #eeecf4;
  font-size: 12px;
  font-weight: 680;
}

.step-card p {
  margin: 0;
  color: #9695a4;
  font-size: 10px;
  line-height: 1.65;
}

.site-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.075);
  background: rgba(4, 5, 8, 0.32);
}

.footer-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 31px;
  padding-bottom: 27px;
}

.footer-brand .brand-mark {
  width: 36px;
  height: 36px;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 26px;
}

.footer-right > p {
  margin: 0;
  color: #a4a2b1;
  font-size: 11px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 17px;
}

.footer-links a,
.footer-links button {
  padding: 0;
  border: 0;
  background: transparent;
  color: #888795;
  cursor: pointer;
  font: inherit;
  font-size: 10px;
  text-decoration: none;
  transition: color 150ms ease;
}

.footer-links a:hover,
.footer-links button:hover {
  color: var(--white);
}

.footer-bottom {
  display: flex;
  min-height: 45px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.055);
  color: #696977;
  font-size: 9px;
}

.toast-message {
  position: fixed;
  z-index: 80;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 9px;
  max-width: calc(100vw - 32px);
  padding: 12px 15px;
  border: 1px solid rgba(165, 134, 255, 0.32);
  border-radius: 8px;
  background: rgba(19, 18, 27, 0.96);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  color: #e8e3f6;
  font-size: 12px;
  animation: toast-in 180ms ease-out both;
  backdrop-filter: blur(12px);
}

.toast-check {
  display: grid;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: rgba(141, 229, 192, 0.12);
  color: var(--mint);
  font-size: 12px;
  font-weight: 800;
  place-items: center;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

.catalyst-store :focus-visible {
  outline: 2px solid #c5b1ff;
  outline-offset: 4px;
}

@keyframes crystal-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-9px); }
}

@keyframes orbit-turn {
  from { transform: rotate(-25deg) scaleY(0.44); }
  to { transform: rotate(335deg) scaleY(0.44); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes toast-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 980px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr) minmax(340px, 0.82fr);
    gap: 22px;
  }

  .hero-art {
    min-height: 400px;
  }

  .trust-item {
    font-size: 8px;
    letter-spacing: 0.1em;
  }

  .guide-section {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .guide-heading > p:last-child {
    max-width: none;
  }
}

@media (max-width: 760px) {
  .header-inner,
  .hero-inner,
  .trust-inner,
  .store-section,
  .guide-section,
  .footer-main,
  .footer-bottom {
    width: min(100% - 36px, 620px);
  }

  .header-inner {
    min-height: 66px;
    gap: 12px;
  }

  .main-nav {
    gap: 17px;
  }

  .main-nav a {
    font-size: 11px;
  }

  .header-ip {
    min-height: 35px;
    padding-inline: 9px;
  }

  .header-ip-text {
    font-size: 8px;
  }

  .hero {
    padding-top: 56px;
    padding-bottom: 50px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    padding: 5px 0 0;
  }

  .hero h1 {
    font-size: clamp(54px, 12vw, 82px);
  }

  .hero-description {
    max-width: 540px;
  }

  .hero-art {
    min-height: min(78vw, 430px);
    max-height: 430px;
  }

  .crystal-wrap {
    width: min(68%, 320px);
  }

  .trust-inner {
    min-height: 64px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px 18px;
    padding-block: 14px;
  }

  .trust-item {
    font-size: 8px;
  }

  .trust-item svg {
    width: 15px;
    height: 15px;
  }

  .trust-divider {
    height: 17px;
  }

  .store-section {
    padding-top: 68px;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .guide-section {
    margin-bottom: 70px;
    padding: 26px 20px;
  }

  .footer-main {
    align-items: flex-start;
  }

  .footer-right {
    align-items: flex-end;
    flex-direction: column;
    gap: 12px;
  }
}

@media (max-width: 560px) {
  .header-inner,
  .hero-inner,
  .trust-inner,
  .store-section,
  .guide-section,
  .footer-main,
  .footer-bottom {
    width: calc(100% - 32px);
  }

  .brand {
    gap: 8px;
  }

  .brand-mark {
    width: 34px;
    height: 34px;
  }

  .brand-copy strong {
    font-size: 11px;
    letter-spacing: 0.11em;
  }

  .brand-copy small {
    font-size: 7px;
  }

  .main-nav {
    display: none;
  }

  .header-ip-text {
    max-width: 142px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hero {
    padding-top: 45px;
  }

  .eyebrow {
    margin-bottom: 18px;
    font-size: 8px;
    letter-spacing: 0.16em;
  }

  .hero h1 {
    font-size: clamp(49px, 14vw, 68px);
  }

  .hero-description {
    margin-top: 18px;
    font-size: 13px;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .primary-button,
  .server-button {
    width: 100%;
  }

  .primary-button {
    justify-content: space-between;
    padding-inline: 16px;
  }

  .server-button {
    justify-content: flex-start;
  }

  .server-copy-label {
    margin-left: auto;
  }

  .hero-art {
    min-height: 310px;
    border-radius: 10px;
  }

  .crystal-wrap {
    width: min(74%, 270px);
  }

  .art-label {
    gap: 6px;
    padding: 8px;
    font-size: 7px;
  }

  .art-label-top {
    top: 8%;
    left: 4%;
  }

  .art-label-top small {
    font-size: 6px;
  }

  .art-label-bottom {
    right: 4%;
    bottom: 8%;
  }

  .art-coordinate {
    top: 7%;
    right: 4%;
    font-size: 6px;
  }

  .trust-inner {
    justify-content: flex-start;
    gap: 12px 15px;
  }

  .trust-item {
    gap: 6px;
    font-size: 7px;
    letter-spacing: 0.06em;
  }

  .trust-divider {
    display: none;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .section-heading h2,
  .guide-heading h2 {
    font-size: 35px;
  }

  .section-description {
    font-size: 12px;
  }

  .category-nav {
    margin-bottom: 27px;
  }

  .category-section {
    margin-bottom: 40px;
  }

  .category-heading h3 {
    font-size: 16px;
  }

  .category-heading p {
    font-size: 9px;
  }

  .back-to-top {
    font-size: 7px;
  }

  .product-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    min-height: 0;
  }

  .step-icon {
    margin-bottom: 13px;
  }

  .step-card p {
    max-width: 280px;
    font-size: 11px;
  }

  .footer-main {
    flex-direction: column;
    gap: 22px;
    padding-top: 25px;
    padding-bottom: 22px;
  }

  .footer-right {
    align-items: flex-start;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 12px 16px;
  }

  .footer-bottom {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding-block: 12px;
  }

  .toast-message {
    right: 16px;
    bottom: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  :global(html) {
    scroll-behavior: auto;
  }

  .catalyst-store *,
  .catalyst-store *::before,
  .catalyst-store *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
