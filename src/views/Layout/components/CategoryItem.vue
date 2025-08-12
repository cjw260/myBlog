<script setup>
defineProps({
  category: {
    type: Object,
    default: () => {},
  },
});
</script>


<template>
  <router-link style="text-decoration: none" to="path">
    <div class="categoryItem">
      {{ category.name }}
      <a-tag>{{ category.num }}</a-tag>
    </div>
  </router-link>
</template>
<style scoped>
.categoryItem {
  width: 100%;
  height: 25px;
  padding: 5px 5px 5px 5px;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #475b6d;
  margin-bottom: 5px;
  justify-content: space-between;
  border-radius: 5px;
  transition: background-color 0.4s ease; /* 背景色过渡 */
}
.categoryItem:hover {
  background-color: #f2f5f8;
}
</style>