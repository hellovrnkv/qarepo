export async function sendEmail(api, { to, subject, body }) {
  if (!api || typeof api.post !== 'function') {
    throw new TypeError('api with post() is required');
  }
  if (!to || !subject) {
    return { ok: false, error: 'Missing fields' };
  }
  try {
    const res = await api.post('/emails', { to, subject, body });
    return { ok: !!res?.success, id: res?.id ?? null };
  } catch (e) {
    return { ok: false, error: e?.message || 'Unknown error' };
  }
}
