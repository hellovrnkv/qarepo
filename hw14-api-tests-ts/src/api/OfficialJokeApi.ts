import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '../utils/env.js'
export class OfficialJokeApi {
  private client: AxiosInstance;

  constructor(baseUrl: string = BASE_URL) {
    // безопасный фоллбек + уберём хвостовой слэш
    const resolved =
      (baseUrl && baseUrl.replace(/\/+$/, '')) || 'http://localhost:3005';

    this.client = axios.create({
      baseURL: resolved,
      headers: { accept: 'application/json' },
      timeout: 10000,
    });
  }

  randomJoke() { return this.client.get('/jokes/random'); }
  randomJokeLegacy() { return this.client.get('/random_joke'); }
  tenJokes() { return this.client.get('/jokes/ten'); }
  tenJokesLegacy() { return this.client.get('/random_ten'); }
  randomMany(n: number) { return this.client.get(`/jokes/random/${n}`); }
  programmingRandom() { return this.client.get('/jokes/programming/random'); }
  programmingTen() { return this.client.get('/jokes/programming/ten'); }
  byId(id: number | string) { return this.client.get(`/jokes/${id}`); }
}
