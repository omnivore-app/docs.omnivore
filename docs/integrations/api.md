---
title: API
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

Omnivore exposes a graphql API that can be authenticated with an API token.

## Getting an API token

- Go to [/settings/api](https://omnivore.app/settings/api)
- Click `Create`
- Choose a descriptive name for your API key
- Choose an expiration time. When an API key expires it will stop working.
- Copy the API key to your pasteboard.

![Creating an API token](./images/web-create-api-token.png)

::: tip Once your API key is created you will not be able to access it's value again.
:::

## The GraphQL API

Reference documentation is not created for the GraphQL API, but the schema can be accessed [on GitHub](https://github.com/omnivore-app/omnivore/blob/main/packages/api/src/schema.ts).

### Commonly used methods

- `search`: Return a set of pages based on a search term. Use an empty string to get all pages.
- `article`: Get a single article and its content
- `saveUrl`: Save a URL
- `savePage`: Save a page with supplied HTML content

## Sample Apps:

- [omnivore-import](https://github.com/davidohlin/instapaper-to-omnivore-import): A typescript tool for importing a library previously exported from Instapaper (written in TypeScript)
- [omnivore-api-demo-csharp](https://github.com/laurentkempe/omnivore-api-demo-csharp): Download all your articles and save in Markdown format (written in C#)
