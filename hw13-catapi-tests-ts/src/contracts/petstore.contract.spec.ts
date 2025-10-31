import { describe, it, expect } from 'vitest';
import axios from 'axios';

const BASE_URL = 'https://petstore.swagger.io/v2';

describe('Petstore API — contract test', () => {
  it('GET /pet/findByStatus returns array of pets with valid schema', async () => {
    const url = BASE_URL + '/pet/findByStatus?status=available';
    const res = await axios.get(url);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);

    const pet = res.data[0];
    if (pet) {
      expect(pet).toHaveProperty('id');
      expect(pet).toHaveProperty('name');
      expect(pet).toHaveProperty('status');
    }
  });
});
