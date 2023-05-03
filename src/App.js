import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element=<Home></Home>></Route>
        <Route path='/sobre' element=<Sobre></Sobre>></Route>
      </Routes>
    </Router>
  );
}

export default App;
