import { useState, useEffect } from 'react';
import getStories from './getStories';

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
    return setData([]);
  }, [type])

  return data;
}

export default useFetch;