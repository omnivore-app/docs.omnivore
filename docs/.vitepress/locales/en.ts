import { DefaultTheme, LocaleConfig } from "vitepress";
import * as common from "./common";
export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern:
      "https://github.com/omnivore-app/docs.omnivore/edit/main/docs/:path",
    text: "Edit this page on GitHub",
  },

  darkModeSwitchLabel: "Theme",
  sidebarMenuLabel: "Content",

  sidebar: [
    {
      text: "About",
      items: [
        { text: "Community", link: "/about/community" },
        { text: "Privacy Statement", link: "/about/privacy-statement" },
        { text: "Pricing", link: "/about/pricing" },
      ],
    },
    {
      text: "Using Omnivore",
      items: [
        { text: "Installation", link: "/using/install" },
        { text: "Saving Links", link: "/using/saving" },
        { text: "Reading", link: "/using/reading" },
        { text: "Email Inbox", link: "/using/inbox" },
        { text: "Feeds (RSS & Atom)", link: "/using/feeds" },
        { text: "Organizing", link: "/using/organizing" },
        { text: "Text to Speech", link: "/using/text-to-speech" },
        { text: "Search", link: "/using/search" },
        { text: "Saved Searches", link: "/using/saved-searches" },
        { text: "Rules", link: "/using/rules" },
        { text: "Importing Data", link: "/using/importing" },
        { text: "Exporting Data", link: "/using/exporting" },
        { text: "Keyboard Commands", link: "/using/keyboard" },
        {
          text: "Managing your Account",
          link: "/using/managing-account",
        },
        { text: "Getting Help", link: "/using/help" },
      ],
    },
    {
      text: "Integrating with other Apps",
      items: [
        { text: "Logseq", link: "/integrations/logseq" },
        { text: "Obsidian", link: "/integrations/obsidian" },
        { text: "Org Mode", link: "/integrations/org-mode" },
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
      items: [{ text: "Self-hosting", link: "/self-hosting/self-hosting" }],
    },
  ],
};
export const title = "Omnivore Docs";
export const description = "Documentation for the Omnivore reading service.";

export const en: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "English",
  lang: "en",
  title,
  description,
  themeConfig,
};
