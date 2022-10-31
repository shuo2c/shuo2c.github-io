import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

// 抛出主题
export default hopeTheme({

    // ===========start 主题=================
    darkmode: 'switch',
    // themeColor: {
    //   blue: "#2196f3",
    //   red: "#f26d6d",
    //   green: "#3eaf7c",
    //   orange: "#fb9b5f",
    // },
    iconAssets: "iconfont",
    // fullscreen: true,
    backToTop: true,
    pure: false,
    //============end 主题===================

    //===========start 布局================
    logo: './logo.png',
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: "https://github.com/shuo2c/shuo2c.github.io",
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    // 顶部栏布局
    navbarLayout: {
      left: ["Brand"],
      center: ["Links"],
      right: ["Language", "Repo", "Outlook", "Search"],
    },
    //===========end 布局==================

    // 部署网站的url地址
    hostname: "https://shuo2c.github.io",

    author: {
      name: "shuo2c",
      url: "#",
    },

    footer: "MIT LICENSE | Cpoyright ©2019-present shuo2c",

    copyright: false,

    displayFooter: true,

    docsRepo:"https://github.com/shuo2c/shuo2c.github.io",
    docsDir:"/",
    docsBranch: "master",

    pageInfo:["Author", "Date", "Original", "ReadingTime", "Word", "PageView" ],

    // 多语言 默认/为中文
    locales: {
      "/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      }
    },

    // 加密环节
    // encrypt: {
    //   config: {
    //     "/demo/encrypt.html": ["1234"],
    //     "/zh/demo/encrypt.html": ["1234"],
    //   },
    // },
})
