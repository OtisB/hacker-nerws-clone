import Article from "./Article";
import Pagination from "./Pagination";
import "./Main.css";
import { useState, useEffect } from "react";

function Main() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState();
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [hitsPerPage, setHitsPerPage] = useState(20);

  const URL = `http://hn.algolia.com/api/v1/search?hitsPerPage=${hitsPerPage}&tags=story&&restrictSearchableAttributes=title&query=${query}&page=${page}`;

  useEffect(() => {
    request(URL);
  }, [query, page]);

  function request(u) {
    fetch(u)
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch from this resource");
        }
        return response.json();
      })
      .then((data) => {

        setArticles(data.hits);
        setMaxPage(data.nbPages);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        setArticles([]);
        setMaxPage(0);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setQuery(userInput);
    setPage(0);
    setUserInput("");
  };

  const getContent = () => {
    return articles.map((article, index) => {
      return (
        <Article
          index={index + (hitsPerPage * page)}
          article={article}
          key={article.objectID}
        />
      );
    });
  };

  return (
    <>
      <div className="articles-section">
        {error && <div className="error-message"> {error} </div>}
        {isPending && <div className="pending-message">Loading...</div>}{" "}
        {articles.length > 0 && getContent()}
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
          <div className="contact">
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
            disabled={isPending || error}
          />
          <button type="submit" disabled={isPending || error}>Start Search</button>
        </form>
        <Pagination
          isPending={isPending}
          error={error}
          maxPage={maxPage}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}

export default Main;
