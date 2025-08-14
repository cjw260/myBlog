<script setup>
import articleItem from "@/views/Home/components/articleItem.vue";
import { useAllDataStore } from "@/stores/allData";
import { useRoute } from "vue-router";
const route = useRoute();
const allDataStore = useAllDataStore();
/* const reversedList = computed(() => [...allDataStore.categorySearch(route.params.name)].reverse()); */
</script>


<template>
  <div
    class="centerContainerNone"
    v-if="allDataStore.tagSearch(route.params.name).length === 0"
  >
    <div><img style="width: 50px" src="@/assets/img/none.png" /></div>
    <router-link style="text-decoration: none" to="/"
      ><div style="color: #475b6d; font-size: 18px">
        暂时没有内容哦！点这里去看看别的吧~
      </div></router-link
    >
  </div>
  <div v-else class="centerContainer" style="width: 50%; flex: 1 1 auto">
    <div
      v-for="item in allDataStore.tagSearch(route.params.name)"
      :key="item.id"
    >
      <articleItem :item="item"></articleItem>
    </div>
  </div>
</template>

<style scoped>
.centerContainer {
  width: 50%;
  flex: 1 1 auto;
}
.centerContainerNone {
  width: 50%;
  flex: 1 1 auto;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
}
</style>