import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <div className="post-info">
          <h2>
            {post.title.length <= 15
              ? post.title
              : `${post.title.slice(0, 15)}...`}
          </h2>
          <p className="post-date">{post.datetime}</p>
        </div>
        <p className="post-body">
          {post.body.length <= 35 ? post.body : `${post.body.slice(0, 35)}...`}
        </p>
      </Link>
    </article>
  );
};

export default Post;
