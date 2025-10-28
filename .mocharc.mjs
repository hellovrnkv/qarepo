// .mocharc.mjs
export default {
  // передаём Node опцию, чтобы он загружал TS/ESM через tsx
  'node-option': ['loader=tsx'],

  // расширения тестов
  extension: ['ts'],

  // где лежат спеки mocha для HW10
  spec: ['hw10-ts/mocha/**/*.spec.ts'],

  // чтобы mocha правильно «видела» TS-импорты без пересборки
  'watch-files': ['hw9-ts/src/**/*.ts', 'hw10-ts/mocha/**/*.spec.ts'],

  color: true,
};
