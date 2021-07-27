import { createStore } from 'vuex';
import products from './modules/products';
import shoppingCart from './modules/shoppingCart';

export default createStore({
    modules: {
        products,
        shoppingCart,
    },
});
