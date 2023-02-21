import { useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Missing from './Missing';
import api from '../api/posts';

const PostPage = () => {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`posts/${id}`);
      const postsAfterDeletion = posts.filter((post) => post.id !== id);
      setPosts(postsAfterDeletion);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className='post-page'>
      <article className='post'>
        {post && (
          <>
            <div className='post-info'>
              <h2>{post.title}</h2>
              <p className='post-date'>{post.datetime}</p>
            </div>
            <p className='post-body'>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className='edit-button'>Edit Post</button>
            </Link>
            <button
              className='delete-button'
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && <Missing />}
      </article>
    </main>
  );
};

export default PostPage;
