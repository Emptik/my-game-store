<template>
    <button class="Button Button--hovered">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
};
</script>

<style lang="scss">
.Button {
    padding: 10px 30px 10px 30px;
    background-color: #78c9e2;
    border: 1px solid #31353c;
    border-radius: 5px;
    color: #31353c;

    &--hovered {
        &:hover {
            @media all and (min-width: 1200px) {
                cursor: pointer;
            }
        }
    }
}
</style>
