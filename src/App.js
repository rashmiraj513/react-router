import './styles.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Missing from './components/Missing';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <div className='app'>
      <DataProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewPost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}
