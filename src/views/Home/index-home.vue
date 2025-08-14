<script setup>
import { computed, onMounted, ref } from "vue";
import articleItem from "./components/articleItem.vue";
import { useAllDataStore } from "@/stores/allData";
import { useScroll } from "@vueuse/core"; //导入监控滚动组件
const { y } = useScroll(window); //仅监控窗口y轴上的移动
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const allDataStore = useAllDataStore();
const reversedList = computed(() => [...allDataStore.articleList].reverse());
let page = ref(1);
const finalList = ref(reversedList.value.slice(0, 10));
const handelChangeList = () => {
  if (page.value * 10 <= reversedList.value.length)
    finalList.value = reversedList.value.slice(
      (page.value - 1) * 10,
      page.value * 10
    );
  else
    finalList.value = reversedList.value.slice(
      (page.value - 1) * 10,
      reversedList.value.length
    );
};
const handelAddPage = () => {
  page.value++;
  handelChangeList();
  scrollToTop()
};
const handelReducePage = () => {
  page.value--;
  handelChangeList();
  scrollToTop()
};
</script>


<template>
  <div class="centerContainer" style="width: 50%; flex: 1 1 auto">
    <div v-for="item in finalList" :key="item.id">
      <articleItem :item="item"></articleItem>
    </div>
    <div class="pageContainer">
      <div
        class="handelPage"
        v-if="(page - 1) * 10 > 0"
        @click="handelReducePage()"
        style="justify-self: start"
      >
        &larr;上一页
      </div>
      <div
        class="handelPage"
        v-if="page * 10 < reversedList.length"
        @click="handelAddPage()"
        style="justify-self: end"
      >
        &rarr;下一页
      </div>
    </div>
    <button v-if="y > 300" @click="scrollToTop" class="back-to-top">
      ↑ 回到顶部
    </button>
  </div>
</template>

<style scoped>
.pageContainer {
  display: grid;
  width: 100%;
  height: 50px;
}
.handelPage {
  height: 100%;
  width: 100px;
  color: #475b6d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
}
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  padding: 10px 15px;
  background: #1890ff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  z-index: 1000;
}

.back-to-top:hover {
  background: #40a9ff;
  transform: translateY(-2px);
}
@media (min-width: 901px) and (max-width: 1199px) {
  .back-to-top {
    display: none;
  }
}
@media (min-width: 601px) and (max-width: 900px) {
  .back-to-top {
    display: none;
  }
}
@media (max-width: 600px) {
  .back-to-top {
    display: none;
  }
}
</style>