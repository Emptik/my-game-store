<template>
    <div id="app" class="App">
        <div class="App__header"><Header/></div>
        <div class="App__navbar"><NavBar/></div>
        <div class="App__logo">
            <router-link to="/"><img alt="Logo" src="../assets/images/logo-200.png"></router-link>
        </div>
        <main class="App__inner"><router-view/></main>
    </div>
</template>

<script>
import Header from '@/components/modules/Header.vue';
import NavBar from '@/components/modules/NavBar.vue';

export default {
    components: {
        Header,
        NavBar,
    },
};
</script>

<style lang="scss">
html {
    font-size: 62.5%;
}
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
}

img {
    display: block;
    max-width: 100%;    /* Responsive images */
    height: auto;       /* by default */
    border: 0;
}

// Component
.App {
    margin: 20px;

    &__header {
        margin-bottom: 40px;
        position: sticky;
        top: 20px;
    }

    &__navbar {
        margin-bottom: 40px;
    }

    &__logo {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }

    &__inner {
        @media all and (min-width: 1920px) {
            margin: 0 auto;
            max-width: 1920px;
        }
    }
}
</style>
