<script setup>
import MarkdownViewer from '@/components/MarkdownViewer.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div class="centerContainer">
    <MarkdownViewer :src="`/markdown/${route.params.id}.md`"></MarkdownViewer>
  </div>
</template>


<style scoped>
.centerContainer {
  width: 50%;
  flex: 1 1 auto;
  border-radius: 10px;

}
</style>