<template>
    <div :class="getClass()">
        <input
            v-if="isNameChanging"
            type="text"
            :class="getClass('name')"
            v-model="newName"
            @blur="setName()"
            @keypress.enter="setName()"
            ref="nameInput"
        >
        <h3
            v-else
            :class="getClass('name')"
            @click="changeName"
        >
            {{name}}
        </h3>
        <perfect-scrollbar :class="getClass('tasks-list')">
            <button
                :class="getClass('btn-add-task')"
                @click="addTask()"
            />
            <task
                v-for="task in tasksId"
                :key="`${taskSheetId} ${task}`"
                :class="getClass('task')"
                :taskId="task"
            />
        </perfect-scrollbar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import bevis from '../../lib/bevis/bevis';
import Task from '../task/Task.vue';

export interface TaskSheetData {
    name: string;
    newName: string;
    tasksId: number[];
    isNameChanging: boolean;
}

export default Vue.extend({
    data(): TaskSheetData {
        return {
            name: 'New Task List',
            newName: '',
            tasksId: [],
            isNameChanging: false,
        };
    },
    props: {
        taskSheetId: Number,
    },
    methods: {
        getClass: bevis('task-sheet'),
        addTask(): void {
            this.tasksId.unshift(this.tasksId.length);
        },
        changeName(): void {
            this.isNameChanging = true;
            this.newName = this.name;
            this.$nextTick()
                .then(() => {
                    (this.$refs.nameInput as HTMLElement).focus();
                });
        },
        setName() {
            if (this.newName) {
                this.name = this.newName;
            }
            this.isNameChanging = false;
        },
    },
    components: {
        Task,
    },
});
</script>

<style lang="less" scoped>
.task-sheet {
    box-sizing: border-box;
    width: 300px;
    min-width: 300px;
    height: 450px;
    min-height: 450px;
    background-color: lightyellow;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;

    &__name {
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 10px;
        outline: none;
        border: none;
        background-color: transparent;
        font-size: 20px;
        font-weight: bold;
        font-family: serif;
    }

    &__tasks-list {
        max-height: 350px;
        overflow: hidden;
        text-align: center;
    }

    &__btn-add-task {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        outline: none;
        background-image: url(../../assets/plus.svg);
        background-color: lightblue;
    }

    &__task {
        text-align: left;
    }
}
</style>
