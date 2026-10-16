<template>
    <footer class="footer">
        <button
            type="button"
            class="footer__ip mc-heading"
            :class="{ 'footer__ip--copied': copied }"
            @click="copy(appConfig.serverIp)"
        >
            {{ appConfig.serverIp }}
        </button>

        <p class="footer__disclaimer">{{ $t("footer.disclaimer") }}</p>

        <nav class="footer__links" :aria-label="$t('footer.legalTitle')">
            <button
                v-for="slug in LEGAL_PAGE_ORDER"
                :key="slug"
                type="button"
                class="footer__link"
                @click="open(slug)"
            >
                {{ LEGAL_PAGES[slug].title }}
            </button>
        </nav>

        <div class="footer__tebex">
            <a
                class="footer__tebex-link"
                :href="`https://www.tebex.io/?utm_source=store&utm_campaign=${appConfig.storeId}`"
                target="_blank"
                rel="noopener nofollow"
                :aria-label="$t('footer.poweredBy', { tebex: 'Tebex' })"
            >
                <Icon
                    name="tebex"
                    width="82px"
                    height="43px"
                    :font-controlled="false"
                />
            </a>
            <p class="footer__tebex-note">{{ $t("footer.blurb") }}</p>
            <div class="footer__tebex-links">
                <a
                    href="https://tebex.io/impressum"
                    target="_blank"
                    rel="noopener nofollow"
                    >{{ $t("footer.imprint") }}</a
                >
                <a
                    href="https://tebex.io/terms"
                    target="_blank"
                    rel="noopener nofollow"
                    >{{ $t("footer.terms") }}</a
                >
                <a
                    href="https://tebex.io/privacy"
                    target="_blank"
                    rel="noopener nofollow"
                    >{{ $t("footer.privacy") }}</a
                >
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const { open } = useLegalModal();
const { copied, copy } = useCopyToClipboard();
</script>

<style lang="scss" scoped>
.footer {
    display: grid;
    justify-items: center;
    gap: 18px;
    padding: 54px 24px 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
}

.footer__ip {
    padding: 0;
    border: 0;
    background: none;
    color: var(--cat-text-high);
    font-size: 19px;
    cursor: pointer;
    text-shadow: 0 0 16px rgba(161, 84, 242, 0.45);
    transition: color 0.18s ease;

    &:hover {
        color: var(--cat-primary-soft);
    }

    &--copied {
        color: var(--cat-success);
    }
}

.footer__disclaimer {
    margin: 0;
    color: var(--cat-text-muted);
    font-size: 12.5px;
}

.footer__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 26px;
}

.footer__link {
    padding: 0;
    border: 0;
    background: none;
    color: var(--cat-text);
    cursor: pointer;
    font-size: 12.5px;
    transition: color 0.18s ease;

    &:hover {
        color: var(--cat-primary-soft);
        text-decoration: underline;
    }
}

.footer__tebex {
    display: grid;
    justify-items: center;
    gap: 8px;
    margin-top: 10px;
    padding-top: 22px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    width: min(560px, 100%);
}

.footer__tebex-link {
    display: inline-flex;
    line-height: 0;

    // The Tebex mark ships as a dark wordmark; on obsidian we invert it to a
    // soft light-grey that sits quietly under the store links.
    :deep(svg) {
        filter: brightness(0) invert(1);
        opacity: 0.4;
        transition: opacity 0.18s ease;
    }

    &:hover :deep(svg) {
        opacity: 0.75;
    }
}

.footer__tebex-note {
    margin: 0;
    color: var(--cat-text-muted);
    font-size: 11.5px;
    line-height: 1.7;
    max-width: 480px;
}

.footer__tebex-links {
    display: flex;
    gap: 22px;

    a {
        color: var(--cat-text-muted);
        font-size: 11.5px;

        &:hover {
            color: var(--cat-primary-soft);
        }
    }
}
</style>
