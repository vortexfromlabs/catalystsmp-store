<template>
    <header class="hero">
        <!--
            The store front is intentionally bare (Donut style). These controls
            only appear once they matter: a cart once something is in it, an
            account chip once somebody is signed in.
        -->
        <div
            v-if="basketCount || authStore.isAuthenticated"
            class="hero__controls"
        >
            <button
                v-if="authStore.isAuthenticated"
                type="button"
                class="hero__control"
                @click="onLogout"
            >
                {{ authStore.user?.username }} · log out
            </button>

            <button
                v-if="basketCount"
                type="button"
                class="hero__control hero__control--cart"
                @click="uiStore.toggleItem('cart-sidebar')"
            >
                {{ $t("buttons.cart", basketCount) }}
            </button>
        </div>

        <img
            class="hero__logo"
            :src="'/logo-catalyst.svg'"
            :alt="`${appConfig.storeName} logo`"
            width="72"
            height="72"
        />

        <h1 class="hero__title mc-heading mc-glow">
            {{ $t("index.hero.title") }}
        </h1>

        <p class="hero__subtitle">
            {{ $t("index.hero.subtitle", { storeName: appConfig.storeName }) }}
        </p>

        <button
            type="button"
            class="hero__ip"
            :class="{ 'hero__ip--copied': copied }"
            :aria-label="
                copied
                    ? 'Server address copied'
                    : 'Copy server address to clipboard'
            "
            @click="copy(appConfig.serverIp)"
        >
            <span class="hero__ip-value">{{ appConfig.serverIp }}</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <template v-if="!copied">
                    <rect x="9" y="9" width="11" height="11" rx="1.5" />
                    <path
                        d="M15 9V6.5A1.5 1.5 0 0 0 13.5 5h-7A1.5 1.5 0 0 0 5 6.5v7A1.5 1.5 0 0 0 6.5 15H9"
                    />
                </template>
                <path v-else d="m5 13 4.5 4.5L19 7.5" />
            </svg>
        </button>
    </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const authStore = useAuthStore();
const uiStore = useUIStore();
const basketStore = useBasketStore();

const basketCount = computed(() => basketStore.basket?.packages?.length ?? 0);

const { copied, copy } = useCopyToClipboard();

const onLogout = () => {
    authStore.logout();
};
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 116px 20px 64px;
    text-align: center;
}

.hero__controls {
    position: absolute;
    top: 18px;
    right: 20px;
    display: flex;
    gap: 8px;
}

.hero__control {
    padding: 7px 12px;
    border: 1px solid var(--cat-line-soft);
    border-radius: 6px;
    background: rgba(20, 18, 27, 0.7);
    color: var(--cat-text-muted);
    cursor: pointer;
    font-family: inherit;
    font-size: 12px;
    transition:
        color 0.16s ease,
        border-color 0.16s ease;

    &:hover {
        border-color: var(--cat-primary);
        color: var(--cat-text-high);
    }

    &--cart {
        border-color: var(--cat-line);
        color: var(--cat-text-high);
    }
}

.hero__logo {
    margin-bottom: 26px;
    filter: drop-shadow(0 0 14px rgba(161, 84, 242, 0.6))
        drop-shadow(0 0 34px rgba(161, 84, 242, 0.3));
}

.hero__title {
    margin: 0;
    font-size: clamp(30px, 4.6vw, 42px);
    color: var(--cat-text-high);
}

.hero__subtitle {
    margin: 16px 0 0;
    color: var(--cat-text);
    font-size: 15px;
    letter-spacing: 0.02em;
}

.hero__ip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 14px;
    padding: 4px 6px;
    border: 0;
    background: none;
    cursor: pointer;
    transition: opacity 0.16s ease;

    &:hover,
    &:focus-visible {
        opacity: 1;
    }
}

.hero__ip-value {
    color: var(--cat-cyan);
    font-family: var(--cat-font-heading);
    font-size: 15px;
    letter-spacing: 0.04em;
    text-shadow: 0 0 12px rgba(0, 255, 255, 0.35);
}

.hero__ip svg {
    width: 15px;
    height: 15px;
    stroke: var(--cat-cyan);
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.65;
}

.hero__ip--copied {
    .hero__ip-value,
    .hero__ip svg {
        color: var(--cat-success);
        stroke: var(--cat-success);
        opacity: 1;
    }
}

@media (max-width: 640px) {
    .hero {
        padding: 96px 18px 44px;
    }

    .hero__controls {
        top: 12px;
        right: 12px;
    }
}
</style>
