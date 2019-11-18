<template lang="pug">
    .sheduler
        perfect-scrollbar.sheets-list
            task-sheet.sheet(v-for="i in TaskSheetIds" :key="i" :id="i")
</template>

<script lang="ts">
import Vue from 'vue';
import TaskSheet, { TaskSheetData } from '../components/TaskSheet.vue';


export interface ShedulerData {
    TaskSheetsList: TaskSheetData[];
    TaskSheetIds: number[];
}

export default Vue.extend({
    data(): ShedulerData {
        return {
            TaskSheetsList: [],
            TaskSheetIds: [
                12451345,
                123451341,
                123451341,
                123451341,
                123451341,
                123451341,
                123451341,
                123451341,
            ],
        };
    },
    components: {
        TaskSheet,
    },
});
</script>

<style lang="less" scoped>
@import '../smart-grid';

.sheets-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .sm-block({
        width: 100vw;
        height: 100%;
    });
}
.sheet {
    display: inline-block;
}
</style>
