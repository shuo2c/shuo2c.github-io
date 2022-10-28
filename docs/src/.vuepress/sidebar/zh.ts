import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "creative",
      text: "vuepress主题学习指南",
      prefix: "vps/",
      link: "vps/",
      children: "structure",
    },
    // {
    //   icon: "discover",
    //   text: "demo",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "开发杂项",
    //   icon: "note",
    //   prefix: "guide/",
    //   children: "structure",
    // }
  ],
});
