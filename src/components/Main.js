import Article from "./Article";
import "./Main.css";
import { useState, useEffect } from "react";

function Main() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState();
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const URL = `http://hn.algolia.com/api/v1/search?query=${query}`;
  //const URL = `http://hn.algolia.com/arch?query=${query}`;    //error testing

  useEffect(() => {
    console.clear();
    
    request(URL);

  }, [query]);

  const request = (u) => {
    fetch(u)
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch from this resource");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.hits);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        alert(err.message);
        setError(err.message);
        setIsPending(false);
        setArticles([]);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setQuery(userInput);
    setUserInput("");
  };

  const getContent = () => {

    return (
      articles.map((article) => {
        return (
          <Article
            article={article}
            key={article.objectID}
          // key={crypto.randomUUID()}              //check if objectID is really unique
          />
        )
      })
    );
  };

  return (
    <>
      <div className="articles-section">
        {error && <div className="error-message"> {error} </div>}
        {isPending && <div className="pending-message">Loading...</div>}    {/* or spinner */}
        {articles.length && getContent()}
      </div>

      <div className="footer">
        <div className="orange-line"></div>
        <p className="application">Applications are open for YC Winter 2023</p>
        <div className="footer-container">
          <div>
            <a href="https://news.ycombinator.com/newsguidelines.html">
              Guidelines
            </a>
          </div>
          <div>|</div>
          <div>
            <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
          </div>
          <div>|</div>
          <div>
            <a href="https://news.ycombinator.com/lists">Lists</a>
          </div>
          <div>|</div>
          <div>
            <a href="https://github.com/HackerNews/API">API</a>
          </div>
          <div>|</div>
          <div>
            <a href="https://news.ycombinator.com/security.html">Security</a>
          </div>
          <div>|</div>
          <div>
            <a href="https://www.ycombinator.com/legal/">Legal</a>
          </div>
          <div>|</div>
          <div>
            <a href="https://www.ycombinator.com/apply/">Apply to YC</a>
          </div>
          <div>|</div>
          <div>
            <a href="https://www.ycombinator.com/apply/">Contact</a>
          </div>
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
    </>
  );
}

export default Main;
