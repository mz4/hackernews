import getStoriesIds from './getStoriesIds';
import getStory from './getStory';

const getStories = async (type) => {
  const storyIds = await getStoriesIds(type);
  const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
  return stories;
}

export default getStories;

  
