import Article from "./Article";
import { useState, useEffect } from "react";


function Main() {

  const url = 'http://hn.algolia.com/api/v1/search_by_date?query=30';

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.clear();

    fetch(url)
      // fetch("http://hn.algolia.com/api/v1/search_by_date?query=30")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.hits);
      })
      .catch((error) => console.log('error ', error));

  }, []);

  return (
    <>
      {articles.length
        ? articles.map((article) => {
          return (
            <Article
              article={article}
              key={crypto.randomUUID()}
            />
          );
        })
        : "no articles yet yet"}

      <label htmlFor="search">Search: </label>
      <input type="text" name="search" id="search" />

      <button>Start Search</button>
      {/* <input type="button" /> */}
      {/* <input type="button" onClick={ } /> */}
    </>
  );
}

export default Main;