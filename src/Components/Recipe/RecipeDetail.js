const RecipeDetail = ({ recipe, err, isLoading }) =>
{
  return (
    (recipe && (
        <div className='recipe-con'>
          <h1 className="title">
            {recipe.title}
          </h1>
          <h2 className='time-required'>
            {recipe.cookingTime} 
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
        )
    )
  )
}
export default RecipeDetail