<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>


<template>
  <div class="itemContainer">
    <router-link class="link" :to="`article/${item.id}`"
      ><div class="titleContainer">{{ item.title }}</div></router-link
    >
    <div class="description">{{ item.content }}</div>
    <div class="time">
      <div class="timeLeft">
        <img
          style="height: 16px; margin-right: 5px"
          src="@/assets/img/time.png"
        />{{ item.id.replace(/^(\d{4})(\d{2})(\d{2}).*/, "$1.$2.$3") }} &sdot;
        其他
      </div>
      <router-link class="link" :to="`article/${item.id}`">
        <div class="timeRight">继续阅读</div>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.link {
  text-decoration: none;
}
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
  color: #5188e1;
  font-size: 17px;
}
</style>