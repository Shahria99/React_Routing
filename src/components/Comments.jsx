import { useEffect, useState } from "react";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 20)));
  }, []);
  return (
    <div className="card-container">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
