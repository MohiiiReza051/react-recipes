import '../../styles/Home.css';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

const Home = () =>
{
  const [url, setUrl] = useState('http://localhost:3000/recipes');
  const {isLoading, err, resJson: recipes} = useFetch(url);

  return (
    <div>
            
    </div>
  )
}
export default Home;