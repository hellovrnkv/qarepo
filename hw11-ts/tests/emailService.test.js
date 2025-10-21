import { describe, it, expect, vi } from 'vitest';
import { sendEmail } from '../src/services/emailService.js';

describe('emailService', () => {
  it('успешная отправка — мок обьекта api.post', async () => {
    const api = { post: vi.fn().mockResolvedValue({ success: true, id: 'm1' }) };
    const res = await sendEmail(api, { to: 'a@b.com', subject: 'Hi', body: 'Test' });
    expect(api.post).toHaveBeenCalledWith('/emails', { to: 'a@b.com', subject: 'Hi', body: 'Test' });
    expect(res).toEqual({ ok: true, id: 'm1' });
  });

  it('ошибка API — мок кидает исключение', async () => {
    const api = { post: vi.fn().mockRejectedValue(new Error('Network')) };
    const res = await sendEmail(api, { to: 'a@b.com', subject: 'Hi', body: 'Test' });
    expect(res.ok).toBe(false);
    expect(res.error).toBe('Network');
  });
});
