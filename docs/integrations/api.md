---
title: API
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

Omnivore exposes a graphql API that can be authenticated with an API token, this is usually used when connecting to Omnivore from your desktop, mobile app, or local computer.

Omnivore's frontend also exposes a frontend endpoint at https://omnivore.app/api/save for saving to your library in the browser. This endpoint will use your browser cookie to authenticate. This is normally used for integrating with other readers, like [Inoreader](https://www.inoreader.com/).

## Getting an API token

- Go to [/settings/api](https://omnivore.app/settings/api)
- Click `Create`
- Choose a descriptive name for your API key
- Choose an expiration time. When an API key expires it will stop working.
- Copy the API key to your pasteboard.

![Creating an API token](./images/web-create-api-token.png)

::: tip Once your API key is created you will not be able to access it's value again.
:::

Your API key should be added to requests in the `Authorization` header. Here is a sample GQL request using an API token with the value `FFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF`:

```
curl -X POST -d '{ "query": "query Viewer { me { id name } }" }' -H 'content-type: application/json' -H 'authorization: FFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF' https://api-prod.omnivore.app/api/graphql
{"data":{"me":{"id":"<your user id>","name":"<your full name>"}}}
```

## The GraphQL API

Reference documentation is not created for the GraphQL API, but the schema can be accessed [on GitHub](https://github.com/omnivore-app/omnivore/blob/main/packages/api/src/schema.ts).

### Commonly used methods

- `search`: Return a set of pages based on a search term. Use an empty string to get all pages.
- `article`: Get a single article and its content
- `saveUrl`: Save a URL
- `savePage`: Save a page with supplied HTML content

### Saving a URL with the API

To save a URL you can use the `saveUrl` GQL endpoint, note that there are three required parameters:

- url: The url you would like to save for example `https://blog.omnivore.app/p/contributing-to-omnivore`
- clientRequestId: A unique id for this request. This can be generated using a uuid library, and is used to look up requests on subsequent API calls. For example: `85282635-4DF4-4BFC-A3D4-B3A004E57067`
- source: Set this to `api`, this helps us differentiate the way a URL is being saved.

```
curl -X POST -d '{ "query": "mutation SaveUrl($input: SaveUrlInput!) { saveUrl(input: $input) { ... on SaveSuccess { url clientRequestId } ... on SaveError { errorCodes message } } }", "variables": { "input": { "clientRequestId": "85282635-4DF4-4BFC-A3D4-B3A004E57067", "source": "api", "url": "https://blog.omnivore.app/p/contributing-to-omnivore" }} }' -H 'content-type: application/json' -H 'authorization: <your api key>' https://api-prod.omnivore.app/api/graphql
```

## Sample Apps:

- [Omnivore Telegram Bot 🤖](https://github.com/Rnbsov/Omnivore-Telegram-Bot):  Save articles or Inline query them to share recent findings with friends ✨
- [omnivore-import](https://github.com/davidohlin/instapaper-to-omnivore-import): A typescript tool for importing a library previously exported from Instapaper (written in TypeScript)
- [omnivore-api-demo-csharp](https://github.com/laurentkempe/omnivore-api-demo-csharp): Download all your articles and save in Markdown format (written in C#)
- [OmnivoreQL](https://github.com/yazdipour/OmnivoreQL): GraphQL omnivore client for Python (written in Python)
- [OmnivoreX](https://github.com/yazdipour/OmnivoreX): Text User Interface Omnivore Client to read articles in command line in Markdown format (written in Python)
- [omnivore-opml-import](https://github.com/edleeman17/omnivore-opml-import): A simple tool for importing OPML feeds into Omnivore (written in Javascript)

## Saving requests from the browser

Requests can be made to the frontend endpoint https://omnivore.app/api/save in the browser.

When using this endpoint your browser cookie will be used to authenticate and authorize the request. Labels can be added using the `labels` query param: `https://omnivore.app/api/save?url=<the url>&labels=<Label1>&labels=<Label2>&labels=<Label3>` for example: https://omnivore.app/api/save?url=https://blog.omnivore.app/p/whats-new-in-omnivore&labels=Reading1&labels=Software
