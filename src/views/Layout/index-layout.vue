<script setup>
import AvatarContainer from "./components/AvatarContainer.vue";
import CategoryContainer from "./components/CategoryContainer.vue";
import LabelContainer from "./components/LabelContainer.vue";
import RecentArticlesContainer from "./components/RecentArticlesContainer.vue";
import ArchiveContainer from "./components/ArchiveContainer.vue";
import { useScroll } from "@vueuse/core"; //导入监控滚动组件
const { y } = useScroll(window); //仅监控窗口y轴上的移动
</script>

<template>
  <div class="layoutContainer">
    <div class="layoutLeftContainer">
      <router-link class="avatarContainer">
        <img class="img1" src="@/assets/img/avatar.jpg" />
        <div class="myNameText">Cain的个人网站</div>
      </router-link>
      <div class="labelMainContainer">
        <router-link class="label">首页</router-link>
        <router-link class="label">标签</router-link>
        <router-link class="label">分类</router-link>
        <router-link class="label">关于</router-link>
      </div>
      <div class="search">
        <a-input-search placeholder="搜索" />
      </div>
    </div>
  </div>
  <div class="mainContainer">
    <div class="leftContainerWrapper">
      <div class="leftContainer">
        <AvatarContainer></AvatarContainer>
      </div>
      <div :class="{leftContainerActive1: y > 450}" class="CategoryContainer">
        <CategoryContainer></CategoryContainer>
      </div>
      <div :class="{leftContainerActive2: y > 450}" class="labelContainer1">
        <LabelContainer></LabelContainer>
      </div>
    </div>
    <router-view></router-view>
    <div  class="rightContainer">
      <div :class="{rightContainerActive1: y > 90}" class="recentArticlesContainer">
        <RecentArticlesContainer></RecentArticlesContainer>
      </div>
      <div :class="{rightContainerActive2: y > 90}" class="archiveContainer">
        <ArchiveContainer></ArchiveContainer>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
/* 桌面端（大屏） */
@media (min-width: 1200px) {
  .label {
    color: #475b6d;
    font-size: 17px;
    margin-right: 10px;
    text-decoration: none;
  }
  .label:hover {
    color: #52c41a;
  }
  .layoutContainer,
  .layoutLeftContainer,
  .mainContainer {
    box-sizing: border-box; /* 让 width 包含 padding 和 border */
  }
  .layoutContainer {
    background-color: white;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 10px 10px 10px 100px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    left: 0;
    top: 0;
  }
  .layoutLeftContainer {
    height: 100%;
    width: 100%;
    display: flex;
  }
  .avatarContainer {
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
  }
  .img1 {
    height: 40px;
    margin-right: 10px;
  }
  .myNameText {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #475b6d;
  }
  .labelMainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search {
    display: flex;
    align-items: center;
  }
  .leftContainer {
    width: 100%;
    margin-bottom: 20px;
  }
  .leftContainerActive1 {
    position: fixed;
    left: 40px; /* 与 mainContainer 的 padding-left 一致 */
    top: 20px; /* 与 layoutContainer 的高度一致 */
    width: 300px; /* 固定宽度 */
  }.leftContainerActive2 {
    position: fixed;
    left: 40px; /* 与 mainContainer 的 padding-left 一致 */
    top: 325px; /* 与 layoutContainer 的高度一致 */
    width: 300px; /* 固定宽度 */
  }
  .rightContainerActive1 {
    position: fixed;
    right: 40px; /* 与 mainContainer 的 padding-left 一致 */
    top: 20px; /* 与 layoutContainer 的高度一致 */
    width: 340px; /* 固定宽度 */
  }.rightContainerActive2 {
    position: fixed;
    right: 40px; /* 与 mainContainer 的 padding-left 一致 */
    top: 373px; /* 与 layoutContainer 的高度一致 */
    width: 340px; /* 固定宽度 */
  }
  .mainContainer {
    width: 100%;
    padding: 50px 40px 50px 40px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  .rightContainer {
    flex: 0 0 340px;
  }
  .leftContainerWrapper {
    flex: 0 0 300px; /* 保持固定宽度 */
    margin-right: 30px;
  }
  .recentArticlesContainer {
    flex: 0 0 340px;
  }
  .archiveContainer {
    flex: 0 0 340px;
  }
}
/* 平板（横屏）或小屏笔记本 */
@media (min-width: 901px) and (max-width: 1199px) {
  .leftContainerWrapper {
    display: none;
  }
  .label {
    color: #475b6d;
    font-size: 17px;
    margin-right: 10px;
    text-decoration: none;
  }
  .label:hover {
    color: #52c41a;
  }
  .layoutContainer,
  .layoutLeftContainer,
  .mainContainer {
    box-sizing: border-box; /* 让 width 包含 padding 和 border */
  }
  .layoutContainer {
    background-color: white;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 10px 10px 10px 100px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    left: 0;
    top: 0;
  }
  .layoutLeftContainer {
    height: 100%;
    width: 100%;
    display: flex;
  }
  .avatarContainer {
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
  }
  .img1 {
    height: 40px;
    margin-right: 10px;
  }
  .myNameText {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #475b6d;
  }
  .labelMainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search {
    display: flex;
    align-items: center;
  }
  .leftContainer {
    width: 20%;
    height: 400px;
    margin-right: 30px;
    flex: 0 0 300px;
    display: none;
  }
  .mainContainer {
    width: 100%;
    padding: 50px 40px 50px 40px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  .rightContainer {
    background-color: greenyellow;
    width: 20%;
    height: 400px;
    flex: 0 0 300px;
    display: none;
  }
}
/* 平板（竖屏） */
@media (min-width: 601px) and (max-width: 900px) {
  .leftContainerWrapper {
    display: none;
  }
  .label {
    color: #475b6d;
    font-size: 17px;
    margin-right: 10px;
    text-decoration: none;
  }
  .label:hover {
    color: #52c41a;
  }
  .layoutContainer,
  .layoutLeftContainer,
  .mainContainer {
    box-sizing: border-box; /* 让 width 包含 padding 和 border */
  }
  .layoutContainer {
    background-color: white;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    left: 0;
    top: 0;
  }
  .layoutLeftContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .avatarContainer {
    width: 100%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    justify-content: center;
  }
  .img1 {
    height: 40px;
    margin-right: 10px;
  }
  .myNameText {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #475b6d;
  }
  .labelMainContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .search {
    display: flex;
    align-items: center;
    display: none;
  }
  .leftContainer {
    width: 20%;
    height: 400px;
    margin-right: 30px;
    flex: 0 0 300px;
    display: none;
  }
  .mainContainer {
    width: 100%;
    padding: 50px 40px 50px 40px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  .rightContainer {
    background-color: greenyellow;
    width: 20%;
    height: 400px;
    flex: 0 0 300px;
    display: none;
  }
}
/* 移动端（手机） */
@media (max-width: 600px) {
  .leftContainerWrapper {
    display: none;
  }
  .label {
    color: #475b6d;
    font-size: 17px;
    margin-right: 10px;
    text-decoration: none;
  }
  .label:hover {
    color: #52c41a;
  }
  .layoutContainer,
  .layoutLeftContainer,
  .mainContainer {
    box-sizing: border-box; /* 让 width 包含 padding 和 border */
  }
  .layoutContainer {
    background-color: white;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    left: 0;
    top: 0;
  }
  .layoutLeftContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .avatarContainer {
    width: 100%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    justify-content: center;
  }
  .img1 {
    height: 40px;
    margin-right: 10px;
  }
  .myNameText {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #475b6d;
  }
  .labelMainContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .search {
    display: flex;
    align-items: center;
    display: none;
  }
  .leftContainer {
    width: 20%;
    height: 400px;
    margin-right: 30px;
    flex: 0 0 300px;
    display: none;
  }
  .mainContainer {
    width: 100%;
    padding: 50px 40px 50px 40px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  .rightContainer {
    background-color: greenyellow;
    width: 20%;
    height: 400px;
    flex: 0 0 300px;
    display: none;
  }
}
</style>