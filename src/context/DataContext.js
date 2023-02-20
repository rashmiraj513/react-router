// import { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import format from 'date-fns/format';
// import useWindowSize from '../hooks/useWindowSize';
// import useAxiosFetch from '../hooks/useAxiosFetch';
// import api from '../api/posts';

// const DataContext = useContext();

// export const DataProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState('');
//   const [searchResult, setSearchResult] = useState([]);
//   const [postTitle, setPostTitle] = useState('');
//   const [postBody, setPostBody] = useState('');
//   const [editTitle, setEditTitle] = useState('');
//   const [editBody, setEditBody] = useState('');
//   const [posts, setPosts] = useState([]);
//   const { width } = useWindowSize();
//   const { data, fetchError, isLoading } = useAxiosFetch(
//     'http://localhost:3500/posts'
//   );

//   useEffect(() => {
//     setPosts(data);
//   }, [data]);

//   useEffect(() => {
//     const filteredPosts = posts.filter(
//       (post) =>
//         post.body.toLowerCase().includes(search.toLowerCase()) ||
//         post.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setSearchResult(filteredPosts.reverse());
//   }, [search, posts]);

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`posts/${id}`);
//       const postsAfterDeletion = posts.filter((post) => post.id !== id);
//       setPosts(postsAfterDeletion);
//       navigate('/');
//     } catch (err) {
//       console.log(`Error: ${err.message}`);
//     }
//   };

//   const handleEdit = async (id) => {
//     const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//     const updatedPost = {
//       id: id,
//       title: editTitle,
//       datetime: datetime,
//       body: editBody,
//     };
//     try {
//       const response = await api.put(`posts/${id}`, updatedPost);
//       setPosts(
//         posts.map((post) => (post.id === id ? { ...response.data } : post))
//       );
//       setEditTitle('');
//       setEditBody('');
//       navigate('/');
//     } catch (err) {
//       console.log(`Error: ${err.message}`);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//     const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//     const newPost = {
//       id: id,
//       title: postTitle,
//       datetime: datetime,
//       body: postBody,
//     };
//     try {
//       const response = await api.post('posts', newPost);
//       const allPosts = [...posts, response.data];
//       setPosts(allPosts);
//       setPostTitle('');
//       setPostBody('');
//       navigate('/');
//     } catch (err) {
//       console.log(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <DataContext.Provider
//       value={{
//         width,
//         search,
//         setSearch,
//         searchResult,
//         fetchError,
//         isLoading,
//         posts,
//         handleDelete,
//         handleEdit,
//         postTitle,
//         setPostTitle,
//         postBody,
//         setPostBody,
//         handleSubmit,
//         posts,
//         handleEdit,
//         editBody,
//         setEditBody,
//         editTitle,
//         setEditTitle,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataContext;
