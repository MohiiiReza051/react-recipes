import '../../styles/Home.css';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from './RecipeList';

const Home = () =>
{
  const {isLoading, err, resJson: recipes} = useFetch('http://localhost:3000/recipes');

  return (
    <>
      {/* <div className="icons-con">
        <i className='bx bx-moon'></i>
        <div className="solid-circles">
          <div className="purple"></div>
          <div className="green"></div>
          <div className="red"></div>
        </div>
      </div> */}
      <div className='recipes-list'>
        { recipes && recipes.map(r => <RecipeList key={r.id} recipe={r} /> )} 
      </div>
    </>
  )
}
export default Home;