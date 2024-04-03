---
title: Buscar
editLink: true
---

# {{ $frontmatter.title }}

Omnivore usa la búsqueda para filtrar elementos en su biblioteca. Puede utilizar una búsqueda de palabra clave simple o nuestra sintaxis de búsqueda avanzada para encontrar artículos.

[[toc]]

## Buscando texto

Omnivore realizará una búsqueda de texto completo en el contenido, el título, la descripción y el sitio del elemento de la biblioteca de forma predeterminada. Puede buscar términos específicos citando sus términos. De forma predeterminada, todos los resultados que coincidan con su búsqueda se devolverán en el orden en que se guardaron. Para cambiar su búsqueda por relevancia, utilice el parámetro sort:score.

## Filtrado por etiquetas

Puede filtrar su búsqueda según las etiquetas utilizando las cláusulas AND y OR. También puede negar una búsqueda de etiquetas para encontrar páginas que no tengan una determinada etiqueta.

Algunos ejemplos:

- `label:Newsletter` encuentra todas las páginas que tienen la etiqueta Newsletter
- `label:Cooking,Fitness` encuentra todas sus páginas con las etiquetas Cooking o Fitness
- `label:Newsletter label:Surfing` encuentra todas las páginas con las etiquetas Newsletter y Surfing
- `label:Coding -label:News` encuentra todas las páginas con la etiqueta Coding que no tienen la etiqueta News

## Filtrado por estado de archivo

El filtro `in:` se utiliza para filtrar la búsqueda por estado de archivo. Las opciones son:

- `in:inbox` (predeterminado): muestra elementos no archivados
- `in:archive:` muestra los elementos archivados
- `in:all:` muestra todos los elementos independientemente del estado del archivo

## Filtrado por estado de lectura

El filtro `is:` se utiliza para filtrar la búsqueda por estado de lectura. Tenga en cuenta que en Omnivore 'leer' significa leer completamente, no solo abrir.

Las opciones de filtro `is:` son:

- `is:read`: Mostrar solo elementos que se hayan leído por completo
- `is:unread`: (predeterminado): mostrar elementos no leídos

## Filtrado por tipo

El filtro `type:` se utiliza para filtrar la búsqueda por tipo.

- `type:article`: Mostrar solo artículos
- `type:file`: Mostrar solo archivos
- `type:pdf`: Mostrar solo PDFs
- `type:highlights`: Mostrar solo sus resaltados

## Encontrar resaltados

Puede encontrar sus resaltados usando el filtro `type:highlights` o encontrar elementos guardados con resaltados usando el filtro has:highlights.

## Filtrado por fechas de guardado/publicación

Puede filtrar sus búsquedas en función de la hora en que se guardaron o publicaron utilizando los filtros `saved:` y `published:`. Estos filtros toman dos fechas para crear un rango de fechas. El comodín `*` aceptará cualquier fecha.

Por ejemplo:

- `saved:2022-04-21..*` Todos los artículos guardados desde 2022-04-21
- `published:2020-01-01..2022-02-02` Todos los artículos publicados entre 2020-01-01 y 2022-02-02
- `published:*..2020-01-01` Todos los artículos publicados antes del 2020-01-01

## Ordenación

De forma predeterminada, todos los resultados de búsqueda en Omnivore se ordenan por fecha de guardado. Esto coloca los elementos guardados más recientemente en la parte superior de su biblioteca. Puede usar las opciones de clasificación para cambiar el orden de la biblioteca:

- `sort:saved`: Ordenar por fecha de guardado
- `sort:updated`: Ordenar por hora en que se actualizó el elemento, por ejemplo, agregando una etiqueta o resaltado.
- `sort:score`: Ordenar por relevancia del término de consulta.
