---
title: 将所有阅读数据同步到 Logseq
editLink: true
---

# {{ $frontmatter.title }}

Omninove 通过 [logseq-omnivore](https://github.com/omnivore-app/logseq-omnivore) 插件与 Logseq 集成。该插件允许自定义从 Omnivore 数据同步到 Logseq，控制数据的布局和同步频率。

[[toc]]

## 演示

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cc6DbBtOs14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 设置 Omnivore Logseq 插件

- 在 Logseq 市场中搜索 Omnivore 并安装插件
- 在浏览器中打开[https://omnivore.app/settings/api](https://omnivore.app/settings/api) 并创建 API 令牌 (有关创建令牌的详细信息，请参阅 [API](./api.md) )
- 在 Logseq 中打开 Omnivore 插件设置，然后粘贴您的 API 密钥

## 自定义从 Omnivore 同步到 Logseq 的数据

[Logseq 同步筛选器](../../integrations/images/logseq-sync-filter.png)

Omnivore Logseq 插件提供了三个导入数据的选项：

- import all my articles <sup>（导入我的所有文章）</sup>：这将导入您保存到 Omnivore 的每篇文章以及您添加到文章中的标签 (tags)，荧光笔高亮显示和注释。
- import just highlights <sup>（仅导入荧光笔高亮显示）</sup>：这将导入您保存的具有荧光笔高亮显示的文章。
- advanced <sup>（高级）</sup>：这允许您定义要导入的搜索筛选。例如，仅导入新闻稿使用 `label:Newsletter` 。

## 控制导入到 Logseq 的数据的布局

Omnivore Logseq 插件使用 [mustache](https://mustache.github.io/) 模板语言来定义如何将导入的数据保存到 Logseq。插件设置允许您定义文章布局和荧光笔高亮显示布局的模板。

### Mustache 模板语言

Mustache 是一种简单且无逻辑的模板语言，可让您创建易于阅读和维护的模板。Mustache 模板由标记组成，这些标记是占位符，在渲染模板时将替换为实际值。

Mustache 标签有几种类型，包括：

::: v-pre

-   `{{ variable }}`: 渲染变量的值。
-   `{{# section }}` ... `{{/ section }}`: 如果部分的值为 true ，则渲染模板的一部分，例如数组或对象。
-   `{{^ inverted section }}` ... `{{/ inverted section }}`: 如果部分的值为 false，则渲染模板的一部分。
-   `{{! comment }}`: 向模板添加注释，渲染模板时将忽略该注释。

除了基本的 Mustache 标签外，您还可以在模板中使用几个内置的 Mustache 函数，例如：

-   `{{# list }}` ... `{{/ list }}`: 为列表中的每篇文章渲染模板的一部分。
-   `{{^ emptyList }}` ... `{{/ emptyList }}`: 如果列表不为空，则渲染模板的一部分。
-   `{{& variable }}` or `{{{ variable }}}`: 渲染变量的值而不转义 HTML 字符。
-   `{{> partial }}`: 渲染分部模板，该模板是可包含在其他模板中的可重用模板。
    :::

### 可用于文章模板的变量

- title: 文章标题 * (必填)
- omnivoreUrl: Omnivore 中文章的 URL。 * (必填)
- siteName: 保存文章的网站的名称。
- originalUrl: 原始文章的网址。
- author: 文章作者。
- dateSaved: 文章以您的授权日期格式保存到 Omnivore 的日期，周围有双括号，例如 `[[2021-01-01]]` 。
- description: 文章的描述。
- content: Markdown 格式的文章内容。
- labels: 附加到文章的标签列表。
  - name: 标签的名称，例如 `Newsletter` 。
- note: 文章注释。
- type: 文章的类型，例如 `ARTICLE` 或 `FILE` 。
- datePublished: 文章发表的日期，用您惯用的日期格式，周围用双括号括起来，比如 `[[2021-01-01]]` 。
- dateRead: 阅读文章的日期，以您惯用的日期格式，周围用双括号括起来，例如 `[[2021-01-01]]` 。
- rawDatePublished: 文章发表的日期，以你所选择的日期格式为准。
- rawDateRead: 文章被阅读的日期，以你喜欢的日期格式显示。
- state: 文章的状态，例如 `READING` 或 `COMPLETED` 。
- wordsCount: 文章中的字数。
- readLength: -   阅读文章的时间长度，以分钟为单位计算。
- dateArchived: 文章被归档的日期，以你默认的日期格式为准。

默认的文章模板：

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

### 可用于荧光笔高亮显示模板的变量

- text: 高亮显示的段落
- labels: 附在高亮显示部分的标签列表
  - name: 标签的名称，例如 `Newsletter`
- highlightUrl: 在 Omnivore 中高亮显示的URL
- dateHighlighted: 高亮显示的创建日期，以你惯用的日期格式，周围用双括号括起来，例如 `[[2021-01-01]]`
- rawDateHighlighted: 创建高亮显示的日期，以你喜欢的日期格式表示。
- note: 高亮显示所附带的注释
- color: 高亮显示的颜色，例如 `yellow`

默认的高亮模板：

```
> {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #[[{{{name}}}]] {{/labels}}

{{#note.length}}note:: {{{note}}} {{/note.length}}
```


### 文章和荧光笔高亮显示模板的功能图

- lowerCase: 将一个字符串转换为小写字母
- upperCase: 将一个字符串转换为大写字母
- upperCaseFirst: 将一个字符串的第一个字符转换为大写字母

在模板中使用一个函数将文章的状态转换为小写字母的例子：

```
state:: [[{{#lowerCase}}{{state}}{{/lowerCase}}]]
```

### 导入完整的文章内容

::: warning 完整的内容导入对PDF文件不起作用
:::

文章的内容在导入前被转换为 Markdown ，这意味着我们需要它们在插入 Logseq 时避免 HTML 转义。要做到这一点，请使用三段式的 Mustache 语法。
你在 Omnivore 中创建的任何荧光笔高亮显示将被渲染为 Markdown 语法的高亮显示。
所以要导入完整的文章内容：

```
{{{ content }}}
```

## 将文章同步到一个特定的 Logseq 文件夹中

::: v-pre

默认情况下，Omnivore会将文章同步到一个名为 `Omnivore` 的 Logseq 文件夹中。你可以通过取消勾选 `isSinglePage` 并在设置中把 `pageName` 改为 `{{{title}}}` 或 `{{{date}}}` 来改变。 例如，如果你想将文章同步到期刊中，你可以使用 `{{{date}}}` 作为 `pageName` 。

:::

## 预定的同步

默认情况下，Omnivore不会自动同步你的数据。你可以通过在 **Frequency** <sup>（频率）</sup>设置中输入数字来启用预定同步。例如，如果你输入 `60`, Omnivore 将每60分钟同步你的数据，你可以通过输入 `0` 随时关闭它。

## 社区指南

- [omnivore-logseq-guide](https://briansunter.com/graph/#/page/omnivore-logseq-guide?anchor=ls-block-62b28de3-0e9e-456e-bf29-7e2541213aa5) -- 由 [Brian Sunter](https://briansunter.com/) 撰写的有用设置和使用指南。
- 中文翻译: [omnivore-logseq-guide](https://sywhb.github.io/#/page/omnivore-logseq%20%E6%8C%87%E5%8D%97)
