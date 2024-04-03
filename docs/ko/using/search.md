---
title: Search
editLink: true
---

# {{ $frontmatter.title }}

Omnivore uses search to filter items in your library. You can use a simple keyword search or our advanced search syntax to find items.

[[toc]]

## Searching for text

Omnivore will perform full text search across library item's content, title, description, and site by default. You can search for specific terms by quoting your terms (i.e. wrapping them in quotes). By default all results that match your search will be returned in the order they were saved. To change your search to relevance use the `sort:score` parameter.

## Filtering by label

You can filter your search based on labels using AND and OR clauses. You can also negate a label search to find pages that do not have a certain label.

Some examples:

- `label:Newsletter` Finds all pages that have the label Newsletter
- `label:Cooking,Fitness` Finds all pages with either the Cooking or Fitness labels
- `label:Newsletter label:Surfing` Finds all pages with both the Newsletter and Surfing labels
- `label:Coding -label:News` Finds all pages with the Coding label that do not have the News label

## Filtering by archive status

The `in:` filter is used to filter search by archive status. 

The options are:

- `in:inbox` (the default selected option) Show unarchived items
- `in:archive:` Show archived items
- `in:all:` Show all items regardless of archive state

## Filtering by read state

The `is:` filter is used to filter search by read state. Note that in Omnivore 'read' means fully read, not just opened.

The `is:` filter options are:

- `is:read`: Show only items that are fully read
- `is:reading`: Show only items that are currently being read
- `is:unread`: (the default selected option) Show unread items

## Filtering by type

The `type:` filter is used to filter search by type.

- `type:article`: Show only articles
- `type:file`: Show only files
- `type:pdf`: Show only PDFs
- `type:highlights`: Show your highlights

## Finding highlights

You can find your highlights by using the `type:highlights` filter or find saved items with highlights using the `has:highlights` filter.

## Filtering by save/publish dates

You can filter your searches based on the time they were saved or published using the `saved:` and `published:` filters. These filters take two dates to create a date range. The `*` wildcard will accept any date.

For Example:

- `saved:2022-04-21..*` All items saved since 2022-04-21
- `published:2020-01-01..2022-02-02` All items published between 2020-01-01 and 2022-02-02
- `published:*..2020-01-01` All items published before 2020-01-01

## Sorting

By default all search results in Omnivore are sorted by saved date. This puts the most recently saved items at the top of your library. You can use sort options to change the library order:

- `sort:saved`: Sort by saved date
- `sort:updated`: Sort by time the item was updated, for example having a label or highlight added
- `sort:score`: Sort by query term relevance
