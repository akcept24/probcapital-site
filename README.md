# ProbCapital — маркетинговый сайт

Лендинг на **React + Vite + Tailwind CSS v4**. Деплой: **Vercel** (`vercel.json`).

| | |
|--|--|
| **Репозиторий** | `git@github.com:akcept24/probcapital-site.git` |
| **Первый push** | [GITHUB_SETUP.md](./GITHUB_SETUP.md) |

## Быстрый старт

```bash
npm install
npm run dev
npm run build
```

С Bun: `bun install && bun dev`.

## Структура

- `src/web/` — приложение (страницы, компоненты, i18n, стили)
- `public/` — статика (логотип, og-image, favicon)
- `vite.config.ts`, `index.html` — точка входа Vite

## Ссылки на дашборд (`VITE_APP_URL`)

Кнопки ведут на Next.js-приложение (логин, регистрация, тарифы и т.д.). В `.env` или в Vercel задайте:

```bash
VITE_APP_URL=https://app.probcapital.com
```

Подробнее в `.env.example`.

## Tailwind v4

Конфигурация через `@theme` в `src/web/styles.css` и плагин `@tailwindcss/vite`. Не используйте синтаксис Tailwind v3 (`tailwind.config.js` с `@tailwind`).
