---
title: Sincroniza todas tus lecturas con Logseq
editLink: true
---

# {{ $frontmatter.title }}

Omninove se integra con Logseq por medio del plugin [logseq-omnivore](https://github.com/omnivore-app/logseq-omnivore). El plugin permite personalizar los datos sincronizados de Omnivore a Logseq, controlando el disposición de la información y la frecuencia de sincronización.

[[toc]]

## Demonstración

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cc6DbBtOs14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Configurando plugin Omnivore Logseq

- Busque Logseq Marketplace para Omnivore e instale el plugin
- En su navegador abra [https://omnivore.app/settings/api](https://omnivore.app/settings/api) y cree un token API (ver [API](../../integrations/api.md) para más información sobre cómo crear un token)
- En Logseq abra la Configuración del Plugin Omnivore y pegue su clave API

## Personalizar qué datos se sincronizan desde Omnivore hacia Logseq

[Filtro de Sincronización Logseq](./images/logseq-sync-filter.png)

El plugin Omnivore Logseq ofrece tres opciones para importar datos:

- importar todos mis artículos: Esto importará todos los artículos que guarde en Omnivore y las etiquetas (tags), resaltados y notas que haya agregado al artículo.
- importar solo resaltados: Esto importará cada artículo que haya guardado que tenga resaltado.
- avanzado: Esto le permite definir un filtro de búsqueda para importar. Por ejemplo, importar solo newsletters utilizando `label:Newsletter`.

## Controlar la disposición de los datos importados a Logseq

El plugin Omnivore Logseq usa la lenguaje de plantillas [mustache](https://mustache.github.io/) para definir cómo se guardan los datos importados en Logseq. La configuración del plugin le permite definir la plantilla para el diseño de un artículo y el diseño de resaltado. Se utilizarán las plantillas predeterminadas si no define las suyas propias.

### Lenguaje de plantillas Mustache

Mustache es un lenguaje de plantillas simple y sin lógica que le permite crear plantillas fáciles de leer y mantener. Las plantillas de Mustache constan de etiquetas, que son marcadores de posición que se reemplazan con valores reales cuando se representa la plantilla.

Hay varios tipos de etiquetas de Mustache, incluyendo:

::: v-pre

- `{{ variable }}`: Representa el valor de una variable.
- `{{# section }}` ... `{{/ section }}`: Representa una sección de la plantilla si el valor de la sección es verdadero, como una matriz o un objeto.
- `{{^ inverted section }}` ... `{{/ inverted section }}`: Representa una sección de la plantilla si el valor de la sección es falso.
- `{{! comment }}`: Agrega un comentario a la plantilla, que se ignora cuando se procesa la plantilla.

Además de las etiquetas básicas de Mustache, también hay varias funciones integradas de Mustache que puede usar en sus plantillas, como:

- `{{# list }}` ... `{{/ list }}`: Representa una sección de la plantilla para cada elemento de una lista.
- `{{^ emptyList }}` ... `{{/ emptyList }}`: Representa una sección de la plantilla si una lista no está vacía.
- `{{& variable }}` or `{{{ variable }}}`: Representa el valor de una variable sin caracteres HTML de escape.
- `{{> partial }}`: Representa una plantilla parcial, que es una plantilla reutilizable que se puede incluir en otras plantillas.
:::

### Variables disponibles para la plantilla de artículo

- title: El título del artículo * (requerido)
- omnivoreUrl: La URL del artículo en Omnivore * (requerido)
- siteName: El nombre del sitio desde el que se guardó el artículo
- originalUrl: La URL del artículo original
- author: El autor del artículo
- dateSaved: La fecha en que se guardó el artículo en Omnivore en su formato de fecha preferido con corchetes dobles alrededor, por ejemplo `[[2021-01-01]]`
- description: La descripción del artículo
- content: El contenido del artículo en formato Markdown
- labels: Una lista de etiquetas asociadas a la página
  - name: El nombre de la etiqueta, por ejemplo `Newsletter`
- note: La nota asociada al artículo
- type: El tipo de página, por ejemplo `ARTICULO` o `FICHERO`
- datePublished: La fecha en que se publicó el artículo en su formato de fecha preferido con corchetes dobles, por ejemplo `[[2021-01-01]]`
- dateRead: La fecha en que se leyó el artículo en su formato de fecha preferido con corchetes dobles, por ejemplo `[[2021-01-01]]`
- rawDatePublished: La fecha en que se publicó el artículo en su formato de fecha preferido
- rawDateRead: La fecha en que se leyó el artículo en su formato de fecha preferido

Plantilla de artículo predeterminada:

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

### Variables disponibles para la plantilla de resaltado

- text: El texto del resaltado
- labels: Una lista de etiquetas asociadas al resaltado
  - name: El nombre de la etiqueta, por ejemplo `Newsletter`
- highlightUrl: La URL del resaltado en Omnivore
- dateHighlighted: La fecha en que se creó el resaltado en su formato de fecha preferido con corchetes dobles, por ejemplo `[[2021-01-01]]`
- rawDateHighlighted: La fecha en que se creó el resaltado en su formato de fecha preferido

Plantilla de resaltado predeterminada:

```
> {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #[[{{{name}}}]] {{/labels}}
```

### Resaltar anotación

La anotación de un resaltado se agregará como un subbloque al bloque resaltado.

## Guías de la Comunidad

- [omnivore-logseq-guide](https://briansunter.com/graph/#/page/omnivore-logseq-guide?anchor=ls-block-62b28de3-0e9e-456e-bf29-7e2541213aa5) -- Una útil guía de configuración y uso escrita por [Brian Sunter](https://briansunter.com/).
- Traducción al chino: [omnivore-logseq-guide](https://sywhb.github.io/#/page/omnivore-logseq%20%E6%8C%87%E5%8D%97)
