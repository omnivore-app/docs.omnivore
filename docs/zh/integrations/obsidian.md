---
title: 将所有阅读数据同步到 Obsidian
editLink: true
---

# {{ $frontmatter.title }}

Omnivore 通过 [obsidian-omnivore](https://github.com/omnivore-app/obsidian-omnivore) 与 Obsidian 集成。该插件允许自定义从 Omnivore 同步到 Obsidian 的数据，并控制数据的布局。

[[toc]]

## 特点

* 导入你的重点和保存的文章
* 基于 Omnivore 数据创建图表
* 使用 Omnivore [高级搜索语法搜索](https://omnivore.app/help/search)筛选导入的数据
* 为导入的数据定制模板

## 安装

1. 从Obsidian的社区插件部分安装并启用该插件，或者 [从源码构建该插件](https://github.com/omnivore-app/obsidian-omnivore) 并加载解压后的插件。
2. 注册一个 [Omnivore 帐户](https://omnivore.app)。
3. 转到 [Omnivore](https://omnivore.app/settings/api) 并创建一个 API 密钥
4. 在 Obsidian 中打开 Omnivore 插件设置，添加您的API密钥。
5. 通过打开快捷键面板 (Ctrl + P 或 CMD + P)。输入 Omnivore 并选择 **Omnivore: Sync** 选项，以运行 Omnivore 同步。

## 自定义从 Omnivore 同步到 Obsidian 的数据

[黑曜石同步筛选器](./images/obsidian-sync-filter.png)

Omnivore Obsidian 插件为数据的导入提供了三种选择：

* 导入我所有的文章：这将导入你保存在 Omnivore 的每一篇文章，以及你添加到文章中的标签（tags）、荧光笔高亮显示和注释。
* 只导入高亮显示的内容：这将导入你保存的每一篇有荧光笔高亮显示的文章。
* 高级：这允许您定义一个搜索筛选器来导入。例如，通过使用以下方法只导入新闻简报 `label:Newsletter`.

## 控制导入到 Obsidian 数据的布局

Omnivore Obsidian 插件使用 [mustache](https://mustache.github.io/) 模板语言来定义导入数据如何保存到 Obsidian。该插件设置允许你定义文章布局的模板。如果你不定义自己的模板，就会使用默认的模板。

### Mustache 模板语言

Mustache 是一种简单且无逻辑的模板语言，它允许你创建易于阅读和维护的模板。Mustache 模板由标签组成，这些标签是占位符，在模板渲染时被替换成实际值。

Mustache 标签有几种类型，包括：

::: v-pre

* `{{ variable }}`：渲染一个变量的值。
* `{{# section }}` ... `{{/ section }}`：渲染模板的一个部分，如果该部分的值为 true，比如一个数组或一个对象。
* `{{^ inverted section }}` ... `{{/ inverted section }}`：渲染模板的一部分，如果该部分的值为 false 。
* `{{! comment }}`：为模板添加注释，当模板被渲染时将被忽略。

除了基本的 Mustache 标签外，还有几个内置的 Mustache 功能，你可以在你的模板中使用，如：

* `{{# list }}` ... `{{/ list }}`：为列表中的每篇文章渲染模板的一个部分。
* `{{^ emptyList }}` ... `{{/ emptyList }}`：如果一个列表不是空的，则渲染模板的一个部分。
* `{{& variable }}` or `{{{ variable }}}`: 渲染一个变量的值，且不转义为 HTML 字符。
* `{{> partial }}`：渲染一部分模板，这是一个可重复使用的模板，可以包含在其他模板中。
:::

### 模板中可用的变量

* id：文章的 id。这将用作前言中文件的 ID。
* title：文章的标题。
* omnivoreUrl：Omnivore 中文章的网址。
* siteName：保存文章的网站的名称。
* originalUrl：原始文章的网址。
* author：文章的作者。
* dateSaved：文章被保存到 Omnivore 的日期，以你喜欢的日期格式设置。
* description：文章的描述。
* content：Markdown 格式的文章内容。
* labels：附在文章上的标签列表。
  * name：标签的名称，例如 `Newsletter` 。
* note：文章的注释。
* type：文章的类型，例如 `ARTICLE` 或 `FILE` 。
* datePublished：文章发表的日期，以您所选择的日期格式为准。
* dateRead：文章被阅读的日期，以你喜欢的日期格式表示。
* dateArchived：文章被归档的日期，以你默认的日期格式为准。
* fileAttachment：文章所附带的附件。
* state：文章的状态，例如 `READING` 或 `COMPLETED` 。
* wordsCount：文章中的字数。
* readLength：阅读文章的时间长度，以分钟为单位计算。
* highlights：文章所附带的重点列表。
  * text：荧光笔高亮显示的文本。
  * highlightUrl：在 Omnivore 中高亮显示的网址。
  * labels：附在高亮部分的标签列表。
    * name：标签的名称，例如 `Newsletter` 。
  * note：荧光笔高亮显示所附带的注释。
  * dateHighlighted：荧光笔高亮显示创建的日期，以你喜欢的日期格式表示。
  * color：荧光笔高亮显示的颜色，例如 `yellow` 。

默认模板：

```
---
id: {{{id}}}
title: >
  {{{title}}}
{{#author}}
author: >
  {{{author}}}
{{/author}}
{{#labels.length}}
tags:
{{#labels}} - {{{name}}}
{{/labels}}
{{/labels.length}}
date_saved: {{{dateSaved}}}
{{#datePublished}}
date_published: {{{datePublished}}}
{{/datePublished}}
---

# {{{title}}}
#Omnivore

[Read on Omnivore]({{{omnivoreUrl}}})
[Read Original]({{{originalUrl}}})

{{#highlights.length}}
## Highlights

{{#highlights}}
> {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #{{name}} {{/labels}}
{{#note}}

{{{note}}}
{{/note}}

{{/highlights}}
{{/highlights.length}}
```

### 导入完整的文章内容

::: warning 完整的内容导入对 PDF 文件不适用
:::

文章的内容在导入前将被转换为 Markdown 文件，这意味着我们需要它们在插入 Obsidian 时避免 HTML 转义。要做到这一点，请使用三段式的 Mustache 语法。你在 Omnivore 中创建的任何荧光笔高亮显示都会被渲染为 Markdown 高亮语法。所以要导入完整的文章内容：

```
{{{ content }}}
```

比如：

```
---
id: {{{id}}}
title: >
  {{{title}}}
{{#author}}
author: >
  {{{author}}}
{{/author}}
{{#labels.length}}
tags:
{{#labels}} - {{{name}}}
{{/labels}}
{{/labels.length}}
date_saved: {{{dateSaved}}}
{{#datePublished}}
date_published: {{{datePublished}}}
{{/datePublished}}
---

# {{{title}}}
#Omnivore

[Read on Omnivore]({{{omnivoreUrl}}})
[Read Original]({{{originalUrl}}})

{{{ content }}}

```

### 模板中的函数图

::: v-pre

* lowerCase：将一个字符串转换为小写字母
* upperCase：将一个字符串转换为大写字母
* upperCaseFirst：将一个字符串的第一个字符转换为大写字母
* formatDate：将日期转换为你喜欢的日期格式，例如 `{{#formatDate}}{{dateSaved}},"yyyy-MM-dd"{{/formatDate}}`。
:::

在模板中使用一个函数将文章的状态转换为小写字母的例子：

```
state:: [[{{#lowerCase}}{{state}}{{/lowerCase}}]]
```

### Front Matter

笔记中的内容是供人阅读的，而元数据中的内容是为了让程序能够更好地读取，例如社区插件或Obsidian本身。front matter包含了元数据，它以YAML格式存放在笔记的顶部。你可以用逗号来分隔多个元数据，并且你可以用`metadata::alias`的格式来自定义别名。例如，`date_saved::date`会在front matter中生成`date: 2023-05-30`。

可用的元数据遵循以下命名规范：

* title
* author
* tags
* date_saved
* date_published
* omnivore_url
* site_name
* original_url
* description
* note
* type
* date_read
* words_count
* read_length
* state
* date_archived

默认的元数据有`title, author, tags, date_saved, date_published`。

请注意，front matter中总是会包含`id`，这是为了确保唯一性。

### Front Matter模板

front matter模板是用来覆盖文件中的front matter的。它仅在被设置时起作用。如果没有设置，front matter将会依据基本设置下的"Front Matter"中关于元数据的定义自动生成。

可用的变量和[模板中可用的变量](#模板中可用的变量)相同。

Front Matter模板示例：

```
id: {{{id}}}
title: >
  {{{title}}}
{{#author}}
author: >
  {{{author}}}
{{/author}}
{{#labels.length}}
tags:
{{#labels}} - {{{name}}}
{{/labels}}
{{/labels.length}}
date_saved: {{{dateSaved}}}
{{#datePublished}}
date_published: {{{datePublished}}}
{{/datePublished}}
```

## 将所有文章同步到一个笔记中

默认情况下，Omnivore 会将文章同步到 Obsidian 的独立文件中。 如果你想把所有的文章都同步到一个笔记中，你可以在插件设置中打开 **Is Single File** 选项，并使用一个固定的 **Filename** 。

## 预定的同步

默认情况下，Omnivore 不会自动同步你的数据。你可以通过在 **Frequency** <sup>（频率）</sup>设置中输入数字来启用预定同步。例如，如果你输入 `60`，Omnivore 将每60分钟同步你的数据，你可以通过输入 `0` 随时关闭它。

---

## 另一种安装 obsidian-omnivore 插件方法

1. 从 [obsidian-omnivore 插件发布页面](https://github.com/omnivore-app/obsidian-omnivore/releases/tag/1.0.0)下载 `main.js`, `manifest.json`, 和 `styles.css` 。

2. 找到您的 Obsidian Vault 目录 (您可以使用 File -> Open Vault 来查找 vault 的路径)。

3. 创建一个 `<Vault 目录>/.obsidian/plugins/obsidian-omnivore` 目录。

4. 将下载的文件移动到 `<Vault 目录>/.obsidian/plugins/obsidian-omnivore/`

5. 解压压缩文件

6. 重新启动 Obsidian 并在 Obsidian 设置中查找 Omnivore 插件。

7. 转到插件设置并设置您的 API 密钥 (在 <https://omnivore.app/settings/api> 生成)。

8. 点击工具栏上的 Omnivore 图标，将您的 Omnivore 数据同步到 Obsidian 中。
