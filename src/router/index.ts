import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Scheduler from '../views/Scheduler.vue';
import Storage from '../views/storage.vue';
import Profile from '../views/profile.vue';
import ProjectsCatalog from '../views/projects-catalog.vue';
import ProjectsSettings from '../views/projects-settings.vue';
import PublicPage from '../views/public-page.vue';
import SystemSettings from '../views/system-settings.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        component: About,
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/Scheduler',
        name: 'Scheduler',
        component: Scheduler,
    },
    {
        path: '/Storage',
        name: 'Storage',
        component: Storage,
    },
    {
        path: '/PublicPage',
        name: 'PublicPage',
        component: PublicPage,
    },
    {
        path: '/Catalog',
        name: 'ProjectsCatalog',
        component: ProjectsCatalog,
    },
    {
        path: '/ProjectsSettings',
        name: 'ProjectsSettings',
        component: ProjectsSettings,
    },
    {
        path: '/SystemSettings',
        name: 'SystemSettings',
        component: SystemSettings,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
