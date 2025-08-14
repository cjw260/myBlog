<script setup>
import { useAllDataStore } from "@/stores/allData";
const allDataStore = useAllDataStore();
</script>

<template>
  <div class="centerContainer">
    <div class="categoriesTitleContainer">
      <div class="categoriesTitle">分类</div>
      <div class="categoriesTotal">
        共计{{ allDataStore.articleList.length }}篇文章
      </div>
    </div>
    <div class="mainContainer">
      <div class="categoriesItem" v-for="item in allDataStore.categoryList" :key="item.name">
        <router-link style="text-decoration: none;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;" :to="`categories/${item.name}`">
          <div class="categoriesItemTop">{{ item.name }}</div>
          <div class="categoriesItemBottom">共计{{ item.num }}篇文章</div>
        </router-link>
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
  flex-wrap: wrap;
}
.categoriesItem {
  width: 30%;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.categoriesItemTop {
  width: 100%;
  height: 60%;
  font-size: 17px;
  color: #475b6d;
  display: flex;
  justify-content: center;
  align-items: center;
}
.categoriesItemBottom {
  width: 100%;
  height: 30%;
  font-size: 14px;
  color: #475b6d;
  display: flex;
  justify-content: center;
  align-items: center;
}
.categoriesItem:hover {
  background-color: #f2f5f8;
}
</style>