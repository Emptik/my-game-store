<template>
    <header class="Header">
        <span class="Header__description">
            {{ calculateTotalQuantity }} items in your shopping cart
        </span>
        <router-link to="/shopping-cart">
            <ShoppingCartIcon/>
        </router-link>
    </header>
</template>

<script>
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'Header',
    components: {
        ShoppingCartIcon,
    },
    computed: {
        ...mapGetters(['calculateTotalQuantity']),
    },
};
</script>

<style lang="scss">
.Header {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &__description {
        color: #31353c;
        font-size: 1.5rem;
    }
}
</style>
