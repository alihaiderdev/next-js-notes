import { useRouter } from 'next/router';

const ProductDetail = () => {
  const {
    query: { productId },
  } = useRouter();
  return <div>Product {productId} Detail Page</div>;
};

export default ProductDetail;
