import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Omnivore Docs",
  description: "Documentation for the Omnivore reading service.",

  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/omnivore-app/docs.omnivore/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/index",

      themeConfig: {
        sidebar: [
          {
            text: "Using Omnivore",
            items: [
              { text: "Installation", link: "/using/install" },
              { text: "Saving Links", link: "/using/saving" },
              { text: "Reading", link: "/using/reading" },
              { text: "Email Inbox", link: "/using/inbox" },
              { text: "Organizing", link: "/using/organizing" },
              { text: "Text to Speech", link: "/using/text-to-speech" },
              { text: "Search", link: "/using/search" },
              { text: "Saved Searches", link: "/using/saved-searches" },
              { text: "Rules", link: "/using/rules" },
              { text: "Importing Data", link: "/using/importing" },
              { text: "Keyboard Commands", link: "/using/keyboard" },
              { text: "Getting Help", link: "/using/help" },
            ],
          },
          {
            text: "Integrating with other Apps",
            items: [
              { text: "Logseq", link: "/integrations/logseq" },
              //         { text: 'Obsidian', link: '/integrations/obsidian' },
              { text: "API", link: "/integrations/api" },
              { text: "Webhooks", link: "/integrations/webhooks" },
            ],
          },
          // Comment out for now
          // {
          //   text: 'Use Cases',
          //   items: [
          //     { text: 'Knowledge Workers', link: '/usecases/knowledge-workers' },
          //     { text: 'Students', link: '/usecases/students' },
          //     { text: 'Lifelong Learners', link: '/usecases/lifelong-learners' },
          //   ]
          // },
          {
            text: "Development",
            items: [
              { text: "Contributing", link: "/development/contributing" },
              { text: "Local Environment", link: "/development/local" },
            ],
          },
          {
            text: "Self-hosting",
            items: [
              { text: "Self-hosting", link: "/self-hosting/self-hosting" },
            ],
          },
        ],
      },
    },
    zh: {
      label: "Chinese",
      lang: "zh",
      link: "/zh/index",

      title: "Omnivore 使用文档",
      description: "Documentation for the Omnivore reading service.",

      themeConfig: {
        sidebar: [
          {
            text: "使用 Omnivore",
            items: [
              { text: "安装", link: "/zh/using/install" },
              // zh-TODO: { text: "保存链接", link: "/zh/using/saving" },
              // zh-TODO: { text: "阅读", link: "/zh/using/reading" },
              { text: "电子邮件收集箱", link: "/zh/using/inbox" },
              // zh-TODO: { text: "组织", link: "/zh/using/organizing" },
              // zh-TODO: { text: "文章转语音", link: "/zh/using/text-to-speech" },
              // zh-TODO: { text: "搜索", link: "/zh/using/search" },
              // zh-TODO: { text: "保存的搜索", link: "/zh/using/saved-searches" },
              // zh-TODO: { text: "规则", link: "/zh/using/rules" },
              { text: "导入数据", link: "/zh/using/importing" },
              { text: "键盘命令", link: "/zh/using/keyboard" },
              { text: "获取帮助", link: "/zh/using/help" },
            ],
          },
           {
             text: "与其他应用程序集成",
             items: [
          //     { text: "Logseq", link: "/zh/integrations/logseq" },
          //     //         { text: 'Obsidian', link: '/integrations/obsidian-cn' },
               { text: "API", link: "/zh/integrations/api" },
               { text: "Webhooks", link: "/zh/integrations/webhooks" },
             ],
           },
          {
            text: "开发",
            items: [
              { text: "贡献", link: "/zh/development/contributing" },
              { text: "本地环境", link: "/zh/development/local" },
            ],
          },
          // zh-TODO: {
          //   text: "自我托管",
          //   items: [
          //     { text: "自我托管", link: "/zh/self-hosting/self-hosting" },
          //   ],
          // },
        ],
      },
    },
  },
});
