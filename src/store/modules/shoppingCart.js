const state = () => ({
    shoppingCart: [],
});

const getters = {
    calculateTotalQuantity(stateParameter) {
        const stateShoppingCart = stateParameter;
        let totalQuantityOfProduct = 0;
        stateShoppingCart.shoppingCart.forEach((product) => {
            const quantity = product.productQuantity;
            totalQuantityOfProduct += quantity;
        });
        return totalQuantityOfProduct;
    },
    calculateTotalAmount(stateParameter) {
        const stateShoppingCart = stateParameter;
        let totalAmountOfProduct = 0;
        stateShoppingCart.shoppingCart.forEach((product) => {
            totalAmountOfProduct += product.totalPrice;
        });
        return Number(totalAmountOfProduct).toFixed(2);
    },
};

const mutations = {
    ADD_PRODUCT_TO_CART(stateParameter, productSent) {
        const stateShoppingCart = stateParameter;
        const productInShoppingCart = stateShoppingCart.shoppingCart.find(
            (elementInShoppingCart) => elementInShoppingCart.productId === productSent.productId,
        );
        if (productInShoppingCart === undefined) {
            stateShoppingCart.shoppingCart.push(productSent);
        } else {
            productInShoppingCart.productQuantity += 1;
            productInShoppingCart.totalPrice += productSent.unitPrice;
        }
    },
    REMOVE_PRODUCT_FROM_SHOPPING_CART(stateParameter, productSent) {
        const stateShoppingCart = stateParameter;
        const productInShoppingCart = stateShoppingCart.shoppingCart.find(
            (product) => product.productId === productSent.productId,
        );

        stateShoppingCart.shoppingCart.forEach((elementTargeted, indexTargeted) => {
            if (elementTargeted === productInShoppingCart) {
                if (elementTargeted.productQuantity >= 2) {
                    const productInShoppingCartTargeted = elementTargeted;
                    const productQuantityInShoppingCart = productInShoppingCart.productQuantity - 1;
                    const productTotalPrice = productInShoppingCart.totalPrice
                    - productInShoppingCart.unitPrice;

                    productInShoppingCartTargeted.productQuantity = productQuantityInShoppingCart;
                    productInShoppingCartTargeted.totalPrice = Number(productTotalPrice.toFixed(2));
                } else {
                    stateShoppingCart.shoppingCart.splice(indexTargeted, 1);
                }
            }
        });
    },
};

const actions = {
    updateShopingCart({ commit }, product) {
        if (product.added) {
            commit('REMOVE_PRODUCT_FROM_SHOPPING_CART', product);
        } else {
            commit('ADD_PRODUCT_TO_CART', product);
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
