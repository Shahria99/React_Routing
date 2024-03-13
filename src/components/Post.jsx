const Post = ({ post }) => {
  return (
    <div key={post.id}>
      <div className="cards p-5">
        <h1 className="text-lg font-bold mb-2">{post.id}</h1>
        <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
        <h3>{post.body}</h3>
      </div>
    </div>
  );
};

export default Post;
