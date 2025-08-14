<script setup>
import { computed } from "vue";
import articleItem from "./components/articleItem.vue";
import { useAllDataStore } from "@/stores/allData";
const allDataStore = useAllDataStore()
const reversedList = computed(() => [...allDataStore.articleList].reverse());
</script>


<template>
  <div class="centerContainer" style="width: 50%; flex: 1 1 auto">
    <div v-for="item in reversedList" :key="item.id">
      <articleItem :item="item"></articleItem>
    </div>
    
    
    
  </div>
</template>

<style scoped>
</style>