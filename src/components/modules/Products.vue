<template>
    <section class="Products">
        <div class="Products__item"
        v-for="product in products"
        :key="product.id">
            <h3 class="Products__title">{{ product.name }}</h3>
            <img :src="product.background_image" :alt="product.name">
            <div class="Products__footer">
                <span class="Products__price">{{ product.unitPrice }} $</span>
                <Button
                v-on:click="addProductToCart(
                    product.id,
                    product.name,
                    product.background_image,
                    product.unitPrice
                )">
                    Add to Shopping Cart
                </Button>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Button from '@/components/modules/Button.vue';

export default {
    name: 'Products',
    components: {
        Button,
    },
    computed: mapState({
        products: (state) => state.products.products,
    }),
    props: {
        productsUrl: {
            type: String,
            required: true,
        },
    },
    methods: {
        ...mapActions(['updateShopingCart']),
        ...mapActions(['getProducts']),
        addProductToCart(productId, productName, productImage, unitPrice) {
            const productQuantity = 1;
            const totalPrice = unitPrice;
            const product = {
                productId,
                productName,
                productImage,
                productQuantity,
                unitPrice,
                totalPrice,
            };
            this.updateShopingCart(product);
        },
    },
    mounted() {
        this.getProducts(this.productsUrl);
    },
};
</script>

<style lang="scss">
.Products {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: 1fr;

    @media all and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media all and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media all and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    &__item {
        background-color: #31353c;
    }

    &__title {
        padding: 20px;
        font-size: 1rem;
        color: #FFF;
        font-weight: normal;
        margin: 0;
        text-align: center;
        font-size: 1.5rem;
    }

    &__footer {
        padding: 20px;
        text-align: center;
    }

    &__price {
        color: #FFF;
        display: block;
        padding-bottom: 20px;
        font-size: 1.5rem;
    }
}
</style>
