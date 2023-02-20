import Feed from './Feed';

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className='home'>
      {isLoading && <p className='status-msg'>Loading Posts...</p>}
      {!isLoading && fetchError && (
        <p className='status-msg' style={{ color: 'red' }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className='status-msg'>No posts to display!</p>
        ))}
    </main>
  );
};

export default Home;
