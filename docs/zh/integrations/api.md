---
title: API
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

Omnivore 公开了一个可以使用 API 令牌进行身份验证的 graphql API。

## 获取 API 令牌

- 转到 [/settings/api](https://omnivore.app/settings/api)
- 点击 `Create`
- 为您的 API 密钥创建一个描述性名称
- 选择到期时间。当 API 密钥过期时，它将停止工作。
- 将 API 密钥复制到粘贴板。

![Creating an API token](../../integrations/images/web-create-api-token.png)

::: 提示：创建 API 密钥后，您将无法再次访问其值。
:::

## The GraphQL API

参考文档不是为 GraphQL API创建的，但可以在 [GitHub](https://github.com/omnivore-app/omnivore/blob/main/packages/api/src/schema.ts)上访问该模式。

### 常用方法

- `search`: 根据搜索词返回一组页面。使用空字符串获取所有页面。
- `article`: 获取单篇文章及其内容
- `saveUrl`: 保存网址
- `savePage`: 使用提供的 HTML 内容保存页面

## 示例应用:

- [omnivore-import](https://github.com/davidohlin/instapaper-to-omnivore-import): 一个打字稿工具，用于导入以前从 Instapaper 导出的库 (用 TypeScript 编写)
- [omnivore-api-demo-csharp](https://github.com/laurentkempe/omnivore-api-demo-csharp): 下载所有文章并以 Markdown 格式保存 (用 C# 编写)
