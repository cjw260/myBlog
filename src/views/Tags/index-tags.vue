<script setup>
import { useAllDataStore } from "@/stores/allData";
const allDataStore = useAllDataStore();
</script>

<template>
  <div class="centerContainer">
    <div class="categoriesTitleContainer">
      <div class="categoriesTitle">标签</div>
      <div class="categoriesTotal">
        共计{{ allDataStore.categoryList.length }}个标签
      </div>
    </div>
    <div class="mainContainer">
      <div
        style="margin-right: 5px; margin-bottom: 5px"
        v-for="item in allDataStore.tagList"
        :key="item.name"
      >
        <router-link :to="`/tags/${item.name}`"
          ><a-tag checkable>{{ item.name }}</a-tag></router-link
        >
      </div>
    </div>
  </div>
</template>



<style scoped>
.centerContainer {
  width: 50%;
  flex: 1 1 auto;
}
.categoriesTitleContainer {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  height: 120px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.categoriesTitle {
  width: 100%;
  height: 60%;
  color: #475b6d;
  display: flex;
  align-items: center;
  font-size: 20px;
}
.categoriesTotal {
  font-size: 16px;
  width: 100%;
  height: 40%;
  color: #475b6d;
  display: flex;
  align-items: center;
}
.mainContainer {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
}
</style>