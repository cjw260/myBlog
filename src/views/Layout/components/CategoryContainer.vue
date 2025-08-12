<script setup>
import CategoryItem from "./CategoryItem.vue";
import { ref } from "vue";
const categoryList = ref([
  { name: "技术文章", num: 339 },
  { name: "旅游", num: 39 },
  { name: "其他", num: 22 },
  { name: "阅读", num: 29 },
  { name: "考试", num: 11 },
]);
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
    <div style="width: 100%" v-for="item in categoryList" :key="item">
      <CategoryItem :category="item"></CategoryItem>
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