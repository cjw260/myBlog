<script setup>
import { useAllDataStore } from '@/stores/allData';
const allDataStore = useAllDataStore()

</script>


<template>
  <div class="recentArticlesContainer">
    <div class="recentArticlesItemText">
      <img
        style="width: 20px; margin-right: 5px"
        src="@/assets/img/articles.png"
      />
      最近文章
    </div>

    <div class="articlesItemContainer" v-for="item in allDataStore.articleList.slice(-4).reverse()" :key="item.id">
      <div class="articlesTime">{{ item.id.replace(/^(\d{4})(\d{2})(\d{2}).*/, "$1.$2.$3") }}</div>
      <router-link style="text-decoration: none; width: 95%" :to="`article/${item.id}`">
        <div class="articlesTitle">{{ item.title }}</div>
      </router-link>
    </div>

  </div>
</template>

<style scoped>
.recentArticlesContainer {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
}
.recentArticlesItemText {
  width: 100%;
  height: 20px;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #475b6d;
  margin-bottom: 15px;
}
.articlesItemContainer {
  width: 100%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
.articlesTime {
  color: #475b6d;
  font-size: 12px;
  width: 100%;
  margin-bottom: 10px;
}
.articlesTitle {
  color: #475b6d;
  font-size: 16px;
  padding: 5px;
  width: 100%;
  transition: background-color 0.4s ease; /* 背景色过渡 */
}
.articlesTitle:hover {
  background-color: #f2f5f8;
}
</style>