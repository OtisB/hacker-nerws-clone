function Article({ article }) {


  //console.log(article);

  return (
    <>
      <div>{article.title} by {article.author}</div>

    </>
  );
}

export default Article;