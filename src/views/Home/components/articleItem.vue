<script setup>
</script>


<template>
  <div class="itemContainer">
    <div class="titleContainer">我是标题</div>
    <div class="description">我是描述</div>
    <div class="time">
      <div class="timeLeft">
        <img
          style="height: 16px; margin-right: 5px"
          src="@/assets/img/time.png"
        />2025.8.12 &sdot; 其他
      </div>
      <div class="timeRight">继续阅读</div>
    </div>
  </div>
  
</template>


<style scoped>
.itemContainer {
  width: 100%;
  height: 141px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.titleContainer {
  font-size: 20px;
  color: #475b6d;
  height: 30%;
}
.description {
  font-size: 16px;
  color: #475b6d;
  height: 30%;
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.time {
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.timeLeft {
  display: flex;
  align-content: center;
  color: #475b6d;
}
.timeRight {
  color: #5188E1;
  font-size: 17px;
}
</style>