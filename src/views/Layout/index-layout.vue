<script setup>
</script>

<template>
  <div
    class="layoutContainer"
    style="
      background-color: white;
      width: 100%;
      height: 60px;
      box-sizing: border-box;
      padding: 10px 10px 10px 100px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      position: relative;
      left: 0;
      top: 0;

    "
  >
    <div
      class="layoutLeftContainer"
      style="height: 100%; width: 100%; display: flex"
    >
      <router-link
        class="avatarContainer"
        style="
          height: 100%;
          width: 200px;
          display: flex;
          align-items: center;
          margin-right: 10px;
          text-decoration: none;
        "
      >
        <img
          style="height: 100%; margin-right: 10px"
          src="@/assets/img/avatar2.jpg"
        />
        <div
          style="
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            color: #475b6d;
          "
        >
          Cain的个人网站
        </div>
      </router-link>
      <div
        class="mainContainer"
        style="display: flex; justify-content: center; align-items: center"
      >
        <router-link style="text-decoration: none" class="label"
          >首页</router-link
        >
        <router-link style="text-decoration: none" class="label"
          >标签</router-link
        >
        <router-link style="text-decoration: none" class="label"
          >分类</router-link
        >
        <router-link style="text-decoration: none" class="label"
          >关于</router-link
        >
      </div>
      <div style="display: flex; align-items: center">
        <a-input-search :style="{ width: '320px' }" placeholder="搜索" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.label {
  color: #475b6d;
  font-size: 17px;
  margin-right: 10px;
}
.label:hover {
  color: #52c41a;
}
</style>