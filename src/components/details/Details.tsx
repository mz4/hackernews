import React from 'react';
import formatUrl from '../../utils/formatUrl';
import formatDate from '../../utils/formatDate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart, 
  faUser, 
  faClock, 
  faLink, 
  faThumbsUp,
  faComment
 } from '@fortawesome/free-solid-svg-icons';

const Details = ({ title, idx, score, by, time, url }) => {
  return (
    <div className="news-item">

      <div className="news-item__number">
        {idx}
      </div>

      <div className="news-item__title">
        {title}
        <div className="news-item__tags">
          <span className="news-item__tags--info">
            <FontAwesomeIcon icon={faHeart} className="news-item__tags--icon" /> {score} points
          </span>
          <span className="news-item__tags--info">
            <FontAwesomeIcon icon={faUser} className="news-item__tags--icon" /> {by}
          </span>
          <span className="news-item__tags--info">
            <FontAwesomeIcon icon={faClock} className="news-item__tags--icon" /> {formatDate(time)}
          </span>
          <span className="news-item__tags--info">
            <FontAwesomeIcon icon={faLink} className="news-item__tags--icon" /> {formatUrl(url)}
          </span>
        </div>
      </div>

      <div className="news-item__upvote">
        <FontAwesomeIcon icon={faThumbsUp} />
      </div>

      <div className="news-item__comment">
        <FontAwesomeIcon icon={faComment} />
      </div>

    </div>
  )
}

export default Details;
