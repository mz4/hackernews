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


// const mockedUsers = [{ userId: 1 }];
// axios.get = jest.fn().mockResolvedValue(mockedUsers);
// const actualValue = await getUserDataByIds(['1']);
// expect(actualValue).toEqual(mockedUsers);
// expect(axios.get).toBeCalledWith('/users');