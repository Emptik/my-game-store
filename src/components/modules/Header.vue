<template>
    <header class="Header">
        <div class="Header__shoppingCart">
            <span class="Header__description">
                {{ calculateTotalQuantity }}
            </span>
            <router-link to="/shopping-cart">
                <ShoppingCartIcon/>
            </router-link>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue';

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

    &__description {
        color: #31353c;
        font-size: 1.5rem;
    }

    &__shoppingCart {
        padding: 23px 20px 23px 20px;
        display: flex;
        align-items: center;
        background-color: #78c9e2;
        border-radius: 50px;
    }
}
</style>
