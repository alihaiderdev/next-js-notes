import { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const submitComment = async () => {
    const res = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    console.log('data: ', data);
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, { method: 'DELETE' });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };
  return (
    <div className='commentsContainer'>
      <input
        type='text'
        value={comment}
        placeholder='Enter Your Comment'
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.length > 0 &&
        comments.map((comment, index) => {
          return (
            <div className='comment' key={comment.id}>
              <span>
                {comment.id} | {comment.text}
              </span>
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
