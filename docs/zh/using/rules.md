---
title: 规则
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

## 简介

:::warning
规则是一项测试功能，目前仅在 Web 上可用。规则语法将来可能会更改并破坏或向上兼容性。
:::

在幕后，Omnivore 使用规则引擎来实现更高级别的功能。创建或修改文章时应用规则。

规则是搜索筛选器和一组操作的组合。当页面与搜索筛选器匹配时，将应用操作。例如：

- `subscription:"Money Talk"` -> `Add Label('Finance')`: 此规则将 “ Finance ” 标签添加到来自 `Money Talk` 订阅的所有页面。

![Screenshot of Rules](../../using/images/web-rules-001.png)

## 创建规则

目前只能在 [/settings/rules](https://omnivore.app/settings/rules) <sup>(/设置/规则) </sup>页面上创建规则。如果要创建新规则：

- 点击右上角的 `Create a new Rule` <sup>(创建新规则) </sup>按钮。
- 输入搜索筛选器。使用 [搜索](../../zh/using/search.md) 参考获取更多信息。
- 选择要在规则匹配时应用的操作。

## 事件对象

规则的搜索筛选器与常规搜索筛选器略有不同。除了所有常规的 [高级搜索](../../zh/using/search.md) 功能外，规则还有一个事件对象。事件对象允许您创建与特定事件匹配的规则。

- `event.created`: 该规则仅在首次保存页面时匹配。
- `event.updated`: 当修改页面属性的任何部分时，将触发该规则。例如，正在添加标签、更改标题或更新阅读位置。

## 操作

- `Add Label`: 向文章添加一组标签
- `Send Notification`: 向已注册的iOS设备发送推送通知。
- `Archive`: 存档中的文章。

## 规则的一些想法

- `is:read` -> `Archive()`: 完全阅读完后自动将文章移至存档。
- `Text word` -> `Add Label('some label')`: 如果页面包含特定字词，则自动向页面添加标签。例如： `Vancouver Canucks` -> `Add Label('Hockey')`
- `event.created label:Newsletter` -> `Send Notification()`: 每次发送新闻稿件问题时发送推送通知。
