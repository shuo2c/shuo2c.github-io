---
title: vuepress-theme-hope入手教程
index: false
icon: creative
category:
  - 使用指南
---

写在前面，vuepress-theme-hope是一个特别棒的主题，文档内容也是特别的详细。这里呢针对我而言，为了以后方便查找和学习，这里做了相关的技术整理，规划了学习路线。

毕竟好记性不如烂笔头！！！

为什么选择vuepress-theme-hope？[点击这里](https://vuepress-theme-hope.github.io/v2/zh/guide/get-started/intro.html#%E8%AE%BE%E8%AE%A1%E7%9B%AE%E6%A0%87)

## 目录

- Hi 让我们先跑起来！[新手入门](https://vuepress-theme-hope.github.io/v2/zh/cookbook/tutorial/) 
  - [VuePress2 → 参考 → 配置](https://v2.vuepress.vuejs.org/zh/reference/config.html) 快速查找v2.x配置
  - [部署教程](https://vuepress-theme-hope.github.io/v2/zh/cookbook/tutorial/deploy.html) 
  - [Markdown 介绍](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/) 和 [Markdown 演示](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/demo.html) 和 [Markdown 扩展](https://vuepress-theme-hope.github.io/v2/zh/guide/get-started/markdown.html#markdown-%E6%89%A9%E5%B1%95)
  - [Emoji](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/emoji/nature.html)
  - [图标选择](https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87)

- [指南进阶](https://vuepress-theme-hope.github.io/v2/zh/guide/interface/darkmode.html)

- [选项配置](https://vuepress-theme-hope.github.io/v2/zh/config/) 
  
```js
import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  // ===================start主题外观配置======================

  // 深色模式
  darkmode:"switch",  // auto状态下并不会将switch开关消失掉
  // 主题色，可切换 (未生效，查原因)
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  // 展示全屏幕模式
  fullscreen: true,
  // 返回到顶部 默认300px可修改
  backToTop: true,
  // 纯净模式
  pure:false,

  // ===================end主题外观配置======================

  // ===================start布局======================

  // 背景色
  logo: "/logo.svg",
  // logoDark: ""  深色模式背景色
   // 默认为 GitHub. 同时也可以是一个完整的 URL
   repo: "vuepress-theme-hope/vuepress-theme-hope",
   // 自定义仓库链接文字。默认从 `repo` 中自动推断为
   // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
   repoLabel: "GitHub",
   // 是否在导航栏内显示仓库链接，默认为 `true`
   repoDisplay: true,
   // 布局配置 Brand: 站点品牌, Links: 导航栏链接, Language: 语言切换菜单, Search: 搜索框, Outlook: 外观弹窗, Repo: 项目仓库
   navbarLayout: {
    left: ["Brand"],
    center: [],
    right: ["Links", "Language", "Repo", "Outlook", "Search"],
   },
   // 自动生成侧边栏(这里配置的话会是所有页面)
   // sidebar: "heading",
   // 侧边栏图标是否展示
   sidebarIcon: true,
   // 面包屑导航(可以在区域内关闭或开启)
   breadcrumb: true,
   // 显示页脚 (locales可以单独设置)
   displayFooter: true,
   // 标题列表展示
   toc: false,
  // ===================start布局======================


  hostname: "",

  author: {
    name: "HanSer",
    url: "#",
  },

  iconAssets: "iconfont",

  docsDir: "",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],

  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      //
      logo: "", // 多语言logo
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "",

      copyright: 'Copyright ©2022-present HanSer',

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  //=================start功能==========================

  // 文件加密(非真加密仅隐藏)
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  //=================end功能==========================

  // 插件
  plugins: {
    // 图片
    photoSwipe: true
    copyCode: {},   
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});

```
