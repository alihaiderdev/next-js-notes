import { useRouter } from 'next/router';

const Review = () => {
  const {
    query: { productId, reviewId },
  } = useRouter();

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
};

export default Review;
