import { DefaultTheme, LocaleConfig } from "vitepress";
import * as common from "./common";
export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern:
      "https://github.com/omnivore-app/docs.omnivore/edit/main/docs/:path",
    text: "在 GitHub 中编辑此页面",
  },
  
  darkModeSwitchLabel: '主题',
  sidebarMenuLabel: '目录',
  returnToTopLabel: '回到顶部',
  lastUpdatedText: '最后更新时间',
  docFooter: { prev: '上一页', next: '下一页', },
  outlineTitle: '此页的章节',
  
  sidebar: [
    {
      text: "使用 Omnivore",
      items: [
        { text: "安装", link: "/zh/using/install" },
        { text: "保存链接", link: "/zh/using/saving" },
        { text: "阅读", link: "/zh/using/reading" },
        { text: "电子邮件收集箱", link: "/zh/using/inbox" },
        { text: "整理", link: "/zh/using/organizing" },
        { text: "文章转语音", link: "/zh/using/text-to-speech" },
        { text: "搜索", link: "/zh/using/search" },
        { text: "保存的搜索", link: "/zh/using/saved-searches" },
        { text: "规则", link: "/zh/using/rules" },
        { text: "导入数据", link: "/zh/using/importing" },
        { text: "快捷键", link: "/zh/using/keyboard" },
        {
          text: "管理您的帐户",
          link: "/zh/using/managing-account",
        },
        { text: "获取帮助", link: "/zh/using/help" },
      ],
    },
    {
      text: "与其他应用程序集成",
      items: [
        { text: "Logseq", link: "/zh/integrations/logseq" },
        { text: 'Obsidian', link: '/zh/integrations/obsidian' },
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
    {
      text: "私有化部署",
      items: [{ text: "私有化部署", link: "/zh/self-hosting/self-hosting" }],
    },
  ],
};
export const title = "Omnivore 使用文档";
export const description = "Omnivore 阅读服务的文档。";
export const zhCN: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "简体中文",
  lang: "zh-CN",
  title,
  description,
  themeConfig,
};
