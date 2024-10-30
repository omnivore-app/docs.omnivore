import{_ as o,c as a,a as s,b as e,t as n,d as l,o as p}from"./app.15727171.js";const g=JSON.parse('{"title":"Sending your Omnivore data to other apps with Webhooks","description":"","frontmatter":{"title":"Sending your Omnivore data to other apps with Webhooks","editLink":true},"headers":[],"relativePath":"integrations/webhooks.md","lastUpdated":1700807760000}'),i={name:"integrations/webhooks.md"},u={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=l(`<p>Omnivore allows you to send your reading data in realtime using webhooks. When a new page is saved or updated, a webhook can be triggered.</p><p>Upon setting up the webhook URL, that URL will recieve post requests of the selected webhooks. Here is an example of the body of a POST request for <code>PAGE_CREATED</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;action&quot;: &quot;created&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;userId&quot;: &quot;&lt;YOUR USER ID&gt;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;page&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;type&quot;: &quot;page&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;userId&quot;: &quot;&lt;YOUR USER ID&gt;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: &quot;f187586d-1380-4c1b-887f-140fb9217465&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;slug&quot;: &quot;fast-api-experiment-middleware-feature-by-life-is-short-so-enjoy-18a22a66735&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;description&quot;: &quot;While I worked on adding authentication into FastAPI application, I had a chance to take a look the FastAPI Middleware feature. Let’s try the example in FastAPI documentation. The example is adding…&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;title&quot;: &quot;FastAPI: Experiment Middleware feature | by Life-is-short--so--enjoy-it | Aug, 2023 | Medium&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;author&quot;: &quot;Life-is-short--so--enjoy-it&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;originalUrl&quot;: &quot;https://medium.com/@life-is-short-so-enjoy-it/fastapi-experiment-middleware-feature-c0a0c7314d74&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;itemType&quot;: &quot;ARTICLE&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;textContentHash&quot;: &quot;37e42d0dbd7b710094e77808a81bdd43&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;thumbnail&quot;: &quot;https://miro.medium.com/v2/resize:fit:1200/1*SDkMzvL5PNsIGchfG-N--w.png&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;publishedAt&quot;: &quot;2023-08-12T08:05:10.316Z&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;readingProgressTopPercent&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;readingProgressHighestReadAnchor&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;state&quot;: &quot;SUCCEEDED&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;createdAt&quot;: &quot;2023-08-23T13:47:25.365Z&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;savedAt&quot;: &quot;2023-08-23T13:47:25.365Z&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;siteName&quot;: &quot;Medium&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;itemLanguage&quot;: &quot;English&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;siteIcon&quot;: &quot;https://miro.medium.com/v2/1*m-R_BkNf1Qjr1YbyOIJY2w.png&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;wordCount&quot;: 1257,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;archivedAt&quot;: null</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><nav class="table-of-contents"><ul></ul></nav><ul><li><a href="https://blog.omnivore.app/p/syncing-all-your-notes-to-google" target="_blank" rel="noreferrer">Example of sending your notes to Google Sheets using a Webhook</a></li></ul>`,5);function q(t,d,A,C,h,y){return p(),a("div",null,[s("h1",u,[e(n(t.$frontmatter.title)+" ",1),r]),c])}const D=o(i,[["render",q]]);export{g as __pageData,D as default};
