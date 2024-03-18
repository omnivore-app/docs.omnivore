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

To add a feed to Omnivore, navigate to the [feeds page](https://omnivore.app/settings/feeds), click the `Add Feed` button in the top right corner, and paste the URL of the feed into the Add Feed dialog.
When a feed is first added, Omnivore will fetch the last 24 hours' worth of items, or at least one item if no items have been posted in the last 24 hours.

## What is an RSS feed? How about an Atom feed?

RSS stands for Really Simple Syndication. It is a data format that allows applications and users to receive information from a website in a standardized, computer-readable format. The information is received as an XML file, which is automatically and constantly updated. This data is cached by an RSS feed reader, like Omnivore, that converts the XML files and presents them in an easy-to-read format for humans.
An Atom feed is similar to an RSS one, with the exceptions that Atom feeds can have more information (like unique identifiers to contain characters outside the US [ASCII](https://en.wikipedia.org/wiki/ASCII) character set), are modular (meaning elements can be reused outside the Atom feed), and use a different date format.

## How do I find an RSS feed for a website or blog?
There are a few options for finding an RSS feed and saving it into Omnivore.

### Option 1: The website has an RSS feed icon

The easiest way is to find the RSS symbol on the selected website, right-click on it to copy the link, and then save the URL.
In most cases, the URL will look something like `https://example-site/feed.rss` or `https://example-site/index.xml`.
The default place of the RSS symbol is on the website header or footer, close to the other social channel icons, but some sites will put it in different places.

### Option 2: The website doesn’t have an RSS feed icon

- If a site is hosted on WordPress, simply add `feed` to the end of the URL; for example, `https://example-site.com/feed`.
- If a site is hosted on Tumblr, add `/rss` to the end of the URL. Like this:  `https://example.tumblr.com/rss`.
- If a site is hosted on Blogger, add `feeds/posts/default` to the end of the URL. Like this:  `https://example.blogspot.com/feeds/posts/default`.
- If a publication is hosted on Medium, add `/feed/` before the publication's name. So  `medium.com/example-site` becomes `medium.com/feed/example-site`.
- If a publication is hosted on SubStack, add `/feed` to the end of the URL. Like this: `https://example-site.substack.com/feed`.
- To find the RSS feed of a YouTube channel, first, you need to go to that channel's home page. Once you're there, you need to right-click and View Page source. Use CMD+F / CTRL+F to look for "RSS" in the page source. It should look something like `https://www.youtube.com/feeds/videos.xml?channel_id=UC890`.
Many sites will have the feed URL visible in the source like this. Often, you can right-click on the page, choose Page Source, use CMD+F / CTRL+F, then search for “RSS” or “Atom”.

### Option 3: Use a RSS feed discovery tool

Another option is to use a feed discovery tool. They can auto-detect the feeds of the page you are reading, and allow you to preview and subscribe.
For Firefox users the [RSS Preview](https://addons.mozilla.org/en-US/firefox/addon/feed-preview/) add-on is the easiest solution. On Chrome, the [RSS Finder](https://chrome.google.com/webstore/detail/rss-finder/ijdgeedipkpmcliidjhbemmlgibfnaff/related?hl=en-US) add-on will show the RSS feed if the page are you on has one.
If you don’t want to install an add-on, [Thirdplace Discovery](https://discovery.thirdplace.no/) lets you input a URL and will provide the RSS feed of it.

### Extras

- On Mastodon, you can follow hashtags through RSS. First, you need to search for a hashtag on a Mastodon server's website, and then add `.rss` at the end of the URL. So, for example, if the search for the hashtag “startrek” is `https://mastodon.social/tags/startrek`, so the RSS feed URL would be `https://mastodon.social/tags/startrek.rss`.Then copy and paste it into Omnivore.
- On Bluesky, every account has an RSS feed embedded in their profile. To find it, go to the Bluesky website, search for the profile you want to follow and copy the link to the profile. Then copy and paste it into Omnivore. You can find more information related to the feed limitations, [here](https://openrss.org/blog/bluesky-has-launched-rss-feeds).

## Organizing Feeds

Feeds will be displayed in the left menu of the Library in the subscriptions section, organized by their name. You can also view all your subscriptions on the [subscriptions page](https://omnivore.app/settings/subscriptions). This page has all of your newsletter and feed subscriptions and can be used to unsubscribe from items.
Each feed item is tagged automatically with the `RSS` label. So you can easily search for all your feed items by clicking on `Feeds` in the left menu under subscriptions, or by doing a label search for `label:RSS`.

## Feeds Updates

Every feed displays a Last Refreshed time and the Most Recent item fetched. Also, you can set the fetching frequency. Using the Fetch link dropdown menu you can choose between Always, Never, or When empty.

<img width="942" alt="Screenshot 2024-03-18 at 2 09 31 PM" src="https://github.com/omnivore-app/docs.omnivore/assets/135056739/69d09375-d74f-4af0-afb2-5e8b413bf3f1">


