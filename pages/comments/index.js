import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  // const [signupFormData, setSignupFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  // const { firstName, lastName, email, password } = signupFormData;

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const submitComment = async () => {
    const res = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    // console.log(data, "data");
    // console.log("signupFormData :", signupFormData );
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, { method: "DELETE" });
    await res.json();
    fetchComments();
  };

  // const getCommentById = async (commentId) => {
  //   const res = await fetch(`/api/comments/${commentId}`);
  //   const comment = await res.json();
  //   console.log(comment, "comment");
  //   // fetchComments();
  // };

  return (
    <div className="commentsContainer">
      <input
        type="text"
        value={comment}
        placeholder="Enter Your Comment"
        onChange={(e) => {
          console.log(e.target.value);
          setComment(e.target.value);
        }}
      />
      {/* <input
        type="text"
        value={firstName}
        placeholder="Enter Your Firstname"
        onChange={(e) => {
          setSignupFormData({ ...signupFormData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        value={lastName}
        placeholder="Enter Your Lastname"
        onChange={(e) => {
          setSignupFormData({ ...signupFormData, lastName: e.target.value });
        }}
      />
      <input
        type="email"
        value={email}
        placeholder="Enter Your Email"
        onChange={(e) => {
          setSignupFormData({ ...signupFormData, email: e.target.value });
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Enter Your Password"
        onChange={(e) => {
          setSignupFormData({ ...signupFormData, password: e.target.value });
        }}
      /> */}
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.length > 0 &&
        comments.map((comment, index) => {
          return (
            <div className="comment" key={comment.id}>
              <span>
                {comment.id} | {comment.text}
              </span>
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
              {/* <button onClick={() => getCommentById(comment.id)}>getCommentById</button> */}
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
