<template lang="pug">
    .nav-menu
        perfect-scrollbar.menu-list
            router-link.menu-item(v-for="i in list" :key="i.name" :to="i.link") {{i.name}}
</template>

<script lang="ts">
import Vue from 'vue';

interface MenuItem {
    name: string;
    link: string;
}

interface NavData {
    list: MenuItem[];
    activLink: number;
}

export default Vue.extend({
    props: [
        'index',
    ],
    data(): NavData {
        return {
            list: [
                { name: 'профиль', link: '/Profile' },
                { name: 'планировщик', link: '/Scheduler' },
                { name: 'Хранлище', link: '/Storage' },
                { name: 'Публичная страница', link: '/PublicPage' },
                { name: 'Каталог', link: '/Catalog' },
                { name: 'настройки проектов', link: '/ProjectsSettings' },
                { name: 'настройки сис-мы', link: '/SystemSettings' },
                { name: 'выход', link: '' },
            ],
            activLink: 0,
        };
    },
    methods: {
        setActivLink(index: number) {

        },
    },
});
</script>

<style lang="less" scoped>
@import '../smart-grid';

.nav-menu {
    max-width: 70px;
}

.menu-item {
    display: inline-block;
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    background-color: lightblue;
    margin: auto;
    margin: 10px;
    overflow: hidden;
}
.menu-list {
    width: 70px;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 0;
    .sm-block({
        flex-direction: row;
        height: 70px;
        width: 100vw;
    });
}
</style>
