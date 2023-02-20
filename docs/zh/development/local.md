---
title: 本地环境
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

## 简介

开始本地开发的最简单方法是使用 `docker-compose up`。这将启动一个 postgres 容器，我们的Web前端，一个API服务器，以及我们的内容获取微服务。

## 开发要求

Omnivore 是用 TypeScript 和 JavaScript 编写的。

- [Node](https://nodejs.org/) -- 目前我们正在使用 Node.js v14.18
- [Chromium](https://www.chromium.org/chromium-projects/) -- 有关安装信息，请参见下文

## 运行 Web 和 API 服务

### 1. 启动 docker-compose

```bash
git clone https://github.com/omnivore-app/omnivore
cd omnivore
docker-compose up
```

这将启动 postgres，初始化数据库，并启动 Web 和 api 服务。

### 2. 打开浏览器

转到 `http://localhost:3000` 并确认 Omnivore 正在运行

### 3. 创建测试帐户

Omnivore 使用社交登录，但为了测试，有一个电子邮件 + 密码 选择。

转到 `http://localhost:3000/auth/email-signup` 在您的浏览器中。

## 前端开发

如果你只想在 Omnivore 的前端工作，你可以运行后端
使用 docker compose 和本地前端:

```bash
docker-compose up api content-fetch
cd packages/web
cp .env.template .env
yarn dev
```

## 在 Docker 外部运行 puppeteer-parse 服务

要保存页面，您需要运行 `puppeteer-parse` 服务。

### 1. 安装和配置 Chromium

```
brew install chromium --no-quarantine
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export CHROMIUM_PATH=`which chromium`
```

### 2. 导航到服务目录，设置你的 env 文件并安装依赖项

```
cd packages/puppeteer-parse
cp .env.example .env
yarn
```

### 3. 启动服务

```
yarn start
```

这将在端口 9090 上启动 puppeteer-parse 服务.

在浏览器中转到 `http://localhost:3000/home`，单击 `Add Link` 按钮，
然后输入网址，例如 `https://blog.omnivore.app/p/getting-started-with-omnivore`.

您应该会看到一个 Chromium 窗口打开并导航到您的链接。当服务完成获取内容后，您将在文库中看到它。
