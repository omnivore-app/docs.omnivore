---
title: API
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

Omnivore 公开了一个可以使用 API 令牌进行身份验证的 graphql API，这通常在从桌面、移动应用程序或本地计算机连接到 Omnivore 时使用。

Omnivore 的前端还会在 https://omnivore.app/api/save 公开前端端点，以便在浏览器保存到文库中。此端点将使用您的浏览器 Cookie 进行身份验证。这通常用于与其他阅读器集成，如 [Inoreader](https://www.inoreader.com/)。

## 获取 API 令牌

- 转到 [/settings/api](https://omnivore.app/settings/api)
- 点击 `Create` <sup>（创建）</sup>
- 为您的 API 密钥创建一个描述性名称
- 选择到期时间。当 API 密钥过期时，它将停止工作。
- 将 API 密钥复制到粘贴板。

![Creating an API token](../../integrations/images/web-create-api-token.png)

::: tip 创建 API 密钥后，您将无法再次访问其值。
:::

您的 API 密钥应添加到 `Authorization` <sup>（授权）</sup> 标头中的请求中。下面是使用值为 `FFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF` 的 API 令牌的示例 GQL 请求：

```
curl -X POST -d '{ "query": "query Viewer { me { id name } }" }' -H 'content-type: application/json' -H 'authorization: FFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF' https://api-prod.omnivore.app/api/graphql
{"data":{"me":{"id":"<your user id>","name":"<your full name>"}}}
```

## The GraphQL API

参考文档不是为 GraphQL API创建的，但可以在 [GitHub](https://github.com/omnivore-app/omnivore/blob/main/packages/api/src/schema.ts)上访问该模式。

### 常用方法

- `search`: 根据搜索词返回一组页面。使用空字符串获取所有页面。
- `article`: 获取单篇文章及其内容
- `saveUrl`: 保存网址
- `savePage`: 使用提供的 HTML 内容保存页面

### 使用 API 保存网址

若要保存 URL，可以使用 `saveUrl` GQL 终结点，请注意有三个必需参数：

- url: 您要保存的网址，例如 `https://blog.omnivore.app/p/contributing-to-omnivore`
- clientRequestId: 此请求的唯一 ID。这可以使用 uuid 库生成，并用于在后续 API 调用中查找请求。例如： `85282635-4DF4-4BFC-A3D4-B3A004E57067`
- source: 将其设置为 `api` ，这有助于我们区分 URL 的保存方式。

```
curl -X POST -d '{ "query": "mutation SaveUrl($input: SaveUrlInput!) { saveUrl(input: $input) { ... on SaveSuccess { url clientRequestId } ... on SaveError { errorCodes message } } }", "variables": { "input": { "clientRequestId": "85282635-4DF4-4BFC-A3D4-B3A004E57067", "source": "api", "url": "https://blog.omnivore.app/p/contributing-to-omnivore" }} }' -H 'content-type: application/json' -H 'authorization: <your api key>' https://api-prod.omnivore.app/api/graphql
```

## 示例应用:

- [omnivore-import](https://github.com/davidohlin/instapaper-to-omnivore-import): 一个打字稿工具，用于导入以前从 Instapaper 导出的库 (用 TypeScript 编写)
- [omnivore-api-demo-csharp](https://github.com/laurentkempe/omnivore-api-demo-csharp): 下载所有文章并以 Markdown 格式保存 (用 C# 编写)

## 保存来自浏览器的请求

可以在浏览器中 https://omnivore.app/api/save 向前端终结点发出请求。

使用此端点时，您的浏览器 Cookie 将用于对请求进行身份验证和授权。可以使用 `labels` 查询参数添加标签： `https://omnivore.app/api/save?url=<the url>&labels=<Label1>&labels=<Label2>&labels=<Label3>` ，例如： https://omnivore.app/api/save?url=https://blog.omnivore.app/p/whats-new-in-omnivore&labels=Reading1&labels=Software
