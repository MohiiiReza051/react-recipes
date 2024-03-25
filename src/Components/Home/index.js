import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../RecipeList';
import Loading from '../Loading';

const Home = () =>
{
  const [ isLoading, err, recipes ] = useFetch('http://localhost:3000/recipes');

  return (
    <>
      { isLoading && <Loading /> } 
      { recipes && <RecipeList recipes={recipes} /> }
    </>
  )
}
export default Home;