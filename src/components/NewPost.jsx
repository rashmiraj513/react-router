import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import api from '../api/posts';
import { useNavigate } from 'react-router-dom';
import format from 'date-fns/format';

const NewPost = () => {
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const { posts, setPosts } = useContext(DataContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id: id,
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };
    try {
      const response = await api.post('posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <main className='new-post'>
      <h2>New Post</h2>
      <form className='new-post-form' onSubmit={handleSubmit}>
        <label htmlFor='post-title'>Title: </label>
        <input
          type='text'
          placeholder='Enter Post Title'
          id='post-title'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
        <label htmlFor='post-body'>Body: </label>
        <input
          type='text'
          id='post-body'
          placeholder='Enter Post Body'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
