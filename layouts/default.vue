<template>
    <div class="layout layout--default">
        <CartSidebar />

        <div class="w-100 container--fluid">
            <slot />
        </div>

        <StoreLegalModals />
    </div>
</template>

<style lang="scss" scoped>
.layout {
    position: relative;

    &--default {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }
}
</style>
