<template>
    <div class="store">
        <StoreHero />

        <main class="store__main">
            <p v-if="usingSampleData" class="store__note">
                {{ $t("index.dev.sampleNote") }}
            </p>

            <section
                v-for="category in categories"
                :id="`category-${category.id}`"
                :key="category.id"
                class="store__category"
            >
                <div class="store__head">
                    <h2 class="store__title mc-heading">
                        {{ category.name }}
                    </h2>
                    <p class="store__hint">
                        {{ hintFor(category) }}
                    </p>
                </div>

                <div
                    class="store__grid"
                    :class="`store__grid--${gridFor(category)}`"
                >
                    <template
                        v-for="pkg in packagesFor(category)"
                        :key="pkg.id"
                    >
                        <StoreShardCard v-if="isCurrency(pkg)" :pkg="pkg" />
                        <StoreMembershipCard v-else :pkg="pkg" />
                    </template>
                </div>
            </section>

            <div v-if="!categories.length && !pending" class="store__empty">
                <p>{{ $t("index.empty.title") }}</p>
                <p class="store__empty-sub">
                    {{ $t("index.empty.description") }}
                </p>
                <button type="button" @click="refresh">
                    {{ $t("index.empty.cta") }}
                </button>
            </div>
        </main>

        <StoreFooter />

        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import type { CategoryWithPackages, Package } from "~/types";

definePageMeta({
    keepalive: true,
});

const { t } = useI18n();
const basketStore = useBasketStore();

// Categories come back with their packages attached, which is all the storefront
// needs - the basket and checkout stay inside the Pinia stores.
const { data, pending, refresh } = await useAsyncData<CategoryWithPackages[]>(
    "store-home",
    () => getCategories(basketStore.basketId ?? undefined, true),
);

/**
 * Live Tebex data first; when the API is unreachable in development we fall
 * back to a fixture so the front end stays reviewable offline. Delete
 * `demo-catalogue.ts` once the store is pointed at a real category.
 */
const liveCategories = computed<CategoryWithPackages[]>(() => data.value ?? []);
const usingSampleData = computed(
    () => import.meta.dev && liveCategories.value.length === 0,
);

const categories = computed<CategoryWithPackages[]>(() =>
    usingSampleData.value ? DEMO_CATEGORIES : liveCategories.value,
);

const packagesFor = (category: CategoryWithPackages): Package[] =>
    sortPackagesForCategory(category.packages ?? []);

const isCurrency = (pkg: Package): boolean => presentPackage(pkg).isCurrency;

const hintFor = (category: CategoryWithPackages): string =>
    packagesFor(category).some((pkg) => isCurrency(pkg))
        ? t("index.category.hintCurrency")
        : t("index.category.hintMemberships");

const gridFor = (category: CategoryWithPackages): string => {
    const packages = packagesFor(category);
    const currency = packages.filter((pkg) => isCurrency(pkg)).length;

    if (currency && currency === packages.length) return "currency";

    return currency ? "mixed" : "memberships";
};

// The title template in `app.vue` appends the store name.
useHead({ title: () => t("index.hero.title") });
</script>

<style lang="scss" scoped>
.store {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: radial-gradient(
            ellipse 72% 38% at 50% 0%,
            rgba(161, 84, 242, 0.09),
            transparent 65%
        )
        #060409;
}

.store__main {
    flex: 1 1 auto;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px 40px;
}

.store__note {
    margin: 0 0 26px;
    color: var(--cat-text-muted);
    font-size: 12px;
    text-align: center;
}

.store__category {
    margin: 0 0 64px;
}

.store__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px 20px;
    margin-bottom: 26px;
}

.store__title {
    margin: 0;
    font-size: 25px;
    color: var(--cat-text-high);
    letter-spacing: 0.04em;
}

.store__hint {
    margin: 0;
    color: var(--cat-text-muted);
    font-size: 13.5px;
}

.store__grid {
    display: grid;
    gap: 22px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    &--currency {
        gap: 18px;
        grid-template-columns: repeat(auto-fit, minmax(216px, 1fr));
    }

    &--mixed {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
}

.store__empty {
    display: grid;
    place-items: center;
    gap: 8px;
    padding: 60px 20px;
    color: var(--cat-text);
    text-align: center;

    p {
        margin: 0;
        font-size: 17px;
    }
}

.store__empty-sub {
    color: var(--cat-text-muted) !important;
    font-size: 13px !important;
    max-width: 420px;
}

@media (max-width: 640px) {
    .store__main {
        padding: 0 16px 24px;
    }

    .store__grid,
    .store__grid--currency,
    .store__grid--mixed {
        grid-template-columns: 1fr;
    }
}
</style>
