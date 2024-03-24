import '../../styles/Recipe.css';
import RecipeDetail from './RecipeDetail';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Recipe = () =>
{
  const { id } = useParams();
  const [ isLoading, err, recipe ] = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <RecipeDetail
      recipe={recipe}
      err={err}
      isLoading={isLoading}
    />
  )
}
export default Recipe;