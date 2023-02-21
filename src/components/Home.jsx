import { useContext } from 'react';
import DataContext from '../context/DataContext';
import Feed from './Feed';

const Home = () => {
  const { searchResult, fetchError, isLoading } = useContext(DataContext);
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
        (searchResult.length ? (
          <Feed posts={searchResult} />
        ) : (
          <p className='status-msg'>No posts to display!</p>
        ))}
    </main>
  );
};

export default Home;
