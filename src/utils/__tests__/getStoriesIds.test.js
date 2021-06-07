import axios from 'axios';
import getStoriesIds from '../getStoriesIds';

jest.mock('axios');

describe('test API', () => {

  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      data: [111, 222, 333, 444, 555]
    });
  });

  it('tests the API', async () => {
    await getStoriesIds('top').then((data) => {
      expect(data).toEqual([111, 222, 333, 444, 555]);
    });
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith('https://hacker-news.firebaseio.com/v0/topstories.json');
  })
});
