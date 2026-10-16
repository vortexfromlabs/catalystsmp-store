<template>
    <Modal v-model="isOpen" width="640px" class="legal-modal">
        <article v-if="page" class="legal">
            <header class="legal__header">
                <span class="legal__kicker mc-caps">Catalyst SMP</span>
                <h4 class="legal__title">{{ page.title }}</h4>
                <p class="legal__updated">{{ page.updated }}</p>
            </header>

            <p class="legal__intro">{{ page.intro }}</p>

            <section
                v-for="(section, index) in page.sections"
                :key="`${page.key}-${index}`"
                class="legal__section"
            >
                <h5 v-if="section.heading" class="legal__section-title">
                    {{ section.heading }}
                </h5>

                <p
                    v-for="(paragraph, pIndex) in section.paragraphs ?? []"
                    :key="pIndex"
                >
                    {{ paragraph }}
                </p>

                <ul v-if="section.bullets?.length" class="legal__list">
                    <li
                        v-for="(bullet, bIndex) in section.bullets"
                        :key="bIndex"
                    >
                        <span class="legal__bullet" aria-hidden="true"></span>
                        <span>{{ bullet }}</span>
                    </li>
                </ul>
            </section>

            <footer v-if="page.links?.length" class="legal__links">
                <a
                    v-for="link in page.links"
                    :key="link.href"
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="legal__link"
                >
                    {{ link.label }}
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                            d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V10"
                            stroke="currentColor"
                            stroke-width="1.4"
                        />
                        <path
                            d="M9 2h5v5"
                            stroke="currentColor"
                            stroke-width="1.4"
                        />
                        <path
                            d="M14 2 7.5 8.5"
                            stroke="currentColor"
                            stroke-width="1.4"
                        />
                    </svg>
                </a>
            </footer>

            <div class="legal__actions">
                <Button variant="tertiary" @click="close">Close</Button>
            </div>
        </article>
    </Modal>
</template>

<script setup lang="ts">
const { page, isOpen, close } = useLegalModal();

// The shared Overlay only closes on scrim click, so wire up the escape key.
onKeyStroke("Escape", (event) => {
    if (!isOpen.value) return;

    event.preventDefault();
    close();
});
</script>

<style lang="scss" scoped>
.legal {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px 4px 4px;
}

.legal__header {
    display: grid;
    gap: 6px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--cat-line);
}

.legal__kicker {
    color: var(--cat-primary);
    font-size: 10px;
}

.legal__title {
    margin: 0;
    color: var(--cat-text-high);
}

.legal__updated {
    color: var(--cat-text-muted);
    font-size: 12px;
}

.legal__intro {
    padding: 12px 14px;
    border-left: 2px solid var(--cat-primary);
    border-radius: 0 var(--cat-radius) var(--cat-radius) 0;
    background: rgba(161, 84, 242, 0.08);
    color: var(--cat-text-high);
    font-size: 14px;
    line-height: 1.65;
}

.legal__section {
    display: grid;
    gap: 10px;
}

.legal__section-title {
    margin: 6px 0 0;
    color: var(--cat-cyan);
    font-size: 14px;
    letter-spacing: 0.06em;
}

.legal__section p {
    color: var(--cat-text);
    font-size: 14px;
    line-height: 1.7;
}

.legal__list {
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.legal__list li {
    display: grid;
    grid-template-columns: 12px auto;
    align-items: start;
    gap: 10px;
    color: var(--cat-text);
    font-size: 14px;
    line-height: 1.65;
}

.legal__bullet {
    width: 6px;
    height: 6px;
    margin-top: 8px;
    background: var(--cat-primary);
    box-shadow: 0 0 10px rgba(161, 84, 242, 0.6);
}

.legal__links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 6px;
    border-top: 1px solid var(--cat-line-soft);
}

.legal__link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 12px;
    border: 1px solid var(--cat-line);
    border-radius: var(--cat-radius);
    color: var(--cat-text-high);
    font-size: 12px;
    text-decoration: none;
    transition:
        border-color 0.18s ease,
        background-color 0.18s ease;

    svg {
        width: 13px;
        height: 13px;
    }

    &:hover {
        border-color: var(--cat-cyan);
        background: rgba(0, 255, 255, 0.06);
        color: var(--cat-cyan);
    }
}

.legal__actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 4px;
}
</style>
