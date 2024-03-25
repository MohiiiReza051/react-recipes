import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../../styles/NavBar.css';

const NavBar = () =>
{
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearchField = e =>
  {
    if (e.key === 'Enter') {
      setSearchValue('');
      navigate(`/search/${e.target.value}`);
    }
  }

  return (
    <div className='nav-con'>
      <h1 className="page-title">
        <Link to={'/'}>
          MULTIX Food
        </Link>
      </h1>
      <div className="right-side">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            className='search-field'
            name='search'
            value={searchValue}
            onInput={e => setSearchValue(e.target.value)}
            onKeyDown={e => handleSearchField(e)}
          />
          <NavLink to={'/create'} className='create-recipe-btn'>
            Create Recipe
          </NavLink>
        </form>
      </div>
    </div>
  )
}
export default NavBar;