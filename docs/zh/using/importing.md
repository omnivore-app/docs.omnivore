---
title: 导入数据
editLink: true
---

# {{ $frontmatter.title }}

Omnivore 允许从其他数据源导入数据。 使用导入 API 时，每天只能导入三次。

导入的最大文件大小为 10MB。如果您的导入文件超过此大小，请发送电子邮件至 [feedback@omnivore.app](mailto:feedback@omnivore.app) 寻求帮助。

[[toc]]

## 从 Matter 导入数据

:::warning
Matter 数据导入器目前处于测试阶段，如果您遇到任何问题，请通过以下方式通知我们 [feedback@omnivore.app](mailto:feedback@omnivore.app)
:::

Omnivore 支持上传通过从Matter应用程序导出数据生成的 `Archive.zip` 文件。

使用 [Import Matter Archive Tool](https://omnivore.app/tools/import/matter-archive)导入您的事务数据。

要从 Matter 导出数据，请转到“我的帐户”，然后选择“导出”
数据，这将向您发送一封电子邮件，其中包含您的数据在文件中
`Archive.zip`。使用此页面上的上传程序上传该文件。

导入程序将提取 `_matter_history.csv` 文件中列出的 URL。如果存档包含 URL 的 HTML 内容条目，则将使用提供的内容。否则，Omnivore 将尝试重新获取该URL。

:::tip
目前导入器不支持从 Matter 导入荧光笔高亮显示和注释。
:::

## 使用 API 导入

使用 API 导入数据时，如果要导入大量 URL，最好使用 `uploadImportFile` 而不是 `savePage` API。

使用 `uploadImportFile` API 导入的示例可以在此处找到: [https://github.com/omnivore-app/import-demo](https://github.com/omnivore-app/import-demo)

## 导入网址时遇到的问题

导入时，根据数据的格式，Omnivore可能会重新获取网址。无法再在线获取 URL。在这种情况下，应将仅包含 URL 的空条目添加到文库中。
