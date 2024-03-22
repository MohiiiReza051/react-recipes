const RecipeList = ({ recipe }) =>
{
  return (
    <div className="card">
        <h2 className="title">
          {recipe.title}
        </h2>
        <h3 className="time-required">
          {recipe.cookingTime}
        </h3>
        <p className="method">
          {`${recipe.method.substring(0, 100)}...`}
        </p>
        <button>
          Cook This
        </button>
      </div>
  )
}
export default RecipeList