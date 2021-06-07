import getStories from '../getStories';
import getStoriesIds from '../getStoriesIds';
import getStory from '../getStory';

jest.mock('axios');
jest.mock('../getStoriesIds');
jest.mock('../getStory');

describe('test API', () => {

  beforeEach(() => {
    getStoriesIds.mockReturnValueOnce([1, 2, 3, 4, 5]);
    getStory.mockReturnValue(
      {
        data: {
          id: 1
        }
      }
    );
  });

  it('tests the API', async () => {
    const stories = await getStories('top').then((data) => {
      expect(data).toHaveLength(5);
    });
  })
});
