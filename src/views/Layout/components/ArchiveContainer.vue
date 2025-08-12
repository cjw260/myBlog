<script setup>
import { ref } from "vue";
import CategoryItem from "./CategoryItem.vue";
const articlesList =
  ref([
    { name: 2022, num: 22 },
    { name: 2023, num: 56 },
    { name: 2024, num: 94 },
    { name: 2025, num: 122 }
  ]);
</script>


<template>
  <div class="archiveContainer">
    <div class="archiveItemText">
      <img
        style="width: 20px; margin-right: 5px"
        src="@/assets/img/archive.png"
      />
      归档
    </div>

    <div class="archiveItemContainer">
      <div style="width: 100%;" v-for="item in articlesList" :key="item.name">
        <CategoryItem :category="item"></CategoryItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.archiveContainer {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
}
.archiveItemText {
  width: 100%;
  height: 20px;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #475b6d;
  margin-bottom: 15px;
}
.archiveItemContainer {
  width: 100%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
</style>