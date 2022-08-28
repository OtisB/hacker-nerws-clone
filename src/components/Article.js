import "./Article.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Article({ article, index }) {
  function host(url) {
    let hostName = "";

    if (url) {
      const tmp = url.split("//");
      const restOfUrl = tmp[1].split("/");
      hostName = restOfUrl[0];

      return hostName;
    }
    return hostName;
  }

  const votUpIcon = <FontAwesomeIcon icon={faCaretUp} />;

  return (
    <div className="article-container">
      <div className="prefix">
        {`${index + 1}.`}
        <span className="upvote-btn">{votUpIcon}</span>
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
