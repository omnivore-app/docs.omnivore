---
title: Setting up your local development environment
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

## Introduction

The easiest way to get started with local development is to use `docker-compose up`. This will start a postgres container, our web frontend, an API server, and our content fetching microservice.

## Requirements for development

Omnivore is written in TypeScript and JavaScript.

- [Node](https://nodejs.org/) -- currently we are using Node.js v14.18
- [Chromium](https://www.chromium.org/chromium-projects/) -- see below for installation info

## Running the web and API services

### 1. Start docker-compose

```bash
git clone https://github.com/omnivore-app/omnivore
cd omnivore
docker-compose up
```

This will start postgres, initialize the database, and start the web and api services.

### 2. Open the browser

Open `http://localhost:3000` and confirm Omnivore is running

### 3. Login with the test account

During database setup docker-compose creates an account `demo@omnivore.app`, password: `demo_password`.

Go to `http://localhost:3000/` in your browser and choose `Continue with Email` to login.

## Frontend Development

If you want to work on just the frontend of Omnivore you can run the backend services
with docker compose and the frontend locally:

```bash
docker-compose up api content-fetch
cd packages/web
cp .env.template .env
yarn dev
```

## Running the puppeteer-parse service outside of Docker

To save pages you need to run the `puppeteer-parse` service.

### 1. Install and configure Chromium

```
brew install chromium --no-quarantine
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export CHROMIUM_PATH=`which chromium`
```

### 2. Navigate to the service directory, setup your env file, and install dependencies

```
cd packages/puppeteer-parse
cp .env.example .env
yarn
```

### 3. Start the service

```
yarn start
```

This will start the puppeteer-parse service on port 9090.

In your browser go to `http://localhost:3000/home`, click the `Add Link` button,
and enter a URL such as `https://blog.omnivore.app/p/getting-started-with-omnivore`.

You should see a Chromium window open and navigate to your link. When the service
is done fetching your content you will see it in your library.
