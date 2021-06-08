import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Searchform from './Searchform';
import Articles from '../details/search/Articles';
import Loader from '../../utils/loader';

const Searchnews = ({ type }) => {
  const [data, setData] = useState('');
  const [values, setSearch] = useState({
    subject: 'Bitcoin'
  });

  useEffect(() => {
    const dataLoad = async () => {
      const subject = values.subject;
      const res = await axios.get(`https://newsapi.org/v2/everything?q=${subject}&pageSize=50&apiKey=a07184e83fd94b3ea2d74cc294760f9c`);
      setData(res.data.articles);
    }
    dataLoad();
  }, [values])

  const setValues = (values) => {
    setSearch(values);
  }

  return (
    <div className="news" data-testid={type}>
      <Searchform 
        setValues={setValues}
      />
      <div className="news__container">
        {data !== '' ? 
          data.map((d, i) => (
            <Articles
              idx={i+1}
              author={d.author}
              title={d.title}
              publishedAt={d.publishedAt}
              url={d.url}
              searchSubject={values.subject}
            />
          ))
        :
          <Loader />
        }
      </div>
    </div>
  )
}

export default Searchnews;
