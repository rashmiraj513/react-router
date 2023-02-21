import { createContext, useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [posts, setPosts] = useState([]);
  const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredPosts.reverse());
  }, [search, posts]);

  return (
    <DataContext.Provider
      value={{
        width,
        search,
        setSearch,
        searchResult,
        fetchError,
        isLoading,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
