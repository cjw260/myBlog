import {
  defineStore
} from "pinia";
import {
  computed,
  ref
} from "vue";

export const useAllDataStore = defineStore('allData', () => {
  const tagList = ref([{
      name: "vue"
    },
    {
      name: "markdown"
    }
  ])
  //文章列表
  const articleList = ref([{
    id: "2025081301",
    title: "第一个示例",
    category: "前端开发",
    tags: "vue",
    time: "2025",
    content: "Vue3的Composition API是一个新的API，它允许我们以函数的形式组织组件逻辑。",
  }, {
    id: "2025081302",
    title: "第二个示例",
    category: "前端开发",
    tags: "vue",
    time: "2025",
    content: "Vue3的Composition API是一个新的API，它允许我们以函数的形式组织组件逻辑。",
  }, {
    id: "2025081303",
    title: "第三个示例",
    category: "前端开发",
    tags: "vue",
    time: "2025",
    content: "Vue3的Composition API是一个新的API，它允许我们以函数的形式组织组件逻辑。",
  }, {
    id: "2025081401",
    title: "关于markdown基础语法",
    category: "技术文章",
    tags: "markdown",
    time: "2025",
    content: "本篇只简单介绍一下markdown的基本语法",
  }, ])
  //分类数组
  const categoryList = ref([{
    name: "技术文章",
    num: computed(() => {
      return articleList.value.filter(article => article.category === "技术文章").length
    })
  }, {
    name: "生活随笔",
    num: computed(() => {
      return articleList.value.filter(article => article.category === "生活随笔").length
    })
  }, {
    name: "游戏笔记",
    num: computed(() => {
      return articleList.value.filter(article => article.category === "游戏笔记").length
    })
  }, {
    name: "前端开发",
    num: computed(() => {
      return articleList.value.filter(article => article.category === "前端开发").length
    })
  }, {
    name: "项目经验",
    num: computed(() => {
      return articleList.value.filter(article => article.category === "项目经验").length
    })
  }, ])
  //计算2025年文章总数
  const count2025 = computed(() => {
    return articleList.value.filter(article => article.time === "2025").length
  })
  //2025年文章数组
  const articleList2025 = computed(() => {
    return articleList.value.filter(article => article.time === "2025")
  })
  //分类查找
  const categorySearch = (category) => {
    return articleList.value.filter(article => article.category === category)
  }
  //标签查找
  const tagSearch = (tag) => {
    return articleList.value.filter(article => article.tags === tag)
  }
  //归档数组
  const timeList = ref([{
    name: 2025,
    num: count2025
  }])
  return {
    tagList,
    categoryList,
    timeList,
    articleList,
    count2025,
    articleList2025,
    categorySearch,
    tagSearch
  }
})
