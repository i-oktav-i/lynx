<template>
    <div :class="getClass()">
        <perfect-scrollbar :class="getClass('sheets-list-scrollbar')">
            <div :class="getClass('sheets-list')">
                <button
                    :class="getClass('btn-add')"
                    @click="addTask(true)"
                />
                <task-sheet
                    :class="getClass('sheet')"
                    v-for="i in taskSheetIds"
                    :key="i"
                    :taskSheetId="i"
                />
                <button
                    :class="getClass('btn-add')"
                    @click="addTask(false)"
                    v-if="taskSheetIds.length"
                />
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TaskSheet, { TaskSheetData } from '../components/task-sheet/TaskSheet.vue';
import bevis from '../lib/bevis/bevis';


export interface ShedulerData {
    taskSheetsList: TaskSheetData[];
    taskSheetIds: number[];
}

export default Vue.extend({
    data(): ShedulerData {
        return {
            taskSheetsList: [],
            taskSheetIds: [
            ],
        };
    },
    methods: {
        getClass: bevis('sheduler'),
        addTask(isFront: boolean) {
            if (isFront) {
                this.taskSheetIds.unshift(this.taskSheetIds.length + 1);
            } else {
                this.taskSheetIds.push(this.taskSheetIds.length + 1);
            }
        },
    },
    components: {
        TaskSheet,
    },
});
</script>

<style lang="less" scoped>
@import '../smart-grid';

.sheduler {
    box-sizing: border-box;

    &__btn-add {
        height: 50px;
        min-width: 50px;
        margin: 0 50px;
        background-color: lightblue;
        display: inline-block;
        background-image: url(../assets/plus.svg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 100%;
        outline: none;
    }

    &__sheets-list {
        &-scrollbar {
            box-sizing: border-box;
            max-width: 100%;
            height: 100%;
        }
        box-sizing: border-box;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
}

</style>
