import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../RecipeList';
import Loading from '../Loading';

const SearchResult = () => {
    const [isLoading, err, recipes] = useFetch('http://localhost:3000/recipes');
    const { food: foodName } = useParams();
  
    const filteredRecipes = recipes ? recipes.filter(recipe => recipe.title.toLowerCase().includes(foodName.toLowerCase())) : [];

    return (
        <>
            <h1 style={{ textAlign: 'center', margin: '40px', color: 'rgb(40, 40, 40)' }}>
                Search results for the term "<em style={{ color: 'var(--black)' }}>{foodName}</em>":
            </h1>
            { isLoading && <Loading /> } 
            { filteredRecipes && (<RecipeList recipes={filteredRecipes} />) }
        </>
    );
};

export default SearchResult;
