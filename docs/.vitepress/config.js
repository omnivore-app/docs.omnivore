export default {
  title: 'Omnivore Docs',
  description: 'Documentation for the Omnivore reading service.',

  themeConfig: {
    sidebar: [
      {
        text: 'Using Omnivore',
        items: [
          { text: 'Installation', link: '/using/install' },
          { text: 'Saving Links', link: '/using/saving' },
          { text: 'Reading', link: '/using/reading' },
          { text: 'Email Inbox', link: '/using/inbox' },
          { text: 'Organizing', link: '/using/organizing' },
          { text: 'Text to Speech', link: '/using/text-to-speech' },
          { text: 'Search', link: '/using/search' },
          { text: 'Saved Searches', link: '/using/saved-searches' },
          { text: 'Rules', link: '/using/rules' },
          { text: 'Importing Data', link: '/using/importing' },
          { text: 'Keyboard Commands', link: '/using/keyboard' },
          { text: 'Getting Help', link: '/using/help' },
        ]
      },
      {
        text: 'Integrating with other Apps',
        items: [
          { text: 'Logseq', link: '/integrations/logseq' },
 //         { text: 'Obsidian', link: '/integrations/obsidian' },
          { text: 'API', link: '/integrations/api' },
          { text: 'Webhooks', link: '/integrations/webhooks' },

        ]
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
        text: 'Development',
        items: [
          { text: 'Contributing', link: '/development/contributing' },
          { text: 'Local Environment', link: '/development/local' },
        ]
      }
    ]
  }
}
