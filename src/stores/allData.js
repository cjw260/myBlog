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
    }, {
      name: "git"
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
    }, {
      id: "2025081402",
      title: "git基础语法",
      category: "技术文章",
      tags: "git",
      time: "2025",
      content: "git的基本使用语法",
    }, {
      id: "2025081501",
      title: "Python 数据分析入门",
      category: "数据科学",
      tags: "python, pandas",
      time: "2025-08-15",
      content: "使用Python和Pandas进行基础数据分析的教程。"
    },
    {
      id: "2025081502",
      title: "Docker 容器化部署实战",
      category: "DevOps",
      tags: "docker, 部署",
      time: "2025-08-15",
      content: "手把手教你使用Docker容器化部署Web应用。"
    },
    {
      id: "2025081601",
      title: "JavaScript ES2025 新特性预览",
      category: "前端开发",
      tags: "javascript, ecmascript",
      time: "2025-08-16",
      content: "即将发布的JavaScript新特性前瞻。"
    },
    {
      id: "2025081602",
      title: "RESTful API 设计原则",
      category: "后端开发",
      tags: "api, 架构",
      time: "2025-08-16",
      content: "遵循这些原则设计出优雅的RESTful API接口。"
    },
    {
      id: "2025081701",
      title: "微前端架构实践",
      category: "前端架构",
      tags: "微前端, qiankun",
      time: "2025-08-17",
      content: "大型前端项目采用微前端架构的实践经验分享。"
    },
    {
      id: "2025081702",
      title: "Node.js 性能优化技巧",
      category: "后端开发",
      tags: "nodejs, 性能优化",
      time: "2025-08-17",
      content: "提升Node.js应用性能的10个实用技巧。"
    },
    {
      id: "2025081801",
      title: "Webpack 配置完全指南",
      category: "前端工程化",
      tags: "webpack, 构建工具",
      time: "2025-08-18",
      content: "从入门到精通Webpack的各种配置选项。"
    },
    {
      id: "2025081802",
      title: "CSS Grid 布局实战",
      category: "前端开发",
      tags: "css, 布局",
      time: "2025-08-18",
      content: "使用CSS Grid创建复杂响应式布局的完整教程。"
    },
    {
      id: "2025081901",
      title: "GraphQL 与 REST 对比分析",
      category: "API设计",
      tags: "graphql, rest",
      time: "2025-08-19",
      content: "两种API设计风格的优缺点比较和使用场景分析。"
    },
    {
      id: "2025081902",
      title: "前端安全最佳实践",
      category: "Web安全",
      tags: "安全, xss, csrf",
      time: "2025-08-19",
      content: "保护前端应用免受常见攻击的安全措施。"
    }
  ])
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
