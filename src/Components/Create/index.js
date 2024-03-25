import { useFetch } from '../../hooks/useFetch';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Create.css';

const Create = () =>
{
  const [newRecipe, setNewRecipe] = useState({ ingredients: [] });
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsInputValue, setIngredientsInputValue] = useState('');
  const [isSend, setIsSend] = useState(false);
  const [ isLoading, err, resJson, postData ] = useFetch("http://localhost:3000/recipes", 'POST');
  const ingredientsRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmitForm = e =>
  {
    e.preventDefault();
    if (ingredientsList.length > 0) {
      postData(newRecipe);
      setIsSend(true);
    }
  }
  
  const handleCreateRecipeObj = e =>
  {
    const key = e.target.name;
    const value = e.target.value;
    setNewRecipe({ ...newRecipe, [key]: value });
  }
  
  const handleAddIngredient = () =>
  {
    if (ingredientsRef.current && !ingredientsList.includes(ingredientsRef.current)) {
      setIngredientsList([...ingredientsList, ingredientsRef.current]);
      setNewRecipe({ ...newRecipe, ingredients: [...ingredientsList, ingredientsRef.current]});
      ingredientsRef.current = '';
      setIngredientsInputValue(ingredientsRef.current);
    }
  }
  
  const handleOnInputIngredients = e =>
  {
    ingredientsRef.current = e.target.value;
    setIngredientsInputValue(ingredientsRef.current);
  }
  
  useEffect(() => {
    resJson && navigate('/');
  }, [isSend]);
  
  return (
    <div className='create-con'>
      <h1 className='title'>Add A New Recipe</h1>
      <form onSubmit={e => handleSubmitForm(e)}>
        <label htmlFor="title">Recipe Title:</label>
        <br />
        <input
          type="text"
          className='recipe-title'
          name='title'
          required
          onInput={e => handleCreateRecipeObj(e)}
        />
        <br /><br />

        <label htmlFor="ingredients">Recipe Ingredients:</label>
        <br />
        <input
          type="text"
          className='recipe-ingredients'
          name='ingredients'
          ref={ingredientsRef}
          value={ingredientsInputValue}
          onInput={e => handleOnInputIngredients(e)}
        />
        <input
          type="button"
          value="Add"
          onClick={handleAddIngredient}
        />
        <p className="show-ingredients">
          Current Ingredients: {
            newRecipe.ingredients.map((ingredient, index) => (
              <i key={index}>{ingredient}{index + 1 !== ingredientsList.length && ', '}</i>
            ))
          }
        </p>
        <br /><br />

        <label htmlFor="method">Recipe Method:</label>
        <br />
        <textarea
          className='recipe-method'
          name='method'
          cols={50}
          required
          onChange={e => handleCreateRecipeObj(e)}
        >
        </textarea>
        <br /><br />

        <label htmlFor="cookingTime">Cooking Time(m):</label>
        <br />
        <input
          type="text"
          className='cooking-time'
          name='cookingTime'
          required
          onInput={e => handleCreateRecipeObj(e)}
        />

        <button type="submit" className='submit-btn'>
          Submit
        </button>

      </form>
    </div>
  )
}

export default Create;