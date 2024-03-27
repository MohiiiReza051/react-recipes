import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect } from 'react';
import RecipeList from '../RecipeList';
import Loading from '../Loading';
import Error from '../Error';

const Home = () =>
{
  const [ isLoading, err, recipes ] = useFetch('http://localhost:3000/recipes');
  const [recipeList, setRecipeList] = useState([]);
  
  useEffect(() => {
    recipes && setRecipeList(recipes);
  }, [recipes]);

  return (
    <>
      {isLoading ? (
          <Loading />
        ) : err ? (
          <Error />
        ) : (
          recipeList && <RecipeList recipes={recipeList} setRecipeList={setRecipeList} />
        )
      }
    </>
  )
}

export default Home;