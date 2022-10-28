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
  logo: "/logo.png",
  // logoDark: ""  深色模式背景色
  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  // 是否在导航栏显示图标
  navbarIcon: true,
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
  toc: true,
  // ===================start布局======================

  //================srtart功能设置====================

  // 站点部署URL
  hostname: "http://docs.soln.store",
  // 文章显示的作者
  author: {
    name: "HanSer",
    url: "#",
  },
  iconAssets: "iconfont",

  // 页面信息
  pageInfo: ["Author", "Original", "Date", "ReadingTime", "Word", "PageView"],
  // 加密
  encrypt: {
    global: false, // 是否全局加密
    admin:[], // 最高权限密码
    // config: {
    //   "/demo/encrypt.html": ["666666"],
    // },
  },
  // 是否显示页面最后更新时间
  lastUpdated: true,
  // 是否显示页面贡献者
  contributors:true,

  //================srtart功能设置====================

  // 多语言设置
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // 多语言logo
      // logo: "",
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



  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
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
