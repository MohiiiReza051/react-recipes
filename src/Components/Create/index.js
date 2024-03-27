import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import '../../styles/Create.css';

const Create = () =>
{
  const [newRecipe, setNewRecipe] = useState({ ingredients: [] });
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsInputValue, setIngredientsInputValue] = useState('');
  const [isSend, setIsSend] = useState(false);
  const [ isLoading, err, resJson, postData ] = useFetch("http://localhost:3000/recipes", 'POST');
  const navigate = useNavigate();
  const { mode } = useTheme();

  const handleSubmitForm = async e =>
  {
    e.preventDefault();
    if (ingredientsList.length > 0) {
      await postData(newRecipe);
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
    if (ingredientsInputValue && !ingredientsList.includes(ingredientsInputValue)) {
      setIngredientsList([...ingredientsList, ingredientsInputValue]);
      setNewRecipe({ ...newRecipe, ingredients: [...ingredientsList, ingredientsInputValue]});
      setIngredientsInputValue('');
    }
  }
  
  useEffect(() => {
    resJson && navigate('/');
  }, [isSend]);
  
  return (
    <div className={`create-con ${mode === 'dark' && 'dark-mode'}`}>
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
          value={ingredientsInputValue}
          onInput={e => setIngredientsInputValue(e.target.value)}
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