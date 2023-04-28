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
});
