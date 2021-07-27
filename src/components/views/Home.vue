<template>
    <Products productsUrl='https://api.rawg.io/api/games?key=eac0bb92501b41b3b9187965729826e6'/>
</template>

<script>
import Products from '@/components/modules/Products.vue';

export default {
    name: 'Home',
    components: {
        Products,
    },
};
</script>
