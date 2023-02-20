import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Missing from './Missing';

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className='new-post'>
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className='new-post-form' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='post-title'>Title: </label>
            <input
              type='text'
              placeholder='Enter Post Title'
              id='post-title'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
            <label htmlFor='post-body'>Body: </label>
            <input
              type='text'
              id='post-body'
              placeholder='Enter Post Body'
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              required
            />
            <button type='submit' onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && <Missing />}
    </main>
  );
};

export default EditPost;
