export default {
  require: ['ts-node/register'],
  extension: ['ts'],
  spec: ['hw11-ts/mocha/**/*.spec.ts'],
  loader: 'ts-node/esm',
  color: true
};