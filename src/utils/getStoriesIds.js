import axios from 'axios';
import { BASE_API_URL } from './constants';

const getStoriesIds = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    return storyIds;
  } catch (error) {
    console.log('Error while getting list of stories');
  }
}

export default getStoriesIds;
