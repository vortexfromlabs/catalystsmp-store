<template>
    <article
        :class="['pkg', { 'pkg--featured': presentation.featured }]"
        @click="openDetails"
    >
        <p
            v-if="presentation.tag && presentation.featured"
            class="pkg__tag mc-caps"
        >
            {{ presentation.tag }}
        </p>

        <h3 class="pkg__name mc-heading">
            {{ presentation.nameBase
            }}<span>{{ presentation.nameSuffix }}</span>
        </h3>

        <div v-if="presentation.shardsIncluded" class="pkg__bonus">
            <div class="pkg__bonus-text">
                <span class="pkg__bonus-value mc-heading">
                    {{ presentation.shardsIncluded }}
                </span>
                <span class="pkg__bonus-label">Shards included</span>
            </div>
            <img
                v-if="pkg.image"
                class="pkg__bonus-image"
                :src="pkg.image"
                :alt="''"
                width="72"
                height="72"
                loading="lazy"
            />
        </div>

        <ul v-if="presentation.perks.length" class="pkg__perks">
            <li v-for="perk in presentation.perks" :key="perk.label">
                <span>{{ perk.label }}</span>
                <strong>{{ perk.value }}</strong>
            </li>
        </ul>

        <div
            v-else-if="pkg.description"
            class="pkg__description"
            v-html="pkg.description"
        ></div>

        <button
            type="button"
            class="pkg__buy"
            :disabled="loading"
            :aria-label="`${$t('buttons.add_to_cart')} ${pkg.name}`"
            @click.stop="addToCart"
        >
            <span class="pkg__price mc-heading">
                {{ $n(pkg.base_price, "currency") }}
            </span>
            <span class="pkg__currency">USD</span>
            <span v-if="presentation.cycle" class="pkg__cycle">
                {{ presentation.cycle }}
            </span>
        </button>
    </article>
</template>

<script setup lang="ts">
import type { Package } from "~/types";

const props = defineProps<{ pkg: Package }>();

const basketStore = useBasketStore();
const router = useRouter();

const presentation = computed(() => presentPackage(props.pkg));
const loading = ref(false);

const openDetails = () => router.push(`/package/${props.pkg.id}`);

// Same hook the stock template uses: auth popup, variable flow and Tebex
// checkout all keep working through the basket store.
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
.pkg {
    --pkg-accent: var(--cat-primary);

    display: flex;
    flex-direction: column;
    padding: 30px 30px 28px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    background: linear-gradient(180deg, #16141d 0%, #121018 100%);
    cursor: pointer;
    transition:
        border-color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-3px);
        border-color: rgba(161, 84, 242, 0.42);
        box-shadow: 0 18px 46px rgba(0, 0, 0, 0.45);
    }

    &--featured {
        --pkg-accent: #ffbb55;

        border-color: rgba(255, 187, 85, 0.5);
        background: radial-gradient(
                ellipse 100% 45% at 50% 0%,
                rgba(255, 187, 85, 0.1),
                transparent 70%
            ),
            linear-gradient(180deg, #1a1620 0%, #121018 100%);

        &:hover {
            border-color: rgba(255, 187, 85, 0.75);
            box-shadow:
                0 18px 46px rgba(0, 0, 0, 0.5),
                0 0 28px rgba(255, 187, 85, 0.14);
        }
    }
}

.pkg__tag {
    margin: -30px -30px 22px;
    padding: 12px;
    border-bottom: 1px solid rgba(255, 187, 85, 0.22);
    color: var(--pkg-accent);
    font-size: 11px;
    text-align: center;
}

.pkg__name {
    margin: 0 0 26px;
    color: var(--cat-text-high);
    font-size: 27px;

    /* The "+", "++" and "+++" tiers are the coloured part of the name. */
    span {
        color: #7fd4ff;
    }
}

.pkg__bonus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    margin-bottom: 18px;
    padding: 16px 18px;
    border: 1px solid rgba(161, 84, 242, 0.28);
    border-radius: 10px;
    background: linear-gradient(
        100deg,
        rgba(161, 84, 242, 0.16),
        rgba(161, 84, 242, 0.05)
    );
}

.pkg__bonus-text {
    display: grid;
    gap: 6px;
    text-align: left;
}

.pkg__bonus-value {
    color: var(--cat-text-high);
    font-size: 21px;
    letter-spacing: 0.06em;
}

.pkg__bonus-label {
    color: var(--cat-text-muted);
    font-size: 12px;
}

.pkg__bonus-image {
    width: 64px;
    height: 64px;
    object-fit: contain;
    image-rendering: pixelated;
}

.pkg__perks {
    display: grid;
    margin: 0 0 8px;
    padding: 0;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 13px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        color: var(--cat-text);
        font-size: 14px;

        &:last-child {
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
    }

    strong {
        color: var(--cat-text-high);
        font-weight: 700;
    }
}

.pkg__description {
    margin-bottom: 14px;
    color: var(--cat-text-muted);
    font-size: 13px;
    line-height: 1.65;

    :deep(p) {
        margin: 0 0 6px;
    }

    :deep(ul) {
        margin: 0;
        padding-inline-start: 18px;
    }
}

.pkg__buy {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 7px;
    width: 100%;
    margin-top: auto;
    padding: 14px 16px;
    border: 1px solid rgba(127, 212, 255, 0.28);
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

.pkg--featured .pkg__buy {
    border-color: rgba(255, 187, 85, 0.4);
    background: rgba(255, 187, 85, 0.06);

    &:hover {
        border-color: rgba(255, 187, 85, 0.8);
        background: rgba(255, 187, 85, 0.12);
    }
}

.pkg__price {
    color: #7fd4ff;
    font-size: 21px;
    letter-spacing: 0.03em;
}

.pkg--featured .pkg__price {
    color: #ffbb55;
}

.pkg__currency {
    color: #7fd4ff;
    font-family: var(--cat-font-heading);
    font-size: 11px;
    opacity: 0.85;
}

.pkg__cycle {
    color: var(--cat-text);
    font-size: 13px;
}
</style>
