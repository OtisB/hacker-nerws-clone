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


      <div className="footer">
        <div className="orange-line"></div>
        <p className="application">Applications are open for YC Winter 2023</p>
        <div className="footer-container">
          <div>
            <a href="https://news.ycombinator.com/newsguidelines.html">
              Guidelines |
            </a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/newsfaq.html">FAQ |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/lists">Lists |</a>
          </div>
          <div>
            <a href="https://github.com/HackerNews/API">API |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/security.html">Security |</a>
          </div>
          <div>
            <a href="https://www.ycombinator.com/legal/">Legal |</a>
          </div>
          <div>
            <a href="https://www.ycombinator.com/apply/">Apply to YC |</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
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
        </div>
      </div>


    </>
  );
}

export default Main;