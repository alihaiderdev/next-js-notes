import { useRouter } from 'next/router';

const Product = ({ product }) => {
  const router = useRouter();
  console.log('product: ', product);
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <div className='productDetail' style={{ textAlign: 'center' }}>
      <h1>{product.id}</h1>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: '1' } },
      { params: { productId: '2' } },
      { params: { productId: '3' } },
      { params: { productId: '4' } },
      { params: { productId: '5' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params: { productId } }) {
  //   console.log('context: ', context.params.postId);
  const res = await fetch(`http://localhost:8000/products/${productId}`);
  const product = await res.json();

  if (!product.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /products/${productId}`);
  return {
    props: { product },
    revalidate: 10,
  };
}
