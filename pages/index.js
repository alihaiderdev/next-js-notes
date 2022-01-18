import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/product');
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href={'/blog'}>
        <a>Blog</a>
      </Link>
      <Link href={'/product'}>
        <a>Products</a>
      </Link>
      <Link href={'/profile'}>
        <a>Profile</a>
      </Link>
      <Link href={'/about'}>
        <a>About</a>
      </Link>

      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default Home;
