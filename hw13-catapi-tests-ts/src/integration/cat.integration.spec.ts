import { Cat } from '../api/cat.client.js';

describe('TheCatAPI integration — images → votes → favourites', () => {
  let imageId = '';
  let voteId: number | undefined;
  let favId:  number | undefined;

  it('gets image', async () => {
    const img = await Cat.searchImage();
    imageId = img.id;
    expect(imageId).toBeTruthy();
  });

  it('creates vote', async () => {
    const v = await Cat.createVote(imageId);
    voteId = v.id;
    expect(voteId!).toBeGreaterThan(0);
  });

  it('vote visible in list', async () => {
    const votes = await Cat.getVotes();
    expect(votes.some(x => x.id === voteId && x.image_id === imageId && x.value === 1)).toBe(true);
  });

  it('adds favourite', async () => {
    const f = await Cat.createFav(imageId);
    favId = f.id;
    expect(favId!).toBeGreaterThan(0);
  });

  it('favourite visible in list', async () => {
    const favs = await Cat.getFavs();
    expect(favs.some(x => x.id === favId && x.image_id === imageId)).toBe(true);
  });

  afterAll(async () => {
    if (voteId) await Cat.delVote(voteId);
    if (favId)  await Cat.delFav(favId);
  });
});
