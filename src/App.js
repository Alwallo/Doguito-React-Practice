import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Header from './components/Header';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
    <Header></Header> 
      <Routes>
        <Route path='/' element=<Home></Home>></Route>
        <Route path='/sobre' element=<Sobre></Sobre>></Route>
        <Route path='*' element=<Page404></Page404> ></Route>
      </Routes>
    </Router>
  );
}

export default App;