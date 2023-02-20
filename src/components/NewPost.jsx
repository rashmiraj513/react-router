import { useContext } from 'react';
import DataContext from '../context/DataContext';

const NewPost = () => {
  const { postTitle, setPostTitle, postBody, setPostBody, handleSubmit } =
    useContext(DataContext);
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
