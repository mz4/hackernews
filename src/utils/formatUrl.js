const formatUrl = (url) => {
  let hostname = 'n/a';
  if (url !== undefined) {
    const newurl = new URL(url);
    hostname = newurl.hostname;
  } 
  return (
    <a href={url} target="_blank" className="news-item__tags--link">{hostname}</a>
  )
}

export default formatUrl;