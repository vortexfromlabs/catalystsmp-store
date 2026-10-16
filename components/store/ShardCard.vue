<template>
    <article class="shard" @click="openDetails">
        <span v-if="bonusBadge" class="shard__bonus">
            {{ bonusBadge }}
        </span>

        <div class="shard__media">
            <img
                v-if="pkg.image"
                :src="pkg.image"
                :alt="pkg.name"
                width="96"
                height="96"
                loading="lazy"
            />
            <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 4 9l8 13 8-13-8-7Z" />
                <path d="M4 9h16M12 2v20" />
            </svg>
        </div>

        <h3 class="shard__name mc-heading">
            <s v-if="presentation.baseAmountLabel" class="shard__base">
                {{ presentation.baseAmountLabel }}
            </s>
            <template v-if="presentation.amountLabel">
                {{ presentation.amountLabel }}
            </template>
            <template v-else>{{ pkg.name }}</template>
        </h3>

        <button
            type="button"
            class="shard__buy"
            :disabled="loading"
            :aria-label="`${$t('buttons.add_to_cart')} ${pkg.name}`"
            @click.stop="addToCart"
        >
            <span class="shard__price mc-heading">
                {{ $n(pkg.base_price, "currency") }}
            </span>
            <span class="shard__currency">USD</span>
        </button>
    </article>
</template>

<script setup lang="ts">
import type { Package } from "~/types";

const props = defineProps<{ pkg: Package }>();

const basketStore = useBasketStore();
const router = useRouter();

const presentation = computed(() => presentPackage(props.pkg));
const bonusBadge = computed(() =>
    formatBonusBadge(presentation.value.bonusPercent),
);
const loading = ref(false);

const openDetails = () => router.push(`/package/${props.pkg.id}`);

const addToCart = async () => {
    loading.value = true;

    try {
        await basketStore.addPackageToBasket(props.pkg.id, 1);
    } finally {
        loading.value = false;
    }
};
</script>

<style lang="scss" scoped>
.shard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 20px 22px;
    border: 1px solid transparent;
    border-radius: 14px;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        border-color 0.2s ease;

    &:hover {
        border-color: rgba(161, 84, 242, 0.35);
        background: rgba(20, 18, 27, 0.75);
    }
}

.shard__bonus {
    margin-bottom: 18px;
    padding: 4px 12px;
    border-radius: 999px;
    background: rgba(78, 201, 110, 0.14);
    color: #59d77f;
    font-family: var(--cat-font-heading);
    font-size: 13px;
    letter-spacing: 0.06em;
}

.shard__media {
    display: grid;
    place-items: center;
    width: 100%;
    height: 120px;
    margin-bottom: 14px;

    img {
        width: 104px;
        height: 104px;
        object-fit: contain;
        image-rendering: pixelated;
        filter: drop-shadow(0 0 20px rgba(161, 84, 242, 0.45));
    }

    svg {
        width: 62px;
        height: 62px;
        fill: rgba(161, 84, 242, 0.2);
        stroke: var(--cat-primary);
        stroke-width: 0.7;
        filter: drop-shadow(0 0 16px rgba(161, 84, 242, 0.5));
    }
}

.shard__name {
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 0 20px;
    color: #b183ff;
    font-size: 19px;
    text-align: center;
}

.shard__base {
    color: var(--cat-text-muted);
    text-decoration-color: rgba(255, 105, 180, 0.55);
    text-decoration-thickness: 2px;
}

.shard__buy {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 6px;
    min-width: 152px;
    padding: 11px 18px;
    border: 1px solid rgba(127, 212, 255, 0.25);
    border-radius: 10px;
    background: rgba(127, 212, 255, 0.05);
    cursor: pointer;
    transition:
        border-color 0.18s ease,
        background-color 0.18s ease;

    &:hover {
        border-color: rgba(127, 212, 255, 0.6);
        background: rgba(127, 212, 255, 0.1);
    }

    &:disabled {
        opacity: 0.6;
        cursor: progress;
    }
}

.shard__price {
    color: #7fd4ff;
    font-size: 19px;
    letter-spacing: 0.03em;
}

.shard__currency {
    color: #7fd4ff;
    font-family: var(--cat-font-heading);
    font-size: 11px;
    opacity: 0.85;
}
</style>
