import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader from '../../utils/loader';

const Search = ({ type }) => {
  return (
    <div className="news" data-testid={type}>
      <div className="news__container">

      </div>
    </div>
  )
}

export default Search;
