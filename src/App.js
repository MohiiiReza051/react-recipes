import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './Components/Create/index';
import Home from './Components/Home/index';
import NavBar from './Components/NavBar/index';
import Recipe from './Components/Recipe/index';
import './styles/App.css';

const App = () =>
{
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Create' element={<Create />}/>
          <Route path='/Recipe' element={<Recipe />}/>
        </Routes>
      </Router>  
  );
}

export default App;