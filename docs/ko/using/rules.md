---
title: Rules
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

## Introduction

::: warning Rules are a beta feature and are currently only available on the web. Rules syntax might change in the future and break backwards compatibilty
:::

Behind the scenes, Omnivore uses a rules engine to implement higher level features. Rules are applied when an article is created or modified.

A rule is a combination of a search filter, and a set of actions. When a page matches the search filter, the actions will be applied. For example:

- `subscription:"Money Talk"` -> `Add Label('Finance')`: This rule adds the Finance label to all pages that come from the `Money Talk` subscription.

![Screenshot of Rules](./images/web-rules-001.png)

## Creating Rules

Currently, rules can only be created on the [/settings/rules](https://omnivore.app/settings/rules) page. To create a new rule:

- Tap the `Create a new Rule` button on the top right
- Enter a search filter. Use the [search](./search.md) reference for more info
- Select the actions you would like applied when the rule matches

## The Event Object

Search filters for rules are slightly different than regular search filters. Along with all the regular [advanced search](./search.md) functionality, rules have an event object. The event object allows you to create rules that match certain events.

- `event.created`: The rule will only be matched when the page is first saved
- `event.updated`: The rule will be triggered when any part of a page's properties are modified. For example a label being added, the title being changed, or the read position being updated.

## Actions

- `Add Label`: Adds a set of labels to an article
- `Send Notification`: Sends a push notification to registered iOS devices
- `Archive`: Archives an article

## Some ideas for rules

- `is:read` -> `Archive()`: Automatically archive an article once fully read
- `Text word` -> `Add Label('some label')`: Automatically add a label to a page if it contains a specific word. For example `Vancouver Canucks` -> `Add Label('Hockey')`
- `event.created label:Newsletter` -> `Send Notification()`: Send a push notification every time a newsletter issue is delivered.
