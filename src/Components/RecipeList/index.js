import { Link } from 'react-router-dom'
import '../../styles/RecipeList.css'

const RecipeList = ({ recipes }) =>
{
  return (
    <div className="recipes-list">
      {recipes.map(r => (
        <div className="card" key={r.id}>
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