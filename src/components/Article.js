function Article({ article }) {


  console.log(article);

  // Object {
  //   author: "dwwoelfel"
  //   comment_text: null
  //   created_at: "2017-09-22T21:51:56.000Z"
  //   created_at_i: 1506117116
  //   num_comments: 498
  //   objectID: "15316175"
  //   parent_id: null
  //   points: 2280
  //   relevancy_score: 7675
  //   story_id: null
  //   story_text: null
  //   story_title: null
  //   story_url: null
  //   title: "Relicensing React, Jest, Flow, and Immutable.js"
  //   url: "https://code.facebook.com/posts/300798627056246"    
  // }

  function host(url) {

    let hostName = '';

    if (url) {
      const tmp = url.split('//'); //[https:, restOfUrl]
      const restOfUrl = tmp[1].split('/'); //[domain, rest1, ....]
      hostName = restOfUrl[0]; //domain

      return hostName;
    }
    return hostName;
  }

  return (
    <div className="article-container">
      <div className="upper-row">
        <a href={article.url} target="_blank" className="article-title">{article.title},</a>
        <a href={article.url} target="_blank" className="article-site"> ({host(article.url)})</a>
      </div>
      <div className="lower-row">
        <p>
          {article.points} points by
          <a href='#'> {article.author}</a> |
          <a href='#'> hide</a> |
          <a href='#'> ({article.num_comments} comments)</a>
        </p>
      </div>

    </div>
  );
}

export default Article;