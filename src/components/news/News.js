import React from 'react';
import Details from '../details/Details';
import useFetch from '../../utils/useFetch';
import Loader from '../../utils/loader';

const News = ({ type }) => {
  const data = useFetch(type);

  return (
    <div className="news" data-testid={type}>
      <div className="news__container">
        {data.length > 0 ? data.map((v, i) => (
          <Details 
            title={v.data.title}
            idx={i+1}
            score={v.data.score}
            by={v.data.by}
            time={v.data.time}
            url={v.data.url}
          />
        )) : 
        <Loader />
        }
      </div>
    </div>
  )
}

export default News;