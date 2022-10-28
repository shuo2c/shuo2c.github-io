import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", link: "/", icon:"home" },
  { text: "类别", link: "/demo/", icon:"categoryselected" },
  {
    icon: "link",
    text: "快链",
    link: "http://www.soln.store",
  },
]);
