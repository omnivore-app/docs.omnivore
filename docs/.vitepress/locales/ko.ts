import { DefaultTheme, LocaleConfig } from "vitepress";
import * as common from "./common";
export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern:
      "https://github.com/omnivore-app/docs.omnivore/edit/main/docs/:path",
    text: "Edit this page on GitHub",
  },
  sidebar: [
    // {
    //   text: "About",
    //   items: [
    //     { text: "Community", link: "/about/community" },
    //     { text: "Privacy Statement", link: "/about/privacy-statement" },
    //     { text: "Pricing", link: "/about/pricing" },
    //   ],
    // },
    {
      text: "Using Omnivore",
      items: [
        { text: "설치하기", link: "/ko/using/install" },
        // { text: "Saving Links", link: "/using/saving" },
        { text: "Omnivore에서 읽기", link: "/ko/using/reading" },
        // { text: "Email Inbox", link: "/using/inbox" },
        {
          text: "레이블을 이용하여 문서 정리하기",
          link: "/ko/using/organizing",
        },
        // { text: "Text to Speech", link: "/using/text-to-speech" },
        // { text: "Search", link: "/using/search" },
        // { text: "Saved Searches", link: "/using/saved-searches" },
        // { text: "Rules", link: "/using/rules" },
        // { text: "Importing Data", link: "/using/importing" },
        // { text: "Keyboard Commands", link: "/using/keyboard" },
        {
          text: "계정과 저장소 관리하기",
          link: "/ko/using/managing-account",
        },
        { text: "도움 요청하기", link: "/ko/using/help" },
      ],
    },
    // {
    //   text: "Integrating with other Apps",
    //   items: [
    //     { text: "Logseq", link: "/integrations/logseq" },
    //     { text: "Obsidian", link: "/integrations/obsidian" },
    //     { text: "API", link: "/integrations/api" },
    //     { text: "Webhooks", link: "/integrations/webhooks" },
    //   ],
    // },
    // Comment out for now
    // {
    //   text: 'Use Cases',
    //   items: [
    //     { text: 'Knowledge Workers', link: '/usecases/knowledge-workers' },
    //     { text: 'Students', link: '/usecases/students' },
    //     { text: 'Lifelong Learners', link: '/usecases/lifelong-learners' },
    //   ]
    // },
    // {
    //   text: "Development",
    //   items: [
    //     { text: "Contributing", link: "/development/contributing" },
    //     { text: "Local Environment", link: "/development/local" },
    //   ],
    // },
    // {
    //   text: "Self-hosting",
    //   items: [{ text: "Self-hosting", link: "/self-hosting/self-hosting" }],
    // },
  ],
};
export const title = "Omnivore Docs";
export const description = "Documentation for the Omnivore reading service.";

export const ko: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "한국어",
  lang: "ko",
  title,
  description,
  themeConfig,
};
