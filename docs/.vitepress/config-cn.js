export default {
  title: 'Omnivore 使用文档’,
  description: 'Documentation for the Omnivore reading service.',

  themeConfig: {
    sidebar: [
      {
        text: '使用 Omnivore',
        items: [
          { text: '安装', link: '/using/install-cn’ },
          { text: '保存链接', link: '/using/saving-cn’ },
          { text: '阅读', link: '/using/reading-cn' },
          { text: '电子邮件收集箱', link: '/using/inbox-cn' },
          { text: '组织', link: '/using/organizing-cn' },
          { text: '文章转语音', link: '/using/text-to-speech-cn' },
          { text: '搜索', link: '/using/search-cn' },
          { text: '保存的搜索', link: '/using/saved-searches-cn' },
          { text: '规则', link: '/using/rules-cn' },
          { text: '导入数据', link: '/using/importing-cn' },
          { text: '键盘命令', link: '/using/keyboard-cn' },
          { text: '获取帮助', link: '/using/help-cn' },
        ]
      },
      {
        text: '与其他应用程序集成',
        items: [
          { text: 'Logseq', link: '/integrations/logseq-cn' },
 //         { text: 'Obsidian', link: '/integrations/obsidian-cn' },
          { text: 'API', link: '/integrations/api-cn' },
          { text: 'Webhooks', link: '/integrations/webhooks-cn' },

        ]
      },
      // Comment out for now
      // {
      //   text: '使用案例',
      //   items: [
      //     { text: '知识工作者', link: '/usecases/knowledge-workers' },
      //     { text: '学生', link: '/usecases/students' },
      //     { text: '终身学习者', link: '/usecases/lifelong-learners' },
      //   ]
      // },
      {
        text: '开发',
        items: [
          { text: '贡献', link: '/development/contributing-cn' },
          { text: ‘本地环境', link: '/development/local-cn' },
        ]
      },
      {
        text: '自我托管',
        items: [
          { text: '自我托管', link: '/self-hosting/self-hosting-cn' }
        ]
      }
    ]
  }
}
