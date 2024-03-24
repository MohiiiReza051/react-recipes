import { Link } from 'react-router-dom'

const RecipeList = ({ recipe }) =>
{
  return (
    <div className="card">
        <h2 className="title">
          {recipe.title}
        </h2>
        <h3 className="time-required">
          {recipe.cookingTime} minutes
        </h3>
        <p className="method">
          {`${recipe.method.substring(0, 100)}...`}
        </p>
        <button>
          <Link to={`/recipes/${recipe.id}`}>
            Cook This
          </Link>
        </button>
      </div>
  )
}
export default RecipeList