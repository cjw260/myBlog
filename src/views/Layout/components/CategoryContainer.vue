<script setup>
import CategoryItem from "./CategoryItem.vue";
import { useAllDataStore } from "@/stores/allData";
const allDataStore = useAllDataStore();
</script>


<template>
  <div class="categoryContainer">
    <div class="categoryItemText">
      <img
        style="width: 20px; margin-right: 5px"
        src="@/assets/img/category.png"
      />
      分类
    </div>
    <div
      style="width: 100%"
      v-for="item in allDataStore.categoryList"
      :key="item.name"
    >
      <router-link
        style="
          text-decoration: none;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        "
        :to="`categories/${item.name}`"
        ><CategoryItem :category="item"></CategoryItem
      ></router-link>
    </div>
  </div>
</template>

<style scoped>
.categoryContainer {
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
}
.categoryItemText {
  width: 100%;
  height: 20px;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #475b6d;
  margin-bottom: 15px;
}
</style>