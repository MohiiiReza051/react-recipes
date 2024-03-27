import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeList from '../RecipeList';
import Loading from '../Loading';
import Error from '../Error';

const SearchResult = () => {
    const [isLoading, err, recipes] = useFetch('http://localhost:3000/recipes');
    const [recipeList, setRecipeList] = useState([]);
    const { food: foodName } = useParams();
    const { mode } = useTheme();
  
    useEffect(() => {
      recipes && setRecipeList(recipes.filter(recipe => recipe.title.toLowerCase().includes(foodName.toLowerCase())));
    }, [recipes]);  

    return (
        <>
            <h1 style={{ textAlign: 'center', margin: '40px', color: mode === 'dark' ? '#d1d1d1' : 'rgb(40, 40, 40)'}}>
                Search results for the term "<em style={{ color: mode === 'dark' ? 'var(--white)' : 'var(--black)' }}>{foodName}</em>":
            </h1>
            {isLoading ? (
                <Loading />
            ) : err ? (
                <Error />
            ) : (
                recipeList.length > 0 ?
                <RecipeList recipes={recipeList} setRecipeList={setRecipeList} /> :
                <h2 className='nothing-found' style={{ textAlign: 'center', color: 'red' }}>
                    Nothing Found
                </h2>
            )}
        </>
    );
};

export default SearchResult;
