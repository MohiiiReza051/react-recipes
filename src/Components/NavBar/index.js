import { NavLink, useNavigate } from 'react-router-dom'
import '../../styles/NavBar.css';

const NavBar = () =>
{
  const navigate = useNavigate();

  const handleSearchField = e =>
  {
    if (e.key === 'Enter')
      navigate(`/search/${e.target.value}`);
  }

  return (
    <div className='nav-con'>
      <h1 className="page-title">
        MULTIX Food
      </h1>
      <div className="right-side">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            className='search-field'
            name='search'
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