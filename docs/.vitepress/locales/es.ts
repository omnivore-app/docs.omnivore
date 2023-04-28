import { DefaultTheme, LocaleConfig } from "vitepress";
import * as common from "./common";
export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern:
      "https://github.com/omnivore-app/docs.omnivore/edit/main/docs/:path",
    text: "Editar esta página en GitHub",
  },
  sidebar: [
    {
      text: "Usando Omnivore",
      items: [
        { text: "Instalación", link: "/using/install" },
        { text: "Guardando Enlaces", link: "/using/saving" },
        { text: "Leyendo", link: "/using/reading" },
        { text: "Email Inbox", link: "/using/inbox" },
        { text: "Organizando", link: "/using/organizing" },
        { text: "Texto a Voz", link: "/using/text-to-speech" },
        { text: "Buscar", link: "/using/search" },
        { text: "Búsquedas Guardadas", link: "/using/saved-searches" },
        { text: "Reglas", link: "/using/rules" },
        { text: "Importación de Datos", link: "/using/importing" },
        { text: "Comandos de Teclado", link: "/using/keyboard" },
        {
          text: "Administrando su cuenta",
          link: "/using/managing-account",
        },
        { text: "Obtener Ayuda", link: "/using/help" },
      ],
    },
    {
      text: "Integración con Otras Aplicaciones",
      items: [
        { text: "Logseq", link: "/integrations/logseq" },
        { text: "Obsidian", link: "/integrations/obsidian" },
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
      text: "Desarrollo",
      items: [
        { text: "Contribuyendo", link: "/development/contributing" },
        { text: "Entorno Local", link: "/development/local" },
      ],
    },
    {
      text: "Autohospedaje",
      items: [{ text: "Autohospedaje", link: "/self-hosting/self-hosting" }],
    },
  ],
};
export const title = "Documentación de Omnivore";
export const description = "Documentación del servicio de lectura Omnivore.";

export const en: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "Español",
  lang: "es",
  title,
  description,
  themeConfig,
};
