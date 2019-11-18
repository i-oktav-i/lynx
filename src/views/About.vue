<template>
  <div class="about">
    <h1>This is an about page</h1>
    <perfect-scrollbar class="scroll">
        <p class="test">
            Далеко-далеко за словесными горами в стране
            гласных и согласных, живут рыбные тексты.
            Ты языком правилами семантика которой но,
            грамматики образ выйти, заманивший ручеек даже
            моей над даль бросил решила путь предупреждал!
            Это продолжил безорфографичный вдали использовало меня свой
            путь ручеек, предупредила оксмокс маленькая всеми сбить
            залетают мир послушавшись? Приставка ручеек взгляд то!
        </p>
    </perfect-scrollbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            cnt: 0,
        };
    },
});
</script>

<style lang="less" scoped>
.scroll {
    width: 500px;
    height: 100px;
}
</style>
