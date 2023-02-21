import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Missing from './Missing';
import format from 'date-fns/format';
import api from '../api/posts';

const EditPost = () => {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(DataContext);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {
      id: id,
      title: editTitle,
      datetime: datetime,
      body: editBody,
    };
    try {
      const response = await api.put(`posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

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
