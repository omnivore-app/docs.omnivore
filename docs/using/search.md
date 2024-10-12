---
title: Search
editLink: true
---

# {{ $frontmatter.title }}

Omnivore uses search to filter items in your library. You can use a simple keyword search or our advanced search syntax to find items.

[[toc]]

## Searching for text

Omnivore will perform full text search across library items' content, title, description, and site. By default, we look at undeleted and unarchived items, you can change this behavior by using operands like `in:all`, `in:archive` or `in:trash`. You can search for specific terms by quoting your terms (i.e. wrapping them in quotes). By default all results that match your search will be returned in the order they were saved. To change your search to sort by relevance use the `sort:score` parameter.

## Filtering by label

You can filter your search based on labels using AND and OR clauses. You can also negate a label search to find pages that do not have a certain label. Labels are case sensitive.

Some examples:

- `label:Newsletter`: Finds all pages that have the label **Newsletter**
- `label:Cooking,Fitness`: Finds all pages with either the **Cooking** or **Fitness** labels
- `label:Newsletter label:Surfing`: Finds all pages with both the **Newsletter** and **Surfing** labels
- `label:Coding -label:News`: Finds all pages with the **Coding** label that do not have the **News** label
- `label:"Send to Obsidian"`: Finds all pages with the multi-word label **Send to Obsidian**
- `no:label`: Finds all pages that have **no** labels assigned.

## Filtering by Archive Status

The in: filter is used to filter search results by their archive status.

Available options:

- `in:inbox` (the default selected option): Show unarchived items.
- `in:archive`: Show archived items.
- `in:all`: Show all items regardless of archive state.

## Filtering by Item Type

The search supports filtering by the type of item.

Available options:

`in:following`: Show feed and newsletter items  
`in:library`: Show non-feed items 

## Filtering for deleted items

To find the items you have removed or deleted, you can use the « Deleted » built-in filter on the mobile app or search with the `in:trash` option on the web. Items older than 2 weeks in the trash will be permanently deleted (in the current implementation they are simply not visible anymore).

## Filtering by read state

The `is:` filter is used to filter search by read state. Note that in Omnivore 'read' means fully read, not just opened.

The `is:` filter options are:

- `is:read`: Show only items that are fully read
- `is:unread`: (the default selected option) Show unread items

## Filtering by read position

The `readPosition:` filter can be used to filter your search results based on how much of an item you have read.

- `readPosition:>30`: Show items where you have **read more than 30%** of the total content.
- `readPosition:<60`: Show items where you have **read less than 60%** of the total content.

For example, `readPosition:>30` will show articles where you have scrolled past 30% of the content. `readPosition:<60` will show articles where you haven't reached 60% of the content yet.

## Filtering by word count

The `wordsCount:` filter is used to filter search by how much words an item has.

For example:

- `wordsCount:>50`: Show items that have more than 50 words
- `wordsCount:<100`: Show items that have less than 100 words

This filter can help you filtering out paywalled content as well.

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

- `saved:2022-04-21..*`: All items saved since 2022-04-21
- `published:2020-01-01..2022-02-02`: All items published between 2020-01-01 and 2022-02-02
- `published:*..2020-01-01`: All items published before 2020-01-01

## Filtering by language

You can filter your searches based on the language of the article using the `language:` filter.

For example:

- `language:italian`: Displays only articles in Italian

## Filtering by site

You can filter your searches based on the website they come from using the `site:` filter.

For example:

- `site:theverge.com`: Displays only articles that come from The Verge

## Sorting

By default all search results in Omnivore are sorted by saved date. This puts the most recently saved items at the top of your library. You can use sort options to change the library order:

- `sort:saved`: Sort by saved date
- `sort:updated`: Sort by time the item was updated, for example having a label or highlight added
- `sort:score`: Sort by query term relevance
- `sort:wordsCount`: Sort by reading time

Additionally, you can change the sort order by apending either `-asc` or `-des` to the sort parameter to sort by ascending or descending order respectively:

- `sort:saved-asc`: Sort by saved date in Ascending order (oldest to newest saved date)
- `sort:updated-des`: Sort by time the item was updated, in descending order (newest to oldest)
