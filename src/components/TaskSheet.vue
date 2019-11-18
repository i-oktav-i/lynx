<template lang="pug">
    .task-sheet
        h3.name {{name}}
        ul.tasks
            li(v-for="i in [1,2,3,4]" :key="i") {{i}}
</template>

<script lang="ts">
import Vue from 'vue';

export interface TaskSheetData {
    name: string;
}

export default Vue.extend({
    data(): TaskSheetData {
        return {
            name: 'Test',
        };
    },
    props: {
        id: Number,
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
    display: inline-block;
    margin: 10px;
}
</style>
