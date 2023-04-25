---
title: Sincronizar todas tus lecturas con Obsidian
editLink: true
---

# {{ $frontmatter.title }}

Omninove se integra con Obsidian por medio del plugin [obsidian-omnivore](https://github.com/omnivore-app/obsidian-omnivore). El plugin permite personalizar los datos sincronizados de Omnivore a Obsidian y controlar la disposición de los mismos.

[[toc]]

## Características

* Importar sus resaltados y artículos guardados
* Crear gráficos basados en datos de Omnivore
* Filtrar datos importados usando la [sintaxis avanzada de búsqueda](https://omnivore.app/help/search) de Omnivore
* Plantillas personalizadas para datos importados

## Instalación

1. Instale el plugin de la comunidad o constrúyalo desde el código fuente y cargue el complemento desempaquetado
2. Cree una [cuenta en Omnivore](https://omnivore.app)
3. Vaya a [Omnivore](https://omnivore.app/settings/api) y cree una clave API
4. Abra la configuración y agregue su clave API

## Personalizar qué datos se sincronizan de Omnivore a Obsidian

[Filtro de Sincronización de Obsidian](./images/obsidian-sync-filter.png)

El plugin de Obsidian para Omnivore ofrece tres opciones para importar datos:

* Importar todos mis artículos: Esto importará todos los artículos que guarde en Omnivore y las etiquetas (tags), resaltados y notas que haya agregado al artículo.
* importar solo resaltados: Esto importará cada artículo que haya guardado que tenga resaltados
* avanzado: Esto le permite definir un filtro de búsqueda para importar. Por ejemplo, importe solo Newsletters usando `label:Newsletter`.

## Controlar la disposición de los datos importados a Obsidian

El plugin Omnivore para Obsidian usa el lenguaje de plantillas [mustache](https://mustache.github.io/) para definir cómo se guardan los datos importados en Obsidian. La configuración del complemento le permite definir la plantilla para el diseño de un artículo. Se utilizarán las plantillas predeterminadas si no define las suyas propias.

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

### Variables disponibles en la plantilla

* id: El identificador del artículo. Esto se usará como la identificación del archivo en frontmatter
* title: El título del artículo
* omnivoreUrl: La URL del artículo en Omnivore
* siteName: El nombre del sitio desde el que se guardó el artículo
* originalUrl: La URL del artículo original
* author: El autor del artículo
* dateSaved: La fecha en que se guardó el artículo en Omnivore en su formato de fecha preferido
* description: La descripción del artículo
* content: El contenido del artículo en formato Markdown
* labels: Una lista de etiquetas asociadas a la página
  * name: El nombre de la etiqueta, por ejemplo `Newsletter`
* note: La nota asociada al artículo
* type: El tipo de página, por ejemplo `ARTICULO` o `FICHERO`
* datePublished: La fecha en que se publicó el artículo en su formato de fecha preferido
* dateRead: La fecha en que se leyó el artículo en su formato de fecha preferido
* fileAttachment: El fichero asociado adjunto al artículo
* highlights: Una lista de resaltados asociados al artículo
  * text: El texto del resaltado
  * highlightUrl: La URL del resaltado en Omnivore
  * labels: Una lista de etiquetas asociadas al resaltado
    * name: El nombre de la etiqueta, por ejemplo `Newsletter`
  * note: La nota asociada al resaltado
  * dateHighlighted: La fecha en que se creó el resaltado en su formato de fecha preferido

Plantilla por defecto:

```
---
id: {{{id}}}
title: {{{title}}}
{{#author}}
author: {{{author}}}
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
