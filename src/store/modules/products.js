import productPrices from '@/data/productPrices';

const state = () => ({
    products: [],
    productPrices,
});

const mutations = {
    ADD_PRODUCTS(stateParameter, productData) {
        const stateProducts = stateParameter;
        stateProducts.products = productData;
        stateProducts.products.forEach((productTargeted) => {
            const product = productTargeted;
            stateProducts.productPrices.forEach((productPriceTargeted) => {
                const productPrice = productPriceTargeted;
                if (product.id === productPrice.id) {
                    product.unitPrice = productPrice.unitPrice;
                }
            });
        });
    },
};

const actions = {
    getProducts({ commit }, url) {
        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    // eslint-disable-next-line
                    console.log(`Error : ${response.status}`);
                } else {
                    response.json()
                        .then((data) => {
                            commit('ADD_PRODUCTS', data.results);
                        })
                        .catch((error) => {
                            // eslint-disable-next-line
                            console.error(error);
                        });
                }
            });
    },
};

export default {
    state,
    mutations,
    actions,
};
