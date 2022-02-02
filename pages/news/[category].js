const ArticleListByCategory = ({ articlesFilteredByCategory, category }) => {
  console.log('articlesFilteredByCategory: ', articlesFilteredByCategory);
  return (
    <div className='articlesFilteredByCategory'>
      <h1>
        Showing news for category <b>{category}</b>
      </h1>
      {articlesFilteredByCategory?.length > 0 &&
        articlesFilteredByCategory.map((article, index) => {
          return (
            <div
              key={article.id}
              className='articlesFilteredByCategoryContainer'
            >
              <h3>
                {article.title} - {article.description} - {article.category}
              </h3>
            </div>
          );
        })}
    </div>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const {
    req,
    res,
    query,
    params: { category },
  } = context;
  //   res.setHeader('Set-Cookie', ['name=Ali Haider']);
  console.log(`Pre-rendering news articles for category ${category}`);
  const response = await fetch(
    `http://localhost:8000/news?category=${category}`
  );
  const articlesFilteredByCategory = await response.json();
  return { props: { articlesFilteredByCategory, category } };
}
