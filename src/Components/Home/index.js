import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../RecipeList';
import Loading from '../Loading';
import Error from '../Error';

const Home = () =>
{
  const [ isLoading, err, recipes ] = useFetch('http://localhost:3000/recipes');

  return (
    <>
      { isLoading && <Loading /> } 
      { err && <Error /> } 
      { recipes && <RecipeList recipes={recipes} /> }
    </>
  )
}
export default Home;