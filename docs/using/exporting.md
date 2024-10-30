---
title: Exporting your data
editLink: true
---

# {{ $frontmatter.title }}

The best way to export your data is to use the Obsidian client to sync all of your data into an Obsidian vault. If you are not familiar with Obsidian you can use our exporter tool to export all of your links, highlights, and saved page content.

[[toc]]

## Exporting with the exporter tool

To use the exporter tool you will need to login to your account online at [https://omnivore.app/login](https://omnivore.app/login). Once you have done this, navigate to your account page by opening the menu and clicking on your user name. You can access the page directly [here](https://omnivore.app/settings/account).

On the account page click the `Export Data` button. This will gather all of your saved links, their page content, and your highlights into a single zip file. This can take some time depending on your account size, but you should receive an email once the process has started. Usually within 30 minutes of clicking the Export button. The entire process can take about 1hr per-1000 saved items.

Once completed, you will receive an export link in your email. This link is valid for 24hrs and can be used to download all your data.

### Export archives

The archive will contain a few items:

1. `./contents/*.html`: this is all of the content of your saved pages
2. `./highlights/*.md`: this is all of your highlights saved in markdown format. The slug attribute from your metadata is used as the filename.
3. `metadata_*.json`: Metadata files for all your saved items. These are provided in batches of 20 items. So items 0-20, 20-40, etc.

### Converting exported data to CSV

You can use the `jq` tool to convert the JSON files to CSV:

To create a single column CSV with all your urls, in the directory with your json files:

```
jq -r '.[].url' *.json
```

To create a CSV that also contains your labels, you can use this command:

```
jq -r '[.[] | {url: .url, labels: (.labels | join(","))} | "\(.url),\"\(.labels)\""] | @csv' *.json
```
