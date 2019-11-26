<template>
    <div id="app">
        <nav-menu class="menu" />
        <router-view class="page" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavMenu from './components/navigationMenu/NavigationMenu.vue';

export default Vue.extend({
    components: {
        NavMenu,
    },
});
</script>

<style lang="less">
@import './smart-grid';

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #000;
    list-style: none;
}

#app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: stretch;
    .sm-block({
        flex-direction: column;
    });
}

.menu {
    height: 100%;
    width: 70px;
    .sm-block({
        width: 100%;
        height: 70px;
    });
}

.page {
    width: calc(100% - 70px);
    height: 100%;
    padding: 0 20px;
    .sm-block({
        width: 100%;
        height: calc(100% - 70px);
    });
}

</style>
