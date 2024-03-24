import '../../styles/Home.css';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from './RecipeList';

const Home = () =>
{
  const [ isLoading, err, recipes ] = useFetch('http://localhost:3000/recipes');

  return (
    <>
      <div className='recipes-list'>
        { recipes && recipes.map(r => <RecipeList key={r.id} recipe={r} /> )} 
      </div>
    </>
  )
}
export default Home;