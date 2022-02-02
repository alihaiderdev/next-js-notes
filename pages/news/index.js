const NewArticles = ({ articles }) => {
  return (
    <div className='articlesContainer'>
      <h1>List of news articles</h1>
      {articles?.length > 0 &&
        articles.map((article, index) => {
          return (
            <div
              className='article'
              key={article.id}
              style={{
                padding: '0.5rem',
                border: '1px solid grey',
                margin: '0.5rem',
              }}
            >
              <h3>
                {article.category} | {article.title}
              </h3>
              <p>{article.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default NewArticles;

export async function getServerSideProps() {
  console.log(`Pre-rendering news articles`);
  const res = await fetch(`http://localhost:8000/news`);
  const articles = await res.json();
  return { props: { articles } };
}
