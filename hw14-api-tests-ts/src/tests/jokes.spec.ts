import { OfficialJokeApi } from '../api/OfficialJokeApi';

const api = new OfficialJokeApi();

describe('Official Joke API — smoke', () => {
  test('GET /jokes/random returns an object with required fields', async () => {
    const res = await api.randomJoke();
    expect(res.status).toBe(200);
    const j = res.data;
    expect(typeof j).toBe('object');
    expect(j).toHaveProperty('id');
    expect(j).toHaveProperty('type');
    expect(typeof j.setup).toBe('string');
    expect(j.setup.length).toBeGreaterThan(0);
    expect(typeof j.punchline).toBe('string');
    expect(j.punchline.length).toBeGreaterThan(0);
  });

  test('GET /jokes/ten returns an array of 10 jokes', async () => {
    const res = await api.tenJokes();
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data.length).toBe(10);
  });

  test('GET /jokes/random/5 returns array of 5', async () => {
    const res = await api.randomMany(5);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data.length).toBe(5);
  });

  test('GET /jokes/programming/random returns programming joke (array or object)', async () => {
    const res = await api.programmingRandom();
    expect(res.status).toBe(200);
    const body = res.data;
    const item = Array.isArray(body) ? body[0] : body;
    expect(item).toHaveProperty('type');
    expect(item.type).toBe('programming');
    expect(item).toHaveProperty('setup');
    expect(item).toHaveProperty('punchline');
  });

  test('GET /jokes/1 returns a joke object with id', async () => {
    const res = await api.byId(1);
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('id');
  });
});
