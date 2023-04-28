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
        { text: "Installation", link: "/es/using/install" },
        { text: "Saving Links", link: "/es/using/saving" },
        { text: "Reading", link: "/es/using/reading" },
        { text: "Email Inbox", link: "/es/using/inbox" },
        { text: "Organizing", link: "/es/using/organizing" },
        { text: "Text to Speech", link: "/es/using/text-to-speech" },
        { text: "Search", link: "/es/using/search" },
        { text: "Saved Searches", link: "/es/using/saved-searches" },
        { text: "Rules", link: "/es/using/rules" },
        { text: "Importing Data", link: "/es/using/importing" },
        { text: "Keyboard Commands", link: "/es/using/keyboard" },
        {
          text: "Managing your Account",
          link: "/es/using/managing-account",
        },
        { text: "Getting Help", link: "/es/using/help" },
      ],
    },
    {
      text: "Integrating with other Apps",
      items: [
        { text: "Logseq", link: "/es/integrations/logseq" },
        { text: "Obsidian", link: "/es/integrations/obsidian" },
        { text: "API", link: "/es/integrations/api" },
        { text: "Webhooks", link: "/es/integrations/webhooks" },
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
        { text: "Contributing", link: "/es/development/contributing" },
        { text: "Local Environment", link: "/es/development/local" },
      ],
    },
    {
      text: "Self-hosting",
      items: [{ text: "Self-hosting", link: "/es/self-hosting/self-hosting" }],
    },
  ],
};
export const title = "Omnivore Docs";
export const description = "Documentation for the Omnivore reading service.";

export const es: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "Español",
  lang: "es",
  title,
  description,
  themeConfig,
};
