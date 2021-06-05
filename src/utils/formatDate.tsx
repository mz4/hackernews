import React from 'react';

const formatDate = (unixTimestamp) => {
  try {
    const milliseconds = unixTimestamp * 1000
    const dateObject = new Date(milliseconds)    
    return dateObject.toLocaleString()
  } catch (error) {
    console.log('error processing data');
  }
}

export default formatDate;