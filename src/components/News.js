//if you want to improve add interactive filters such as country, category, specific title

import React, { useState, useEffect } from "react";

const UseEffectFetchData = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [country, setCountry] = useState("in");

  const link =
    `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=` +
    process.env.REACT_APP_API_KEY;

  const [url, setUrl] = useState(link);

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

  const countrynews = async (country) => {
    setCountry(country);
    setUrl(
      `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=` +
        process.env.REACT_APP_API_KEY
    );
    getNews();
  };

  useEffect(() => {
    getNews();
  });

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
      <div id="page-container">
        <h1>Top News Today</h1>
        <div className="countries">
          <h3>
            <b>Country: </b>
          </h3>
          <button className="country" onClick={() => countrynews("ar")}>
            Argentina
          </button>
          <button className="country" onClick={() => countrynews("at")}>
            Austria
          </button>
          <button className="country" onClick={() => countrynews("au")}>
            Australia
          </button>
          <button className="country" onClick={() => countrynews("be")}>
            Belgium
          </button>
          <button className="country" onClick={() => countrynews("bg")}>
            Bulgaria
          </button>
          <button className="country" onClick={() => countrynews("br")}>
            Brazil
          </button>
          <button className="country" onClick={() => countrynews("ca")}>
            Canada
          </button>
          <button className="country" onClick={() => countrynews("cn")}>
            China
          </button>
          <button className="country" onClick={() => countrynews("co")}>
            Colombia
          </button>
          <button className="country" onClick={() => countrynews("cu")}>
            Cuba
          </button>
          <button className="country" onClick={() => countrynews("cz")}>
            Czechia
          </button>
          <button className="country" onClick={() => countrynews("eg")}>
            Egypt
          </button>
          <button className="country" onClick={() => countrynews("fr")}>
            France
          </button>
          <button className="country" onClick={() => countrynews("de")}>
            Germany
          </button>
          <button className="country" onClick={() => countrynews("gr")}>
            Greece
          </button>
          <button className="country" onClick={() => countrynews("hk")}>
            Hong Kong
          </button>
          <button className="country" onClick={() => countrynews("hu")}>
            Hungary
          </button>
          <button className="country" onClick={() => countrynews("id")}>
            Indonesia
          </button>
          <button className="country" onClick={() => countrynews("ie")}>
            Ireland
          </button>
          <button className="country" onClick={() => countrynews("il")}>
            Israel
          </button>
          <button className="country" onClick={() => countrynews("in")}>
            India
          </button>
          <button className="country" onClick={() => countrynews("it")}>
            Italy
          </button>
          <button className="country" onClick={() => countrynews("jp")}>
            Japan
          </button>
          <button className="country" onClick={() => countrynews("lt")}>
            Lithuania
          </button>
          <button className="country" onClick={() => countrynews("lv")}>
            Latvia
          </button>
          <button className="country" onClick={() => countrynews("ma")}>
            Morocco
          </button>
          <button className="country" onClick={() => countrynews("mx")}>
            Mexico
          </button>
          <button className="country" onClick={() => countrynews("my")}>
            Malaysia
          </button>
          <button className="country" onClick={() => countrynews("ng")}>
            Nigeria
          </button>
          <button className="country" onClick={() => countrynews("nl")}>
            Netherlands
          </button>
          <button className="country" onClick={() => countrynews("no")}>
            Norway
          </button>
          <button className="country" onClick={() => countrynews("nz")}>
            New Zealand
          </button>
          <button className="country" onClick={() => countrynews("ph")}>
            Philippines
          </button>
          <button className="country" onClick={() => countrynews("pl")}>
            Poland
          </button>
          <button className="country" onClick={() => countrynews("pt")}>
            Portugal
          </button>
          <button className="country" onClick={() => countrynews("ro")}>
            Romania
          </button>
          <button className="country" onClick={() => countrynews("ru")}>
            Russia
          </button>
          <button className="country" onClick={() => countrynews("sa")}>
            Saudi Arabia
          </button>
          <button className="country" onClick={() => countrynews("rs")}>
            Serbia
          </button>
          <button className="country" onClick={() => countrynews("sg")}>
            Singapore
          </button>
          <button className="country" onClick={() => countrynews("si")}>
            Slovenia
          </button>
          <button className="country" onClick={() => countrynews("sk")}>
            Slovakia
          </button>
          <button className="country" onClick={() => countrynews("za")}>
            South Africa
          </button>
          <button className="country" onClick={() => countrynews("kr")}>
            South Korea
          </button>
          <button className="country" onClick={() => countrynews("se")}>
            Sweden
          </button>
          <button className="country" onClick={() => countrynews("ch")}>
            Switzerland
          </button>
          <button className="country" onClick={() => countrynews("th")}>
            Thailand
          </button>
          <button className="country" onClick={() => countrynews("tr")}>
            Turkey
          </button>
          <button className="country" onClick={() => countrynews("tw")}>
            Taiwan
          </button>
          <button className="country" onClick={() => countrynews("ae")}>
            UAE
          </button>
          <button className="country" onClick={() => countrynews("gb")}>
            UK
          </button>
          <button className="country" onClick={() => countrynews("ua")}>
            Ukraine
          </button>
          <button className="country" onClick={() => countrynews("us")}>
            USA
          </button>
          <button className="country" onClick={() => countrynews("ve")}>
            Venezuela
          </button>
        </div>
        <div className="topnews">
          {news.map((item, index) => {
            const {
              title,
              urlToImage,
              description,
              url,
              source,
              author,
            } = item;
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
      </div>
    </>
  );
};

export default UseEffectFetchData;
