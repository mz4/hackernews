import axios from 'axios';
import getStories from '../getStories';

jest.mock('axios');

describe('test API', () => {

  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      data: [111, 222, 333, 444, 555]
    });

    Promise.all = () => {
      return {}
    };

  });

  it('tests the API', async () => {
    const stories = await getStories('top');
    expect(stories).toEqual({});
    expect(axios.get).toHaveBeenCalledTimes(6);
    expect(axios.get).toBeCalledWith('https://hacker-news.firebaseio.com/v0/topstories.json');
  })
})