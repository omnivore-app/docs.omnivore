---
title: Saving to your Omnivore Library
editLink: true
---

# {{ $frontmatter.title }}

There are five ways to save links to pages or articles that you wish to read later:

[[toc]]

## Saving from Your Omnivore Library

1. In the upper right corner of your Library, tap the Add Link button.
2. Enter the URL you wish to save and tap Add Link.
3. The link will appear in your Library the next time you refresh it.

## Saving from a Browser

1. Download and install the Omnivore extension for your browser ([Chrome](https://omnivore.app/install/chrome), [Edge](https://omnivore.app/install/edge), [Firefox](https://omnivore.app/install/firefox), [Safari](https://omnivore.app/install/safari)).

2. Navigate to the page you wish to save and tap the Omnivore button in your browser’s toolbar or Extensions menu.
3. Alternatively, you can right-click (command+click on Mac) on any hyperlink and select Save to Omnivore from the menu.
4. The link will appear in your Library the next time you refresh it.

### Authentication Issues

The browser extension uses the same authentication cookie as the omnivore.app site. Some browser security configurations might prevent the extension from accessing this cookie. When this happens saving requests will fail, and you might be asked to login again. This is common with more secure browser setups, such as Firefox tab containers.

To work around this you can authenticate with an API key set in the extension preferences, instead of with the site's authentication cookie. First create an API key at https://omnivore.app/settings/api then go into the extension preferences (sometimes called options), and add the API key.

Here is a quick demo video

<div style="position: relative; padding-bottom: 64.5933014354067%; height: 0;"><iframe src="https://www.loom.com/embed/dd3420464fdf49ffa1811601cace57ec?sid=ca629aff-8dd4-48ae-8dae-05118ac53f81" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Using a bookmarklet

Some security policies prevent users from installing browser extensions. If you are unable to use a browser extension you can install a bookmarklet to save from your browser. The bookmarklet is unable to access the content of the page you are saving, so for content that can not be accessed via URL, like paywalled content, the bookmarklet will give poor results.

You can use the following code to create a bookmarklet that saves to Omnivore:

```js
javascript:void(open('https://omnivore.app/api/save?url='+encodeURIComponent(location.href),'Omnivore'))
```

Or drag the Save to Omnivore link below into your bookmark manager:

<a href="javascript:void(open('https://omnivore.app/api/save?url='+encodeURIComponent(location.href),'Omnivore'))">Save to Omnivore</a>

## Saving from a Phone or Tablet

The best way to save links from your mobile device is via the Omnivore app. You can download the app here:

- [iOS (iPhone or iPad)](https://omnivore.app/install/ios)
- [Android (Currently in pre-release)](https://omnivore.app/install/android)

Once the mobile app is installed:

- In your browser, navigate to the page you wish to save and tap the Share button.
- Tap the Omnivore icon in the Share menu.
- The link will appear in your Library the next time you refresh it.

## Newsletter Subscriptions via Email

- On the Omnivore website or app, tap your photo, initial, or avatar in the top right corner to access the profile menu. Select Emails from the menu.
- Tap Create a New Email Address to add a new email address (e.g. username-123abc@inbox.omnivore.app) to the list.
- Click the Copy icon next to the email address.
- Navigate to the signup page for the newsletter you wish to subscribe to.
- Paste the Omnivore email address into the signup form.
- New newsletters will be automatically delivered to your Omnivore inbox.

::: tip If Omnivore receives an email that does not look like an article, such as a welcome message or note from the author, it will be forwarded to your Omnivore account email address (the email you registered with).
:::

## Saving PDFs from a Mac

- Install the [Mac App](https://omnivore.app/install/mac).
- On your Mac, locate the PDF you wish to save and right-click or command+click on the file name.
- Select Share from the menu and choose Omnivore.

The link will appear in your Library the next time you refresh it.

## Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/HfQxQPT5-tU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
