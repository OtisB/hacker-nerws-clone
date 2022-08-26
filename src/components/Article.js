import "./Article.css";

function Article({ article, index }) {
  console.log(index);
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
      <div className="upper-row">
        <span>{`${index + 1}.`}</span>
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
  );
}

export default Article;
