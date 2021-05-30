import { useState, useEffect } from 'react';
import { getStories } from '../utils/api';

const useFetch = (type) =>  {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStories(type)
      .then((stories) => {
        setData(stories);
    })
      .catch(() => {
        console.log('error');
      })
  }, [])

  return data;
}

export default useFetch;