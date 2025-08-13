<script setup>
import articleItem from "./components/articleItem.vue";
import { useAllDataStore } from "@/stores/allData";
const allDataStore = useAllDataStore()
</script>


<template>
  <div class="centerContainer" style="width: 50%; flex: 1 1 auto">
    <div v-for="item in allDataStore.articleList" :key="item.id">
      <articleItem :item="item"></articleItem>
    </div>
    
    
    
  </div>
</template>

<style scoped>
</style>