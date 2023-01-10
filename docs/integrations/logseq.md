---
title: Sync all your reading to Logseq
editLink: true
---

# {{ $frontmatter.title }}

Omninove integrates with Logseq via the [logseq-omnivore](https://github.com/omnivore-app/logseq-omnivore) plugin. The plugin allows for customizing the data synced from Omnivore to Logseq, controlling the layout of the data, and the sync frequency.

[[toc]]

## Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cc6DbBtOs14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Setting up the Omnivore Logseq plugin

- Search the Logseq Marketplace for Omnivore and install the plugin
- In your browser open [https://omnivore.app/settings/api](https://omnivore.app/settings/api) and create an API token (see [API](./api.md) for more info on creating a token)
- In Logseq open the Omnivore Plugin Settings, and paste your API key

## Customizing which data is synced from Omnivore to Logseq

[Logseq Sync Filter](./images/logseq-sync-filter.png)

The Omnivore Logseq plugin offers three options for which data is imported:

- import all my articles: This will import every article you save to Omnivore and the labels (tags), highlights, and notes you have added to the article.
- import just highlights: This will import every article you have saved that has highlights
- advanced: This allows you to define a search filter to import. For example, import just Newsletters by using `label:Newsletter`.

## Controlling the layout of the data imported to Logseq

The Omnivore Logseq plugin uses the [mustache](https://mustache.github.io/) template language to define how imported data is saved to Logseq. The plugin settings allow you to define the template for a page layout and the highlight layout.

### Variables available to the page template

- title
- slug
- siteName
- originalArticleUrl
- url
- author
- savedAt
- updatedAt
- pageType (article or PDF)
- description
- labels: A list of labels attached to the page

### Variables available to the highlight template

- quote
- annotation
- labels
- updatedAt

## Community Guides

- [omnivore-logseq-guide](https://briansunter.com/graph/#/page/omnivore-logseq-guide?anchor=ls-block-62b28de3-0e9e-456e-bf29-7e2541213aa5) -- A helpful setup and usage guide written by [Brian Sunter](https://briansunter.com/).
- Chinese translation: [omnivore-logseq-guide](https://sywhb.github.io/#/page/omnivore-logseq%20%E6%8C%87%E5%8D%97)
