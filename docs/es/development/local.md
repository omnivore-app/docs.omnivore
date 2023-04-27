---
title: Configuración de su entorno de desarrollo local
editLink: true
---

# {{ $frontmatter.title }}

[[toc]]

## Introducción

La forma más fácil de comenzar con el desarrollo local es usar `docker-compose up`. Esto iniciará un contenedor de Postgres, nuestra interfaz web, un servidor API y nuestro microservicio de obtención de contenido.

## Requisitos para el desarrollo

Omnívore está escrito en TypeScript y JavaScript.

- [Node](https://nodejs.org/) -- actualmente estamos usando Node.js v14.18
- [Chromium](https://www.chromium.org/chromium-projects/) -- ver abajo para información de instalación

## Ejecución de los servicios web y API

### 1. Inicie docker-compose

```bash
git clone https://github.com/omnivore-app/omnivore
cd omnivore
docker-compose up
```

Esto iniciará Postgres, inicializará la base de datos e iniciará los servicios web y API.

### 2. Abra el navegador

Abra `http://localhost:3000` y confirme que Omnivore se está ejecutando

### 3. Cree una cuenta de prueba

Omnivore usa inicio de sesión social, pero para probar hay un correo electrónico + contraseña opcional.

Vaya a `http://localhost:3000/auth/email-signup` en su navegador.

## Desarrollo Frontend

Si desea trabajar solo en la interfaz de Omnivore, puede ejecutar los servicios de backend con docker compose y la interfaz localmente:

```bash
docker-compose up api content-fetch
cd packages/web
cp .env.template .env
yarn dev
```

## Ejecutando el servicio puppeteer-parse fuera de Docker

Para guardar páginas, debe ejecutar el servicio `puppeteer-parse`.

### 1. Instale y configure Chromium

```
brew install chromium --no-quarantine
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export CHROMIUM_PATH=`which chromium`
```

### 2. Navegue hasta el directorio de servicios, configure su archivo env e instale las dependencias

```
cd packages/puppeteer-parse
cp .env.example .env
yarn
```

### 3. Inicie el servicio

```
yarn start
```

Esto iniciará el servicio puppeteer-parse en el puerto 9090.

En su navegador vaya a `http://localhost:3000/home`, haga clic en el botón `Add Link`,
e ingrese una URL como `https://blog.omnivore.app/p/getting-started-with-omnivore`.

Debería ver una ventana de Chromium abierta y navegar hasta su enlace. Cuando el servicio termine de buscar su contenido, lo verá en su biblioteca.
