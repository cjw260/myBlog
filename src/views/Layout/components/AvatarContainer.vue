<script setup>
import { ref } from "vue";
import { useAllDataStore } from "@/stores/allData";
const allDataStore = useAllDataStore();
const isHover1 = ref(false);
const isHover2 = ref(false);
const isHover3 = ref(false);
</script>

<template>
  <div
    class="avatarContainer"
    style="
      width: 100%;
      height: 300px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      border-radius: 5px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
      background-color: white;
    "
  >
    <div
      style="
        width: 100%;
        height: 88px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <img
        style="height: 100%"
        src="https://i.mji.rip/2025/08/15/ccf98ec484201675d1586fa7a840688f.jpeg"
      />
    </div>
    <div
      style="
        width: 100%;
        height: 30px;
        font-size: 20px;
        color: #475b6d;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      Mc_Cain
    </div>
    <div
      style="
        width: 100%;
        height: 30px;
        color: #475b6d;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
      "
    >
      一位前端学习者
    </div>
    <div
      class="digitalContainer"
      style="
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <router-link class="digitalItem" to="/">
        <div class="textNum">{{ allDataStore.articleList.length }}</div>
        <div class="textNumAll">文章</div>
      </router-link>
      <router-link class="digitalItem" to="/categories">
        <div class="textNum">{{ allDataStore.categoryList.length }}</div>
        <div class="textNumAll">分类</div>
      </router-link>
      <router-link class="digitalItem" to="/tags"
        ><div class="textNum">{{ allDataStore.tagList.length }}</div>
        <div class="textNumAll">标签</div></router-link
      >
    </div>
    <div
      class="socialMediaContainer"
      style="width: 100%; height: 30px; display: flex; justify-content: center"
    >
      <a
        style="
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
        @mouseenter="isHover1 = true"
        @mouseleave="isHover1 = false"
        href="https://space.bilibili.com/257464993?spm_id_from=333.1007.0.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style="height: 20px; width: 20px"
          :src="isHover1 ? `https://i.mji.rip/2025/08/15/189cbd6c77685b0737cdd66bed2e8235.png` : `https://i.mji.rip/2025/08/15/dd8ece6cc679f4ce5909aaae50893f78.png`"
        /> </a
      ><a
        style="
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 20px;
          margin-right: 20px;
        "
        @mouseenter="isHover2 = true"
        @mouseleave="isHover2 = false"
        href="https://gitee.com/cjw32"
        rel="noopener noreferrer"
      >
        <img
          style="height: 20px; width: 20px"
          :src="isHover2 ? `https://i.mji.rip/2025/08/15/5edde4f42250fd7eb01f1f345ef4a010.png` : `https://i.mji.rip/2025/08/15/8677f09f87a3a0adcda46054c51650e6.png`"
        /> </a
      ><a
        style="
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
        @mouseenter="isHover3 = true"
        @mouseleave="isHover3 = false"
        href="https://github.com/cjw260"
        rel="noopener noreferrer"
      >
        <img
          style="height: 20px; width: 20px"
          :src="isHover3 ? `https://i.mji.rip/2025/08/15/bda0934c46306263917ded0c85863357.png` : `https://i.mji.rip/2025/08/15/46c93a945a0cf95c70d82c0a48f38dda.png`"
        />
      </a>
    </div>
  </div>
</template>
<style scoped>
.digitalItem {
  height: 100%;
  width: 70px;
  display: flex;
  flex-wrap: wrap;
  padding: 25px 0 25px 0;
  text-decoration: none;
}
.textNum {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #475b6d;
  font-size: 20px;
}
.textNumAll {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #475b6d;
}

.digitalItem {
  box-sizing: border-box;
}
</style>