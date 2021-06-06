import axios from 'axios';
import { BASE_API_URL } from './constants';
import getStory from './getStory';

const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories');
  }
}

export default getStories;