import { Link } from 'react-router-dom';
import { FaTabletAlt, FaMobileAlt, FaLaptop } from 'react-icons/fa';

const Header = ({ title, search, setSearch, width }) => {
  return (
    <header className='header'>
      <div id='logo'>
        <p>{title}</p>
        <p>
          {width < 768 ? (
            <FaMobileAlt />
          ) : width < 992 ? (
            <FaTabletAlt />
          ) : (
            <FaLaptop />
          )}
        </p>
      </div>
      <nav className='nav'>
        <form className='searchForm' onClick={(e) => e.preventDefault()}>
          <label htmlFor='search'>Search Posts</label>
          <input
            type='text'
            id='search'
            placeholder='Search Posts'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <ul>
          <li>
            <Link to='/'>Home </Link>
          </li>
          <li>
            <Link to='/new'>New </Link>
          </li>
          <li>
            <Link to='/about'>About </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
