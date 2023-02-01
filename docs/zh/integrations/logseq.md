---
title: Sync all your reading to Logseq
editLink: true
---

# {{ $frontmatter.title }}

Omninove 通过 [logseq-omnivore](https://github.com/omnivore-app/logseq-omnivore) 插件与Logseq集成。该插件允许自定义从 Omnivore 数据同步到 Logseq，控制数据的布局和同步频率。

[[toc]]

## 演示

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cc6DbBtOs14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 设置 Omnivore Logseq 插件

- 在 Logseq 市场中搜索 Omnivore 并安装插件
- 在浏览器中打开[https://omnivore.app/settings/api](https://omnivore.app/settings/api) 并创建 API 令牌 (有关创建令牌的详细信息，请参阅 [API](../zh/
integrations/api.md) )
- 在 Logseq 中打开 Omnivore 插件设置，然后粘贴您的 API 密钥

## 自定义从 Omnivore 同步到 Logseq 的数据

[Logseq 同步筛选器](../../integrations/images/logseq-sync-filter.png)

Omnivore Logseq 插件提供了三个导入数据的选项：

- 导入我的所有文章: 这将导入您保存到 Omnivore 的每篇文章以及您添加到文章中的标签 (tags)，荧光笔高亮和备注。
- 仅导入荧光笔高亮显示: 这将导入您保存的具有荧光笔高亮显示的每篇文章。
- 高级: 这允许您定义要导入的搜索筛选。例如，使用 `label:Newsletter`.

## 控制导入到 Logseq 的数据的布局

Omnivore Logseq 插件使用 [mustache](https://mustache.github.io/) 模板语言来定义如何将导入的数据保存到 Logseq。插件设置允许您定义页面布局和荧光笔高亮显示布局的模板。

### 可用于页面模板的变量

- title
- slug
- siteName
- originalArticleUrl
- url
- author
- savedAt
- updatedAt
- pageType (article 或 PDF)
- description
- labels: A list of labels attached to the page

### 可用于荧光笔高亮显示模板的变量

- quote
- annotation
- labels
- updatedAt

## 社区指南

- [omnivore-logseq-guide](https://briansunter.com/graph/#/page/omnivore-logseq-guide?anchor=ls-block-62b28de3-0e9e-456e-bf29-7e2541213aa5) -- 由 [Brian Sunter](https://briansunter.com/) 撰写的有用设置和使用指南。
- 中文翻译: [omnivore-logseq-guide](https://sywhb.github.io/#/page/omnivore-logseq%20%E6%8C%87%E5%8D%97)
