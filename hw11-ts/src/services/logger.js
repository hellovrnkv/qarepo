export const logger = {
  info(msg) {
    console.log(`[INFO] ${msg}`);
    return `[INFO] ${msg}`;
  },
  error(msg) {
    console.error(`[ERROR] ${msg}`);
    return `[ERROR] ${msg}`;
  }
};
