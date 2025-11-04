# HW14 — TypeScript API tests (Vitest + Axios)

Фреймворк: **Vitest**, запити — **Axios**, патерн **API Objects** (клас `OfficialJokeApi`).  
Покриття: ендпоінти Official Joke API (локально з hw12). Необхідні 5 тестів — включені.

## Вимоги
- Node.js 18+
- Запущений локально Official Joke API (`npm i && npm run dev` в його репозиторії)
- `.env` (можна не створювати, дефолт: `BASE_URL=http://localhost:3005`)

## Встановлення
```bash
npm install
```

## Запуск тестів
```bash
npm test
```
або UI:
```bash
npm run test:ui
```

## Налаштування
- Змінити базову адресу можна через `.env`:
```
BASE_URL=http://localhost:3005
```

## Структура
```
src/
  api/OfficialJokeApi.ts     # API Object
  tests/jokes.spec.ts        # 5 тестів
  utils/env.ts               # завантаження BASE_URL
```
