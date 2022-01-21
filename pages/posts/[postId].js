import { useRouter } from 'next/router';

const Post = ({ post }) => {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <div className='postDetail' style={{ textAlign: 'center' }}>
      <h1>{post.id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
      { params: { postId: '4' } },
      { params: { postId: '5' } },
    ],
    // fallback: false,
    // fallback: true,
    fallback: 'blocking',
  };
}

// export async function getStaticPaths() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

//   const paths = posts.map((post) => {
//     return {
//       params: {
//         postId: `${post.id}`,
//       },
//     };
//   });

//   return { paths, fallback: false };
//   //   possible values for fallback could be true, false, blocking
// }

export async function getStaticProps(context) {
  //   console.log('context: ', context.params.postId);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.postId}`
  );
  const post = await res.json();

  // in this way we can show 404 page if user wants to hit a postId that not exist then we can show 404 page
  if (!post.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts/${context.params.postId}`);
  return {
    props: { post },
  };
}
