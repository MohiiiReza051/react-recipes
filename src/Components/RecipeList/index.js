import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme';
import '../../styles/RecipeList.css'

const RecipeList = ({ recipes }) =>
{  
  const { mode } = useTheme()

  const handleDeleteRecipe = async recipeId =>
  {
    await fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    window.location.reload();
  }

  return (
    <div className="recipes-list">
      {recipes.map(r => (
        <div className={`card ${mode === 'dark' && 'dark-mode'}`} key={r.id}>
          <i className='bx bxs-trash' onClick={() => handleDeleteRecipe(r.id)}></i>
          <h2 className="title">
            {r.title}
          </h2>
          <h3 className="time-required">
            {r.cookingTime} minutes
          </h3>
          <p className="method">
            {`${r.method.substring(0, 100)}...`}
          </p>
          <button>
            <Link to={`/recipes/${r.id}`}>
              Cook This
            </Link>
          </button>
        </div>    
      ))}
    </div>
  )
}

export default RecipeList