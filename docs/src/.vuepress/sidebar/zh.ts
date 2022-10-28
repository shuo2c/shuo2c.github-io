import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "creative",
      text: "vps使用指南",
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
