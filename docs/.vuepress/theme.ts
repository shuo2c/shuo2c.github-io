import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

// 抛出主题
export default hopeTheme({

    // ===========start 主题=================
    darkmode: 'switch',
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
    iconAssets: "iconfont",
    fullscreen: true,
    backToTop: true,
    pure: false,
    //============end 主题===================


    // 部署网站的url地址
    hostname: "https://shuo2c.github.io",

    // 多语言 默认/为中文
    locales: {
      "/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        footer: "Default footer",

        displayFooter: true,

        metaLocales: {
          editLink: "Edit this page on GitHub",
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
