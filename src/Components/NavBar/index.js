import { NavLink } from 'react-router-dom'
import '../../styles/NavBar.css';

const NavBar = () =>
{
  return (
    <div className='nav-con'>
      <h1 className="page-title">
        MULTIX Food
      </h1>
      <div className="right-side">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search: </label>
          <input type="text" className='search-field' name='search' />
          <NavLink to={''}>
            <input type="button" value="Create Recipe" className='create-recipe-btn' />
          </NavLink>
        </form>
      </div>
    </div>
  )
}
export default NavBar;