//if you want to improve add interactive filters such as country, category, specific title

import React, { useState, useEffect } from "react";

const url =
  "http://newsapi.org/v2/top-headlines?country=in&apiKey=5effd7fa704f4219bd24507a1c66b214";

// second argument

const UseEffectFetchData = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const removeNews = (title) => {
    let updatedNews = news.filter((user) => user.title !== title);
    setNews(updatedNews);
  };

  const getNews = async () => {
    const response = await fetch(url);
    if (!(response.status >= 200 && response.status < 300)) {
      setIsLoading(false);
      setIsError(true);
    } else {
      const news = await response.json();
      setNews(news.articles);
      setIsLoading(false);
    }
    // console.log(users);
  };

  useEffect(() => {
    getNews();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  if (news.length < 1) {
    return (
      <div className="empty">
        <h1>Top News Today</h1>
        <a href="/public/index.html">Refresh News</a>
        <footer>
          <h3>API used: newsapi.org</h3>
        </footer>
      </div>
    );
  }

  return (
    <>
      <h1>Top News Today</h1>
      <div className="topnews">
        {news.map((item, index) => {
          const { title, urlToImage, description, url, source, author } = item;
          return (
            <div className="brief" key={index}>
              <img src={urlToImage} alt="" />
              <h4>
                <a href={url}>{title}</a>
              </h4>
              <p>
                {description}
                <a href={url}> Read more</a>
              </p>
              <div className="source">
                <p>{source.id}</p>
                <p>{author}</p>
              </div>
              <button className="btn" onClick={() => removeNews(title)}>
                Not Interested
              </button>
            </div>
          );
        })}
      </div>
      <footer>
        <h3>API used: newsapi.org</h3>
      </footer>
    </>
  );
};

export default UseEffectFetchData;
