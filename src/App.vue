<template>
    <div id="app">
        <nav-menu />
        <router-view class="page" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavMenu from './components/NavigationMenu.vue';

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
    display: flex;
    justify-content: stretch;
    overflow: hidden;
    .sm-block({
        flex-direction: column;
    });
}
.page {
    width: 100%;
}
</style>
