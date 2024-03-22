import '../../styles/Home.css';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch'

const Home = () =>
{
  const [url, setUrl] = useState('http://localhost:3000/recipes');
  useFetch(url);
  return (
    <div>Home</div>
  )
}
export default Home;