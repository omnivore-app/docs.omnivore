---
title: RSS and Atom feeds
editLink: true
---

# {{ $frontmatter.title }}

Omnivore supports subscribing to RSS (Really Simple Syndication) and Atom feeds.

:::warning
Feeds are a beta feature, if you have questions or feedback please [join our Discord](https://discord.gg/h2z5rppzz9) and post them in our #feeds-beta channel.
:::

[[toc]]

## Adding Feeds to Omnivore

To add a feed to Omnivore navigate to the [feeds page](https://omnivore.app/settings/feeds) and click the `Add a feed` button in the top right corner and paste the URL to the feed in the `Add new Feed` dialog.

When a feed is first added, Omnivore will fetch the last 24hrs worth of items or at least one item if there are no items posted in the last 24hrs.

By default Omnivore will fetch the entire content of the feed item from the original URL (`Fetch link: Always`). You can change this and choose:

- `Fetch link: Always`: Always fetch the entire content of the feed item from the original URL.
- `Fetch link: Never`: Only see the content shared as part of the feed.
- `Fetch link: When empty`: Only fetch the content from the original URL if the feed item has no content.

## Organizing Feeds

Feeds will be displayed in the left menu of the Library in the subscriptions section, organized by their name. You can also view all your subscriptions on the [Subscriptions page](https://omnivore.app/settings/subscriptions). This page has all your emails/newsletter and feed subscriptions, and can be used to unsubscribe from items.

Each feed item is tagged with the `RSS` label. So you can easily search for all your feed items by clicking on `Feeds` in the left menu under subscriptions or by doing a label search `label:RSS`.
