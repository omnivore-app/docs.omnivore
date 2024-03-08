---
title: Using your email Inbox
editLink: true
---

# {{ $frontmatter.title }}

Omnivore allows you to create email inboxes which can be used for

[[toc]]

An Omnivore email address will receive email, detect whether the email is a PDF document or newsletter, and add the content to your library.

## Receiving Newsletter Subscriptions via Email

1. On the Omnivore website or app, tap your photo, initial, or avatar in the top right corner to access the profile menu. Select Emails from the menu.

2. Tap Create a New Email Address to add a new email address (e.g. username-123abc@inbox.omnivore.app) to the list.

3. Click the Copy icon next to the email address.

4. Navigate to the signup page for the newsletter you wish to subscribe to.

5. Paste the Omnivore email address into the signup form.

6. New newsletters will be automatically delivered to your Omnivore inbox.

::: tip If Omnivore receives an email that does not look like an article, such as a welcome message, or note from the author, it will be forwarded to your Omnivore account email address (the email you registered with). If this does not happen and you have difficulty with confirmation, see below, "Incorrect URLs in confirmation emails".
:::

## Sending PDFs to your Omnivore Email Address

Add PDFs to your Omnivore library by sending them to your Omnivore email address. If there is a subject line in the email, it will be used as the title of the PDF. If there is no subject line, the filename will be used as the title.

::: tip Only a single PDF attachment can be handled at a time. If you would like to save multiple PDFs to your library, send each one in a separate email.
:::

## Creating articles in your library

To create an article in your library, send an email to your inbox address and add `OMNIVORE:` as the prefix to your email subject. For example `OMNIVORE: Ten tips for Using Omnivore`. The content of your email will be added to your library, and the subject suffix will be used as the library item title.

## Debugging issues with your email inbox

![Screenshot of recent emails](./images/web-recent-emails-01.png)

### If you don't receive an email

Omnivore keeps a list of your recently received emails, no matter how they are classified. These are available on the [settings/emails/recent](https://omnivore.app/settings/emails/recent) page.

### Incorrect URLs in confirmation emals

When you sign up for some services to send emails to Omnivore (most notably, setting up forwarding from Gmail), you will receive a confirmation mail that will be sent to your omnivore account, asking you to copy and paste a url to confirm. In some cases, copying and pasting this url will result in a "Not Found" page, because Omnivore is rendering the link as markdown and thus rewriting it. To solve this, go to [your recent emails page](https://omnivore.app/settings/emails/recent), find the confirmation mail in the list, click on the three dots next to it, and select `View Text`. This will bring up a plain text version of the mail, from which the correct url can be copied.

### Moving the email to your library

If an email was not correctly classified as an article, you can manually move it into your library. On the recent emails page, find the email, click the menu button and select `Mark as article`. This will change the article's classification to `article` and move the item into your library.
