import Link from 'next/link';
import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
      <h1>List of Posts</h1>
      {posts &&
        posts.map((post, index) => {
          return (
            <Link passHref href={`posts/${post.id}`} key={post.id}>
              <div
                style={{
                  border: '1px solid yellowgreen',
                  margin: '2rem 0',
                  padding: '1rem',
                  cursor: 'pointer',
                }}
              >
                <p style={{ margin: '0' }}>
                  <b>Id: </b> {post.id}
                </p>
                <p style={{ margin: '0' }}>
                  <b>Title: </b> {post.title}
                </p>
                <p style={{ margin: '0' }}>
                  <b>Description: </b> {post.body}
                </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Posts;

// we can also use useEffect hook for getting data on page load but we we can get pre rendering using this so thats why we use getStaticProps function for pre rendering

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    // props: { posts: posts.slice(0, 10) },
    props: { posts },
  };
}
