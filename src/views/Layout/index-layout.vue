<script setup>
import AvatarContainer from "./components/AvatarContainer.vue";
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
    <div class="leftContainer">
      <AvatarContainer></AvatarContainer>
    </div>

    <router-view></router-view>
    <div class="rightContainer"></div>
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
    width: 20%;
    height: 400px;
    margin-right: 30px;
    flex: 0 0 300px;
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
  }
}
/* 平板（横屏）或小屏笔记本 */
@media (min-width: 901px) and (max-width: 1199px) {
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