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

The Omnivore Logseq plugin uses the [mustache](https://mustache.github.io/) template language to define how imported data is saved to Logseq. The plugin settings allow you to define the template for a article layout and the highlight layout. The default templates will be used if you do not define your own.

### Mustache template language

Mustache is a simple and logic-less templating language that allows you to create templates that are easy to read and maintain. Mustache templates consist of tags, which are placeholders that are replaced with actual values when the template is rendered.

There are several types of Mustache tags, including:

::: v-pre

- `{{ variable }}`: Renders the value of a variable.
- `{{# section }}` ... `{{/ section }}`: Renders a section of the template if the value of the section is true, such as an array or an object.
- `{{^ inverted section }}` ... `{{/ inverted section }}`: Renders a section of the template if the value of the section is false.
- `{{! comment }}`: Adds a comment to the template, which is ignored when the template is rendered.

In addition to the basic Mustache tags, there are also several built-in Mustache functions that you can use in your templates, such as:

- `{{# list }}` ... `{{/ list }}`: Renders a section of the template for each item in a list.
- `{{^ emptyList }}` ... `{{/ emptyList }}`: Renders a section of the template if a list is not empty.
- `{{& variable }}` or `{{{ variable }}}`: Renders the value of a variable without escaping HTML characters.
- `{{> partial }}`: Renders a partial template, which is a reusable template that can be included in other templates.
:::

### Variables available to the article template

- title: The title of the article * (required)
- omnivoreUrl: The URL of the article in Omnivore * (required)
- siteName: The name of the site the article was saved from
- originalUrl: The URL of the original article
- author: The author of the article
- dateSaved: The date the article was saved to Omnivore in your perferrred date format with double brackets around it, for example `[[2021-01-01]]`
- description: The description of the article
- content: The content of the article in Markdown format
- labels: A list of labels attached to the page
  - name: The name of the label, for example `Newsletter`
- note: The note attached to the article
- type: The type of page, for example `ARTICLE` or `FILE`
- datePublished: The date the article was published in your perferrred date format with double brackets around it, for example `[[2021-01-01]]`
- dateRead: The date the article was read in your perferrred date format with double brackets around it, for example `[[2021-01-01]]`
- rawDatePublished: The date the article was published in your perferrred date format
- rawDateRead: The date the article was read in your perferrred date format

Default article template:

```
[{{{title}}}]({{{omnivoreUrl}}})
collapsed:: true
site:: {{#siteName}}[{{{siteName}}}]{{/siteName}}({{{originalUrl}}})
{{#author}}
author:: {{{author}}}
{{/author}}
{{#labels.length}}
labels:: {{#labels}}[[{{{name}}}]]{{/labels}}
{{/labels.length}}
date-saved:: {{{dateSaved}}}
{{#datePublished}}
date-published:: {{{datePublished}}}
{{/datePublished}}
```

### Variables available to the highlight template

- text: The text of the highlight
- labels: A list of labels attached to the highlight
  - name: The name of the label, for example `Newsletter`
- highlightUrl: The URL of the highlight in Omnivore
- dateHighlighted: The date the highlight was created in your perferrred date format with double brackets around it, for example `[[2021-01-01]]`
- rawDateHighlighted: The date the highlight was created in your perferrred date format

Default highlight template:

```
> {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #[[{{{name}}}]] {{/labels}}
```

### Highlight annotation

The annotation of a highlight will be added as a sub-block to the highlight block.

## Community Guides

- [omnivore-logseq-guide](https://briansunter.com/graph/#/page/omnivore-logseq-guide?anchor=ls-block-62b28de3-0e9e-456e-bf29-7e2541213aa5) -- A helpful setup and usage guide written by [Brian Sunter](https://briansunter.com/).
- Chinese translation: [omnivore-logseq-guide](https://sywhb.github.io/#/page/omnivore-logseq%20%E6%8C%87%E5%8D%97)
