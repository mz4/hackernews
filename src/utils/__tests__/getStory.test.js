import axios from 'axios';
import getStory from '../getStory';

jest.mock('axios');

describe('test API', () => {

  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      data: { "by":"nkcmr","descendants":56,"id":27415537 }
    });
  });

  it('tests the API', async () => {
    const story = await getStory(75554);
    expect(story).toEqual({"data": {"by": "nkcmr", "descendants": 56, "id": 27415537}});
    expect(axios.get).toBeCalledWith('https://hacker-news.firebaseio.com/v0/item/75554.json');
  })
})
