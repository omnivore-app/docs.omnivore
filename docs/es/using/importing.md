---
title: Importando desde otros Clientes
editLink: true
---

# {{ $frontmatter.title }}

Omnivore permite importar datos de otras fuentes de datos. Al usar la API de importación, está limitado a tres importaciones por día.

El tamaño máximo de archivo para una importación es de 10 MB. Si su importación excede este tamaño, envíe un correo electrónico a [feedback@omnivore.app](mailto:feedback@omnivore.app) para que le ayudemos.

[[toc]]

## Importación de datos de Matter

::: advertencia El importador de datos de Matter se encuentra actualmente en versión beta, si encuentra algún problema, notifíquenoslo en [feedback@omnivore.app](mailto:feedback@omnivore.app)
:::

Omnivore admite la carga del archivo `Archive.zip` generado al exportar sus datos desde la aplicación Matter.

Importe sus datos de Materia usando la [Herramienta de Importación de Archivos de Matter](https://omnivore.app/tools/import/matter-archive).

Para exportar sus datos de Matter, vaya a Mi cuenta y elija Exportar datos, esto le enviará un correo electrónico con sus datos en un archivo `Archive.zip`. Cargue ese archivo usando el cargador en esta página.

El importador incorporará las URL enumeradas en el archivo `_matter_history.csv`. Si el Archivo contiene una entrada de contenido HTML para la URL, se utilizará el contenido proporcionado. De lo contrario, Omnivore intentará recuperar la URL.

::: consejo Actualmente, el importador no admite la importación de resaltados y notas desde Matter.
:::

## Importar usando la API

Al importar datos usando la API, si tiene una gran cantidad de URLs a importar, es mejor usar la API `uploadImportFile` en lugar de `savePage`.

La API `uploadImportFile` acepta un archivo CSV y realiza una importación en segundo plano. La API `savePage` podría tener límites de velocidad si se usa para importar una gran cantidad de URLs.

Puede encontrar un ejemplo de importación con la API `uploadImportFile` aquí: [https://github.com/omnivore-app/import-demo](https://github.com/omnivore-app/import-demo)

## Problemas con la importación de URLs

Al importar, según el formato de sus datos, Omnivore puede recuperar las URL. Es posible que no se puedan obtener las URL que ya no están disponibles en línea. En este caso, se debe agregar a su biblioteca una entrada vacía con solo la URL.
