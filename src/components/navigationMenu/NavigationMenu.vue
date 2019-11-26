<template>
    <div
        :class="getClass()"
    >
        <perfect-scrollbar
            ref="test"
            :class="getClass('menu-list')"
        >
            <router-link
                :class="getClass('menu-item-link-wrap')"
                v-for="(i, index) in list"
                :key="i.name"
                :to="i.link"
            >
                <div
                    :class="getClass('menu-item', {
                        'icon': i.icon,
                        'active': index === activLink
                    })"
                    :title="i.name"
                    @click="() => setActive(index)"
                />
            </router-link>
        </perfect-scrollbar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import {PerfetScrollbar} from 'vue2-perfect-scrollbar';
// import PS from 'perfect-scrollbar';

import { PerfetScrollbar } from 'vue2-perfect-scrollbar';
import * as PS from 'perfect-scrollbar';
import bevis from '../../lib/bevis/bevis';

type Icon =
    'profile' |
    'scheduler' |
    'store' |
    'public-page' |
    'projects-catalog' |
    'project-settings' |
    'system-settings' |
    'exit';

interface MenuItem {
    name: string;
    link: string;
    icon: Icon;
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
                { name: 'профиль', link: '/Profile', icon: 'profile' },
                { name: 'планировщик', link: '/Scheduler', icon: 'scheduler' },
                { name: 'Хранлище', link: '/Storage', icon: 'store' },
                { name: 'Публичная страница', link: '/PublicPage', icon: 'public-page' },
                { name: 'Каталог', link: '/Catalog', icon: 'projects-catalog' },
                { name: 'настройки проектов', link: '/ProjectsSettings', icon: 'project-settings' },
                { name: 'настройки сис-мы', link: '/SystemSettings', icon: 'system-settings' },
                { name: 'выход', link: '', icon: 'exit' },
            ],
            activLink: 0,
        };
    },
    methods: {
        getClass: bevis('navigation-menu'),
        setActive(index: number) {
            this.activLink = index;
        },
    },
    mounted() {
        const ps = this.$refs.test as unknown;
        document.querySelector('body')!.onresize = () => {
            // ps.scrollLeft = 0;
            // ps.scrollTop = 0;
            // ps.update();
            (ps as Element).scrollTop = 0;
            (ps as Element).scrollLeft = 0;
            (ps as PS.default).update();
        };
    },
});
</script>

<style lang="less" scoped>
@import '../../smart-grid';

.navigation-menu {
    &__menu-item {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: lightblue;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 5px;
        border: 1px solid #000;

        &._icon {

            &_profile {
                background-image: url(./assets/profile.svg);
            }

            &_scheduler {
                background-image: url(./assets/scheduler.svg);
            }

            &_store {
                background-image: url(./assets/store.svg);
            }

            &_public-page {
                background-image: url(./assets/public-page.svg);
            }

            &_projects-catalog {
                background-image: url(./assets/projects-catalog.svg);
            }

            &_project-settings {
                background-image: url(./assets/project-settings.svg);
            }

            &_system-settings {
                background-image: url(./assets/system-settings.svg);
            }

            &_exit {
                background-image: url(./assets/exit.svg);
            }
        }

        &-link-wrap {
            padding: 3px;
            display: inline-block;
            box-sizing: border-box;
            width: 50px;
            min-width: 50px;
            height: 50px;
            min-height: 50px;
        }

        &._active {
            border: 4px dashed black;
        }
    }

    &__menu-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1 0;
        .sm-block({
            padding: 0 10px;
            flex-direction: row;
        });
    }
}

</style>
