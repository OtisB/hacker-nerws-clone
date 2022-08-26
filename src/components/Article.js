import "./Article.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Article({ article, index }) {
  function host(url) {
    let hostName = "";

    if (url) {
      const tmp = url.split("//"); //[https:, restOfUrl]
      const restOfUrl = tmp[1].split("/"); //[domain, rest1, ....]
      hostName = restOfUrl[0]; //domain

      return hostName;
    }
    return hostName;
  }

  return (
    <div className="article-container">
      <div className="prefix">
        {`${index + 1}.`}
        {/* <FontAwesomeIcon icon="{[fa-solid fa-caret-up]}" /> */}
      </div>
      <div className="article-wrapper">
        <div className="upper-row">
          <a href={article.url} target="_blank" className="article-title">
            {article.title},
          </a>
          <a href={article.url} target="_blank" className="article-site">
            {" "}
            ({host(article.url)})
          </a>
        </div>
        <div className="lower-row">
          <p>
            {article.points} points by
            <a href="#"> {article.author}</a> |<a href="#"> hide</a> |
            <a href="#"> ({article.num_comments} comments)</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
