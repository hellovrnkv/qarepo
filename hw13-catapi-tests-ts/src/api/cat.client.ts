import axios from 'axios';
import { CAT_BASE_URL, CAT_API_KEY, SUB_ID } from '../utils/env.js';

export const api = axios.create({
  baseURL: CAT_BASE_URL,
  headers: { 'x-api-key': CAT_API_KEY, 'accept': 'application/json' },
  timeout: 10000
});

export const Cat = {
  async searchImage() {
    const { data } = await api.get('/images/search', { params: { limit: 1, size: 'small' } });
    return data[0]; // { id, url, ... }
  },
  async createVote(image_id: string) {
    const { data } = await api.post('/votes', { image_id, value: 1, sub_id: SUB_ID });
    return data as { id: number; message: string };
  },
  async getVotes() {
    const { data } = await api.get('/votes', { params: { sub_id: SUB_ID, limit: 10 } });
    return data as Array<{ id:number; image_id:string; value:number }>;
  },
  async createFav(image_id: string) {
    const { data } = await api.post('/favourites', { image_id, sub_id: SUB_ID });
    return data as { id: number; message: string };
  },
  async getFavs() {
    const { data } = await api.get('/favourites', { params: { sub_id: SUB_ID, limit: 10 } });
    return data as Array<{ id:number; image_id:string }>;
  },
  delVote(id:number) { return api.delete(`/votes/${id}`); },
  delFav(id:number)  { return api.delete(`/favourites/${id}`); }
};
