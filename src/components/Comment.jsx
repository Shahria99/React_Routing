import "./Comments.css";
const Comment = ({ comment }) => {
  return (
    <div key={comment.id}>
      <div className="cards p-5">
        <h1 className="text-lg font-bold">{comment.id}</h1>
        <h1 className="text-lg font-semibold">{comment.name}</h1>
        <h2 className="text-lg text-gray-500">{comment.email}</h2>
      </div>
    </div>
  );
};

export default Comment;
