const formatDate = (unixTimestamp) => {
  let humanDateFormat = '';
  const milliseconds = unixTimestamp * 1000 // 1575909015000
  const dateObject = new Date(milliseconds)
  return humanDateFormat = dateObject.toLocaleString()
}

export default formatDate;