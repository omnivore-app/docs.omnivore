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
        { text: "Instalación", link: "/es/using/install" },
        { text: "Guardando Enlaces", link: "/es/using/saving" },
        { text: "Leyendo", link: "/es/using/reading" },
        { text: "Email Inbox", link: "/es/using/inbox" },
        { text: "Organizando", link: "/es/using/organizing" },
        { text: "Texto a Voz", link: "/es/using/text-to-speech" },
        { text: "Buscar", link: "/es/using/search" },
        { text: "Búsquedas Guardadas", link: "/es/using/saved-searches" },
        { text: "Reglas", link: "/es/using/rules" },
        { text: "Importación de Datos", link: "/es/using/importing" },
        { text: "Comandos de Teclado", link: "/es/using/keyboard" },
        {
          text: "Administrando su cuenta",
          link: "/es/using/managing-account",
        },
        { text: "Obtener Ayuda", link: "/es/using/help" },
      ],
    },
    {
      text: "Integración con Otras Aplicaciones",
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
      text: "Desarrollo",
      items: [
        { text: "Contribuyendo", link: "/es/development/contributing" },
        { text: "Entorno Local", link: "/es/development/local" },
      ],
    },
    {
      text: "Autohospedaje",
      items: [{ text: "Autohospedaje", link: "/es/self-hosting/self-hosting" }],
    },
  ],
};
export const title = "Documentación de Omnivore";
export const description = "Documentación del servicio de lectura Omnivore.";
export const es: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "Español",
  lang: "es",
  title,
  description,
  themeConfig,
};
