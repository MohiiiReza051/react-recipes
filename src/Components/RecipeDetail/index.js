import '../../styles/RecipeDetail.css';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import Error from '../Error';

const RecipeDetail = () =>
{
  const { id } = useParams();
  const [ isLoading, err, recipe ] = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <>
      { isLoading && <Loading /> } 
      { err && <Error /> } 
      {recipe && ( 
        <div className='recipe-con'>
          <h1 className="title">
            {recipe.title}
          </h1>
          <h2 className='time-required'>
            {recipe.cookingTime} minutes
          </h2>
          <h2 className="ingredients-text">
            ingredients:
          </h2>
          <ul className='ingredient-list'>
            {recipe.ingredients.map((ri, index) => <li key={index}>{ri}</li>)}
          </ul>
          <p className="method">
            {recipe.method}
          </p>
        </div>
      )}
    </>
  )
}
export default RecipeDetail;