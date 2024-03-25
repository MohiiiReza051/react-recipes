import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Create from './Components/Create';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import RecipeDetail from './Components/RecipeDetail';
import ChangeTheme from './Components/ChangeTheme';
import SearchResult from './Components/SearchResult';
import './styles/App.css';

const App = () =>
{
  return (
      <Router>
        <NavBar />
        <ChangeTheme />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipes/:id' element={<RecipeDetail />} />
          <Route path='/search/:food' element={<SearchResult />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </Router>  
  );
}

export default App;