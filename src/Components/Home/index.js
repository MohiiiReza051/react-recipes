import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../RecipeList';

const Home = () =>
{
  const [ isLoading, err, recipes ] = useFetch('http://localhost:3000/recipes');

  return (
    <>
      { recipes && <RecipeList recipes={recipes} /> } 
    </>
  )
}
export default Home;