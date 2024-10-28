import{_ as o,c as r,a as e,b as d,t,d as i,o as l}from"./app.c0255b8e.js";const v=JSON.parse('{"title":"Buscar","description":"","frontmatter":{"title":"Buscar","editLink":true},"headers":[{"level":2,"title":"Buscando texto","slug":"buscando-texto","link":"#buscando-texto","children":[]},{"level":2,"title":"Filtrado por etiquetas","slug":"filtrado-por-etiquetas","link":"#filtrado-por-etiquetas","children":[]},{"level":2,"title":"Filtrado por estado de archivo","slug":"filtrado-por-estado-de-archivo","link":"#filtrado-por-estado-de-archivo","children":[]},{"level":2,"title":"Filtrado por estado de lectura","slug":"filtrado-por-estado-de-lectura","link":"#filtrado-por-estado-de-lectura","children":[]},{"level":2,"title":"Filtrado por tipo","slug":"filtrado-por-tipo","link":"#filtrado-por-tipo","children":[]},{"level":2,"title":"Encontrar resaltados","slug":"encontrar-resaltados","link":"#encontrar-resaltados","children":[]},{"level":2,"title":"Filtrado por fechas de guardado/publicación","slug":"filtrado-por-fechas-de-guardado-publicacion","link":"#filtrado-por-fechas-de-guardado-publicacion","children":[]},{"level":2,"title":"Ordenación","slug":"ordenacion","link":"#ordenacion","children":[]}],"relativePath":"es/using/search.md","lastUpdated":1712112343000}'),s={name:"es/using/search.md"},n={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=i('<p>Omnivore usa la búsqueda para filtrar elementos en su biblioteca. Puede utilizar una búsqueda de palabra clave simple o nuestra sintaxis de búsqueda avanzada para encontrar artículos.</p><nav class="table-of-contents"><ul><li><a href="#buscando-texto">Buscando texto</a></li><li><a href="#filtrado-por-etiquetas">Filtrado por etiquetas</a></li><li><a href="#filtrado-por-estado-de-archivo">Filtrado por estado de archivo</a></li><li><a href="#filtrado-por-estado-de-lectura">Filtrado por estado de lectura</a></li><li><a href="#filtrado-por-tipo">Filtrado por tipo</a></li><li><a href="#encontrar-resaltados">Encontrar resaltados</a></li><li><a href="#filtrado-por-fechas-de-guardado-publicacion">Filtrado por fechas de guardado/publicación</a></li><li><a href="#ordenacion">Ordenación</a></li></ul></nav><h2 id="buscando-texto" tabindex="-1">Buscando texto <a class="header-anchor" href="#buscando-texto" aria-hidden="true">#</a></h2><p>Omnivore realizará una búsqueda de texto completo en el contenido, el título, la descripción y el sitio del elemento de la biblioteca de forma predeterminada. Puede buscar términos específicos citando sus términos. De forma predeterminada, todos los resultados que coincidan con su búsqueda se devolverán en el orden en que se guardaron. Para cambiar su búsqueda por relevancia, utilice el parámetro sort:score.</p><h2 id="filtrado-por-etiquetas" tabindex="-1">Filtrado por etiquetas <a class="header-anchor" href="#filtrado-por-etiquetas" aria-hidden="true">#</a></h2><p>Puede filtrar su búsqueda según las etiquetas utilizando las cláusulas AND y OR. También puede negar una búsqueda de etiquetas para encontrar páginas que no tengan una determinada etiqueta.</p><p>Algunos ejemplos:</p><ul><li><code>label:Newsletter</code> encuentra todas las páginas que tienen la etiqueta Newsletter</li><li><code>label:Cooking,Fitness</code> encuentra todas sus páginas con las etiquetas Cooking o Fitness</li><li><code>label:Newsletter label:Surfing</code> encuentra todas las páginas con las etiquetas Newsletter y Surfing</li><li><code>label:Coding -label:News</code> encuentra todas las páginas con la etiqueta Coding que no tienen la etiqueta News</li></ul><h2 id="filtrado-por-estado-de-archivo" tabindex="-1">Filtrado por estado de archivo <a class="header-anchor" href="#filtrado-por-estado-de-archivo" aria-hidden="true">#</a></h2><p>El filtro <code>in:</code> se utiliza para filtrar la búsqueda por estado de archivo. Las opciones son:</p><ul><li><code>in:inbox</code> (predeterminado): muestra elementos no archivados</li><li><code>in:archive:</code> muestra los elementos archivados</li><li><code>in:all:</code> muestra todos los elementos independientemente del estado del archivo</li></ul><h2 id="filtrado-por-estado-de-lectura" tabindex="-1">Filtrado por estado de lectura <a class="header-anchor" href="#filtrado-por-estado-de-lectura" aria-hidden="true">#</a></h2><p>El filtro <code>is:</code> se utiliza para filtrar la búsqueda por estado de lectura. Tenga en cuenta que en Omnivore &#39;leer&#39; significa leer completamente, no solo abrir.</p><p>Las opciones de filtro <code>is:</code> son:</p><ul><li><code>is:read</code>: Mostrar solo elementos que se hayan leído por completo</li><li><code>is:unread</code>: (predeterminado): mostrar elementos no leídos</li></ul><h2 id="filtrado-por-tipo" tabindex="-1">Filtrado por tipo <a class="header-anchor" href="#filtrado-por-tipo" aria-hidden="true">#</a></h2><p>El filtro <code>type:</code> se utiliza para filtrar la búsqueda por tipo.</p><ul><li><code>type:article</code>: Mostrar solo artículos</li><li><code>type:file</code>: Mostrar solo archivos</li><li><code>type:pdf</code>: Mostrar solo PDFs</li><li><code>type:highlights</code>: Mostrar solo sus resaltados</li></ul><h2 id="encontrar-resaltados" tabindex="-1">Encontrar resaltados <a class="header-anchor" href="#encontrar-resaltados" aria-hidden="true">#</a></h2><p>Puede encontrar sus resaltados usando el filtro <code>type:highlights</code> o encontrar elementos guardados con resaltados usando el filtro has:highlights.</p><h2 id="filtrado-por-fechas-de-guardado-publicacion" tabindex="-1">Filtrado por fechas de guardado/publicación <a class="header-anchor" href="#filtrado-por-fechas-de-guardado-publicacion" aria-hidden="true">#</a></h2><p>Puede filtrar sus búsquedas en función de la hora en que se guardaron o publicaron utilizando los filtros <code>saved:</code> y <code>published:</code>. Estos filtros toman dos fechas para crear un rango de fechas. El comodín <code>*</code> aceptará cualquier fecha.</p><p>Por ejemplo:</p><ul><li><code>saved:2022-04-21..*</code> Todos los artículos guardados desde 2022-04-21</li><li><code>published:2020-01-01..2022-02-02</code> Todos los artículos publicados entre 2020-01-01 y 2022-02-02</li><li><code>published:*..2020-01-01</code> Todos los artículos publicados antes del 2020-01-01</li></ul><h2 id="ordenacion" tabindex="-1">Ordenación <a class="header-anchor" href="#ordenacion" aria-hidden="true">#</a></h2><p>De forma predeterminada, todos los resultados de búsqueda en Omnivore se ordenan por fecha de guardado. Esto coloca los elementos guardados más recientemente en la parte superior de su biblioteca. Puede usar las opciones de clasificación para cambiar el orden de la biblioteca:</p><ul><li><code>sort:saved</code>: Ordenar por fecha de guardado</li><li><code>sort:updated</code>: Ordenar por hora en que se actualizó el elemento, por ejemplo, agregando una etiqueta o resaltado.</li><li><code>sort:score</code>: Ordenar por relevancia del término de consulta.</li></ul>',27);function p(a,h,f,b,m,g){return l(),r("div",null,[e("h1",n,[d(t(a.$frontmatter.title)+" ",1),c]),u])}const _=o(s,[["render",p]]);export{v as __pageData,_ as default};