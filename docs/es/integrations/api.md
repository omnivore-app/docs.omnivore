---
title: API
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

Omnivore ofrece una API de graphql que se puede autenticar con un token de API.

## Obtener un token de API

- Vaya a [/settings/api](https://omnivore.app/settings/api)
- Clic en `Crear`
- Elija un nombre descriptivo para su clave API
- Elija un tiempo de caducidad. Cuando una clave API caduca, deja de funcionar.
- Copie la clave API a su portapapeles.

![Creación de un token de API](./images/web-create-api-token.png)

::: Consejo: Una vez que se crea su clave API, no podrá volver a acceder a su valor.
:::

## La API de GraphQL

La documentación de referencia no se ha creado para la API de GraphQL, pero se puede acceder al esquema [en GitHub](https://github.com/omnivore-app/omnivore/blob/main/packages/api/src/schema.ts).

### Métodos comúnmente utilizados

- `search`: Devuelve un conjunto de páginas basado en un término de búsqueda. Utilice una cadena vacía para obtener todas las páginas.
- `article`: Obtenga un solo artículo y su contenido
- `saveUrl`: Guardar una URL
- `savePage`: Guardar una página con contenido HTML proporcionado

## Aplicaciones de muestra:

- [omnivore-import](https://github.com/davidohlin/instapaper-to-omnivore-import): Una herramienta TypeScript para importar una biblioteca previamente exportada de Instapaper (escrita en TypeScript)
- [omnivore-api-demo-csharp](https://github.com/laurentkempe/omnivore-api-demo-csharp): Descargue todos sus artículos y guárdelos en formato Markdown (escrito en C#)
