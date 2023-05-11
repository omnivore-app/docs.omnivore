---
title: API
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

Omnivore ofrece una API de graphql que se puede autenticar con un token de API, esto generalmente se usa cuando se conecta a Omnivore desde su escritorio, aplicación móvil u ordenador.

La interfaz de Omnivore también expone un "punto final" (endpoint) de interfaz en https://omnivore.app/api/save para guardar en tu biblioteca en el navegador. Este endpoint utilizará la cookie de tu navegador para autenticarte. Esto se usa normalmente para integrarse con otros lectores, como [Inoreader](https://www.inoreader.com/).

## Obtener un token de API

- Ve a [/settings/api](https://omnivore.app/settings/api)
- Haz clic en `Create`
- Elige un nombre descriptivo para tu clave API.
- Elige un tiempo de caducidad. Cuando una clave API caduca, dejará de funcionar.
- Copia la clave API a tu portapapeles.

![Creación de un token de API](../../../docs/integrations/images/web-create-api-token.png)

::: tip Consejo: Una vez hayas creado tu clave API, no podrás volver a acceder a su valor.
:::

Tu clave API debe agregarse a las solicitudes en el encabezado `Authorization`. Aquí puedes ver una solicitud de GQL de muestra que usa un token API con el valor `FFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF`:

```
curl -X POST -d '{ "query": "query Viewer { me { id name } }" }' -H 'content-type: application/json' -H 'authorization: FFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF' https://api-prod.omnivore.app/api/graphql
{"data":{"me":{"id":"<your user id>","name":"<your full name>"}}}
```

## La API de GraphQL

La documentación de referencia no se ha creado para la API de GraphQL, pero se puede acceder al esquema [en GitHub](https://github.com/omnivore-app/omnivore/blob/main/packages/api/src/schema.ts).

### Métodos comúnmente utilizados

- `search`: Devuelve un conjunto de páginas basado en un término de búsqueda. Utilice una cadena vacía para obtener todas las páginas.
- `article`: Obtenga un solo artículo y su contenido
- `saveUrl`: Guardar una URL
- `savePage`: Guardar una página con contenido HTML proporcionado

### Guardar una URL con la API

Para guardar una URL, puedes usar el endpoint de GQL `saveUrl`. Ten en cuenta que hay tres parámetros obligatorios:

- url: la URL que te gustaría guardar, por ejemplo `https://blog.omnivore.app/p/contributing-to-omnivore`
- clientRequestId: una identificación única para esta solicitud. Esto se puede generar usando una biblioteca uuid y se usa para buscar solicitudes en llamadas API posteriores. Por ejemplo: `85282635-4DF4-4BFC-A3D4-B3A004E57067`
- source: establece esto en `api`, esto nos ayuda a diferenciar la forma en que se guarda una URL.

```
curl -X POST -d '{ "query": "mutation SaveUrl($input: SaveUrlInput!) { saveUrl(input: $input) { ... on SaveSuccess { url clientRequestId } ... on SaveError { errorCodes message } } }", "variables": { "input": { "clientRequestId": "85282635-4DF4-4BFC-A3D4-B3A004E57067", "source": "api", "url": "https://blog.omnivore.app/p/contributing-to-omnivore" }} }' -H 'content-type: application/json' -H 'authorization: <your api key>' https://api-prod.omnivore.app/api/graphql
```

## Aplicaciones de muestra:

- [omnivore-import](https://github.com/davidohlin/instapaper-to-omnivore-import): Una herramienta typescript para importar una biblioteca previamente exportada de Instapaper (escrita en TypeScript)
- [omnivore-api-demo-csharp](https://github.com/laurentkempe/omnivore-api-demo-csharp): Descargar todos tus artículos y guárdalos en formato Markdown (escrito en C#)

## Guardar solicitudes desde el navegador

Las solicitudes se pueden hacer al endpoint del frontend https://omnivore.app/api/save en el navegador.

Al usar este endpoint, la cookie de tu navegador se usará para autenticar y autorizar la solicitud. Las etiquetas se pueden agregar usando el parámetro de consulta `labels`: `https://omnivore.app/api/save?url=<the url>&labels=<Label1>&labels=<Label2>&labels=<Label3>` por ejemplo: https://omnivore.app/api/save?url=https://blog.omnivore.app/p/whats-new-in-omnivore&labels=Reading1&labels=Software
