import axios from 'axios';
import { BASE_API_URL } from './constants';

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting story');    
  }
}

export default getStory;