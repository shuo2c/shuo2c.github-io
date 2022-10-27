import { defineUserConfig } from "vuepress";
// 查询插件
// import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "知识库",
      description: "学习笔记存储...",
    },
  },

  theme,

  plugins: [
    // searchPlugin({
    //   // 你的选项
    // }),
  ],

  shouldPrefetch: false,
});
