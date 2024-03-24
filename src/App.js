import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Create from './Components/Create';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Recipe from './Components/Recipe';
import ChangeTheme from './Components/ChangeTheme';
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
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </Router>  
  );
}

export default App;