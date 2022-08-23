function Article({article}) {  


  console.log(article);
  
  return (
    <>
     <div>{article.story_title} by {article.author}</div>
     
    </>
  );
  }
  
  export default Article;