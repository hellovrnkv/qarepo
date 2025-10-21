export function sum(a, b) {
  return Number(a) + Number(b);
}

export function applyTax(amount, rate = 0) {
  if (typeof amount !== 'number' || typeof rate !== 'number') {
    throw new TypeError('amount and rate must be numbers');
  }
  return +(amount * (1 + rate)).toFixed(2);
}

export function getUserFullName(user) {
  const first = user?.firstName ?? '';
  const last = user?.lastName ?? '';
  return `${first} ${last}`.trim();
}
export async function fetchProducts(api) {
  if (!api || typeof api.get !== 'function') {
    throw new TypeError('api with get() is required');
  }
  const res = await api.get('/products');
  return Array.isArray(res?.data) ? res.data : [];
}

export function formatPrice(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}
