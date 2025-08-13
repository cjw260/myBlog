<template>
  <div>
    <div v-if="loading"><a-spin /></div>
    <div v-else class="markdown-body" v-html="renderedMarkdown"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // 你可以换成其他主题
import "github-markdown-css/github-markdown.css";

const props = defineProps({
  src: String, // 传入 markdown 文件路径
});

const loading = ref(false);
const renderedMarkdown = ref("");

marked.setOptions({
  highlight: (code, lang) => {
    return hljs.highlightAuto(code, [lang]).value;
  },
});

const loadMarkdown = async () => {
  loading.value = true;
  try {
    const res = await fetch(props.src);
    const mdText = await res.text();
    renderedMarkdown.value = marked.parse(mdText);
  } catch (e) {
    console.error("加载 Markdown 文件失败:", e);
    renderedMarkdown.value = '<p style="color:red;">加载失败</p>';
  }
  loading.value = false;
};

// 如果你希望页面加载时自动解析，可以取消下面这行的注释
onMounted(loadMarkdown);
</script>

<style scoped>
.markdown-body {
  background: #fff;
  color: #24292f;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 1.8;
  /* 可选：让图片不会溢出 */
  word-break: break-word;
  overflow-x: auto;
}
.markdown-body pre {
  background: #282c34 !important;
  color: #abb2bf !important;
  border-radius: 8px;
  padding: 1.1rem 1rem;
  overflow-x: auto;
  margin: 1.5em 0;
  font-size: 1em;
}

.markdown-body code {
  background: #f6f8fa;
  color: #d6336c;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 1em;
}

/* 让代码块内的 code 不继承行内 code 的背景 */
.markdown-body pre code {
  background: transparent;
  color: inherit;
  padding: 0;
  border-radius: 0;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
  margin-bottom: 1em;
  font-weight: 700;
}

.markdown-body ul {
  padding-left: 2em;
}

.markdown-body blockquote {
  background: #f6f8fa;
  border-left: 4px solid #d1d5da;
  margin: 1em 0;
  padding: 1em;
  color: #6a737d;
}

.markdown-body img {
  max-width: 100%;
  border-radius: 6px;
}
</style>