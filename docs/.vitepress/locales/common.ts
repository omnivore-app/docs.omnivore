import type {DefaultTheme} from 'vitepress'
export const themeConfig = {
  logo:'/favicon.ico',
  socialLinks: [
    {icon: 'github', link: 'https://github.com/omnivore-app/omnivore'},
    {icon: 'discord', link: 'https://discord.gg/h2z5rppzz9'},
    {icon: 'twitter', link: 'https://twitter.com/omnivoreapp'},
    {icon: 'mastodon',link: 'https://pkm.social/@omnivore'}
  ]
} satisfies DefaultTheme.Config