<template>
    <div class="error">
        <div class="error__panel">
            <img
                class="error__logo"
                :src="'/logo-catalyst.svg'"
                alt="Catalyst SMP"
                width="72"
                height="72"
            />

            <h1 class="mc-heading mc-glow">{{ error?.statusCode ?? 500 }}</h1>
            <p class="error__message">
                {{ error?.statusMessage || "Something went sideways." }}
            </p>

            <Button variant="primary" @click="handleError"
                >Back to the store</Button
            >
        </div>
    </div>
</template>

<script setup lang="ts">
// The error page renders outside the layout, so pull the theme in directly.
import "~/assets/styles/main.scss";

defineProps({
    error: Object,
});

function handleError() {
    clearError({ redirect: "/" });
}
</script>

<style scoped lang="scss">
.error {
    display: grid;
    min-height: 100vh;
    padding: 24px;
    place-items: center;
    text-align: center;
}

.error__panel {
    display: grid;
    gap: 14px;
    justify-items: center;
    padding: 40px 34px;
    border: 1px solid var(--cat-line);
    border-radius: var(--cat-radius-lg);
    background: rgba(20, 18, 27, 0.85);
}

.error__logo {
    filter: drop-shadow(0 0 16px rgba(161, 84, 242, 0.55));
}

.error__panel h1 {
    margin: 0;
    font-size: 40px;
    color: var(--cat-text-high);
}

.error__message {
    margin: 0 0 10px;
    color: var(--cat-text-muted);
    font-size: 14px;
}
</style>
