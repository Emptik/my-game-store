<template>
    <div class="ShoppingCart">
        <span class="ShoppingCart__info" v-if="calculateTotalQuantity === 0">
            Empty Shopping Cart
        </span>
        <div v-else>
            <span class="ShoppingCart__info">
                Total Quantity :
                <span>{{ calculateTotalQuantity }}</span>
            </span>
            <span class="ShoppingCart__info">
                Total Amount :
                <span class="ShoppingCart__value">{{ calculateTotalAmount }} $</span>
            </span>

            <!-- Shopping Cart content -->
            <div class="ShoppingCart__grid">
                <div :key="product.id"
                v-for="product in shoppingCart"
                class="ShoppingCart__item">
                    <div class="ShoppingCart__cell ShoppingCart__cell--display">
                        <img :src="product.productImage"
                        :alt="product.productName"
                        class="ShoppingCart__productImage"/>
                    </div>
                    <div class="ShoppingCart__cell">
                        {{ product.productName }}
                    </div>
                    <div class="ShoppingCart__cell">{{ product.productQuantity }}</div>
                    <div class="ShoppingCart__cell">
                        <span class="ShoppingCart__value">
                            {{ product.unitPrice }} $
                        </span>
                    </div>
                    <div class="ShoppingCart__cell">
                        <span class="ShoppingCart__value">
                            {{ product.totalPrice }} $
                        </span>
                    </div>
                    <div class="ShoppingCart__cell">
                        <TrashIcon
                        @click="removeProductFromShoppingCart(
                            product.productId
                        )"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import TrashIcon from '../icons/TrashIcon.vue';

export default {
    name: 'ShoppingCart',
    components: {
        TrashIcon,
    },
    data() {
        return {
            filledShoppingCart: false,
        };
    },
    computed: {
        ...mapGetters(['calculateTotalQuantity']),
        ...mapGetters(['calculateTotalAmount']),
        ...mapState({
            shoppingCart: (state) => state.shoppingCart.shoppingCart,
        }),
    },
    methods: {
        ...mapActions(['updateShopingCart']),
        removeProductFromShoppingCart(productId) {
            const product = {
                productId,
                added: true,
            };
            this.updateShopingCart(product);
        },
    },
};
</script>

<style lang="scss">
.ShoppingCart {
    &__info {
        text-align: center;
        display: block;
        font-size: 2rem;
        padding: 20px;
        color: #31353c;
    }

    &__value {
        color: #509658;
    }

    &__grid {
        display: grid;
        grid-row-gap: 20px;
        margin-top: 40px;
    }

    &__item {
        font-size: 1.5rem;
        color: #31353c;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 20px;

        @media all and (min-width: 768px) {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        }
    }

    &__productImage {
        width: 75px;
    }

    &__cell {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        &--display {
            display: none;

            @media all and (min-width: 768px) {
                display: flex;
            }
        }
    }

    &__value {
        color: #509658;
    }
}
</style>
