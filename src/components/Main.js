import Article from "./Article";
import { useState, useEffect } from "react";


function Main() {

  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState();
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    console.clear();

    const url = `http://hn.algolia.com/api/v1/search?query=${query}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.hits);
      })
      .catch((error) => console.log('error ', error));

  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setQuery(userInput);
    setUserInput('');
  };

  return (
    <>
      {articles.length
        ? articles.map((article) => {
          return (
            <Article
              article={article}
              key={article.objectID}
            // key={crypto.randomUUID()}              //check if objectID is really unique
            />
          );
        })
        : "no articles yet"}

      <form onSubmit={handleSubmit} method="Post">
        <input
          type="text"
          search="input"
          id="search"
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
          placeholder="Search..."
        />

        <button type="submit">Start Search</button>
      </form>
    </>
  );
}

export default Main;