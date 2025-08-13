import {
  defineStore
} from "pinia";
import {
  ref
} from "vue";

export const useAllDataStore = defineStore('allData', () => {
  const tagList = ref([{
      name: "js"
    },
    {
      name: "css"
    },
    {
      name: "html"
    },
    {
      name: "vue"
    },
    {
      name: "react"
    },
    {
      name: "nodejs"
    },
    {
      name: "python"
    },
    {
      name: "java"
    },
    {
      name: "c++"
    }
  ])
  const categoryList = ref([{
    name: "技术文章",
    num: 339
  }, {
    name: "生活随笔",
    num: 39
  }, {
    name: "学习笔记",
    num: 9
  }, {
    name: "前端开发",
    num: 3
  }, {
    name: "项目经验",
    num: 3
  }, ])
  const timeList = ref([{
      name: 2022,
      num: 339
    }, {
      name: 2023,
      num: 39
    }, {
      name: 2024,
      num: 9
    }, {
      name: 2025,
      num: 3
    },

  ])
  const articleList = ref([{
    id: "2025081301",
    title: "第一个示例",
    category: "前端开发",
    tags: ["vue", "js"],
    time: "2023",
    content: "Vue3的Composition API是一个新的API，它允许我们以函数的形式组织组件逻辑。",
  }, {
    id: "2025081302",
    title: "第二个示例",
    category: "vue开发",
    tags: ["vue", "js"],
    time: "2023",
    content: "Vue3的Composition API是一个新的API，它允许我们以函数的形式组织组件逻辑。",
  }, {
    id: "2025081303",
    title: "第三个示例",
    category: "node开发",
    tags: ["vue", "js", "node"],
    time: "2023",
    content: "Vue3的Composition API是一个新的API，它允许我们以函数的形式组织组件逻辑。",
  }, ])
  return {
    tagList,
    categoryList,
    timeList,
    articleList
  }
})
