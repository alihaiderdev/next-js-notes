import Link from 'next/link';

const ProductList = ({ productId = 50 }) => {
  return (
    <>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <br />
      <Link href={'/product/1'}>
        <a>Product 1</a>
      </Link>
      <br />
      <Link href={'/product/2'}>
        <a>Product 2</a>
      </Link>
      <br />
      <Link href={'/product/3'} replace>
        <a>Product 3</a>
      </Link>
      <br />
      <Link href={`/product/${productId}`}>
        <a>Product {productId}</a>
      </Link>
    </>
  );
};

export default ProductList;
