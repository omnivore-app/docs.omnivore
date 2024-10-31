import { defineConfig } from "vitepress";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { zhCN } from "./locales/zh";

export default defineConfig({
  lastUpdated: true,
  locales: {
    root: en,
    zh: zhCN,
    es: es,
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html;
          return html;
        },
      },
    },
  },
});
