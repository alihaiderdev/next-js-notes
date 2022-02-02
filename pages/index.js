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
      <ol>
        <li>
          <Link href={'/blog'}>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href={'/product'}>
            <a>Product List</a>
          </Link>
        </li>
        <li>
          <Link href={'/profile'}>
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href={'/users'}>
            <a>Users</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts'}>
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href={'/products'}>
            <a>Products</a>
          </Link>
        </li>
      </ol>

      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default Home;
