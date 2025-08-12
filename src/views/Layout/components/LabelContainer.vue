<script setup>
import { ref } from "vue";

const labelList = ref([
  { name: "js" },
  { name: "css" },
  { name: "ts" },
  { name: "node" },
  { name: "express" },
  { name: "html" },
  { name: "vue" },
  { name: "react" },
  { name: "sql" },
  { name: "spring" },
  { name: "arco" },
  { name: "elementPlus" },
]);
</script>


<template>
  <div class="labelContainer">
    <div class="labelItemText">
      <img
        style="width: 20px; margin-right: 5px"
        src="@/assets/img/label.png"
      />
      热门标签
    </div>
    <div class="labelMainContainer">
      <div
        style="margin-right: 5px; margin-bottom: 5px"
        v-for="item in labelList"
        :key="item"
      >
        <a-tag checkable>{{ item.name }}</a-tag>
      </div>
    </div>
  </div>
</template>

<style scoped>
.labelContainer {
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.labelItemText {
  width: 100%;
  height: 20px;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #475b6d;
  margin-bottom: 15px;
}
.labelMainContainer {
  width: 100%;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #475b6d;
  margin-bottom: 15px;
  flex-wrap: wrap;
}
</style>