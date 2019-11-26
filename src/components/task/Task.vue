<template>
    <div :class="getClass()">
        <input
            type="text"
            v-if="isChanging"
            ref="titleInput"
            @blur="setTitle()"
            @keypress.enter="setTitle()"
            v-model="newTitle"
            :class="getClass('title')"
        >
        <h3
            v-else
            :class="getClass('title')"
            @click="changeTitle"
            :title="title"
        >
            {{title}}
        </h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import bevis from '../../lib/bevis/bevis';

export interface TaskData {
    id: number;
    title: string;
    newTitle: string;
    color?: string;
    isChanging: boolean;
}

export default Vue.extend({
    props: {
        taskId: Number,
    },
    data(): TaskData {
        return {
            id: this.taskId,
            title: 'New Task',
            newTitle: '',
            color: undefined,
            isChanging: false,
        };
    },
    methods: {
        getClass: bevis('task'),
        changeTitle() {
            this.isChanging = true;
            this.newTitle = this.title;
            this.$nextTick()
                .then(() => {
                    (this.$refs.titleInput as HTMLElement).focus();
                });
        },
        setTitle() {
            if (this.newTitle) {
                this.title = this.newTitle;
            }
            this.isChanging = false;
        },
    },
});
</script>

<style lang="less" scoped>
.task {
    &__title {
        box-sizing: border-box;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: transparent;
        outline: none;
        border: 1px solid #0001;
        font-size: 16px;
        font-weight: normal;
        font-family: serif;
    }
}
</style>
