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
```
