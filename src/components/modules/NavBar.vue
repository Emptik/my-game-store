<template>
    <div>
        <div class="NavBar">
            <router-link to="/">Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>

<style lang="scss">
.NavBar {
    text-align: center;

    a {
        font-weight: bold;
        color: #31353c;
        font-size: 2rem;

        &.router-link-exact-active {
            color: #21b7de;
        }
    }
}
</style>
