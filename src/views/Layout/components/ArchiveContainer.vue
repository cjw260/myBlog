<script setup>
import { onMounted } from "vue";
import CategoryItem from "./CategoryItem.vue";
import { useAllDataStore } from "@/stores/allData";
const allDataStore = useAllDataStore();
onMounted(() => {console.log(allDataStore.timeList)})
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
      <div
        style="width: 100%"
        v-for="item in allDataStore.timeList"
        :key="item.name"
      >
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