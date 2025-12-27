# Playwright TypeScript Test Framework (FOPHelp)

## Target resource
https://new.fophelp.pro

## Tech stack
- TypeScript
- Playwright Test
- API testing
- E2E UI testing
- HTML Reporter
- GitHub Actions CI
- Docker

## Project structure
- tests/api – API tests
- tests/e2e – UI E2E tests

## Run tests locally
npm install
npx playwright test

## View HTML report
npx playwright show-report

## Run tests in Docker
docker build -t playwright-fophelp .
docker run --rm playwright-fophelp
