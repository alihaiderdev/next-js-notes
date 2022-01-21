import Link from 'next/link';

const ProductList = ({ products }) => {
  console.log('products: ', products);
  return (
    <>
      <h1>List of Products</h1>
      {products &&
        products.length > 0 &&
        products.map((product, index) => {
          return (
            <Link
              key={product.id}
              href={`products/${product.id}`}
              passHref
              style={{ cursor: 'pointer' }}
            >
              <h2>
                {product.id} - {product.title} - {product.description} -{' '}
                {product.price}
              </h2>
            </Link>
          );
        })}
    </>
  );
};

export default ProductList;

export async function getStaticProps() {
  console.log(`Generating / Regenerating product list`);
  const res = await fetch('http://localhost:8000/products');
  const products = await res.json();
  return {
    props: { products },
    revalidate: 10,

    //  for ecommerce site documentation sites the revalidation time should have 60 seconds and a website with high traffic should have revalidation of 1 second
    // here 10 is the time in milliseconds
    // is 10 milliseconds ka time ma agar kisi na database ka ander koi modifications kari hongi and then user wohi project ki bani hoi build pa hit karega first time to usa updated data nhi milega lakin page backend pa generate hona lag jaega but jab wo dobara sa time period ka baad request karega to is baar updated page milega and agar user is time period ka ander 1000 ya many times request karrega to bhi sirf aak baar hi generate hoga page
  };
}
