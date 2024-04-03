---
title: 搜索
editLink: true
---

# {{ $frontmatter.title }}

Omnivore 使用搜索来筛选文库中的文章。您可以使用简单的关键字搜索或我们的高级搜索语法来查找文章。

[[toc]]

## 搜索文本

默认情况下，Omnivore 将跨文库文章中的内容、标题、描述和站点执行全文搜索。您可以通过引用您的术语来搜索特定术语。默认情况下，与您的搜索匹配的所有结果将按保存顺序返回。若要将搜索更改为相关性，请使用 sort:score 参数。

## 根据标签筛选

您可以使用 AND 和 OR 规则根据标签筛选搜索结果。您还可以否定标签搜索以查找没有特定标签的页面。

一些例子：

- `label:Newsletter` 查找具有 “Newsletter” 标签的所有页面。
- `label:Cooking,Fitness` 查找带有 “Cooking” 或 “Fitness” 标签的所有页面。
- `label:Newsletter label:Surfing` 查找同时具有 “Newsletter” 和 “Surfing” 标签的所有页面。
- `label:Coding -label:News` 查找具有 “Coding” 标签但没有 “News” 标签的所有页面。

## 根据存档状态筛选

`in:` 筛选器用于根据存档状态筛选搜索结果。选项包括：

- `in:inbox` (the default): 显示未存档的文章。
- `in:archive:` 显示已存档的文章。
- `in:all:` 显示所有文章，而不考虑存档状态。

## 按阅读状态筛选

`is:` 筛选器用于根据阅读状态筛选搜索结果。请注意，在 Omnivore 中，'read' 意味着完全阅读完，而不仅仅是打开过。

`is:` 筛选器选项包括：

- `is:read`: 仅显示完全阅读过的文章。
- `is:reading`: 仅显示当前正在阅读的文章。
- `is:unread`: (the default): 显示未读文章。

## 根据类型筛选

The `type:` 筛选器用于根据类型筛选搜索结果。

- `type:article`: 仅显示文章。
- `type:file`: 仅显示文件。
- `type:pdf`: 仅显示 PDF。
- `type:highlights`: 显示您的荧光笔亮点。

## 查找带有荧光笔高亮的文章

您可以使用 `type:highlights` 筛选荧光笔高亮显示，也可以使用 has:highlights 查找包含荧光笔高亮显示的已保存文章。

## 根据 保存/发布日期 筛选

您可以使用 `saved:` 和 `published:` 筛选器根据保存或发布的时间筛选搜索结果。 这些筛选器需要两个日期来创建日期范围。 “`*`” 通配符将接受任何日期。

例如:

- `saved:2022-04-21..*` 自 2022-04-21 以来保存的所有文章。
- `published:2020-01-01..2022-02-02` 在 2020-01-01 至 2022-02-02 之间发布的所有文章。
- `published:*..2020-01-01` 在 2020-01-01 之前发布的所有文章。

## 排序

默认情况下，Omnivore 所有搜索结果都按保存日期排序。这会将最近保存的文章放在文库的顶部。您可以使用排序选项更改资料库顺序：

- `sort:saved`: 根据保存日期排序
- `sort:updated`: 根据文章更新时间排序，例如添加标签或荧光笔高亮显示。
- `sort:score`: 根据查询词相关性排序。
