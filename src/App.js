import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Catalog from './Catalog';
import Contacts from './Contacts';
import Home from './Home';
import Promotions from './Promotions';
import './App.css';

function App(){
  return <Router>
      <div>
      <nav className='container'>
          <Link to='/' className='link main-link'>Фруктовая лавка</Link>
          <div className='container'>
          <Link to='/catalog' className='link'>Каталог</Link>
          <Link to='/promotions' className='link'>Акции</Link>
          <Link to='/contacts' className='link'>Контакты</Link>
          </div>
      </nav>
      </div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/promotions' element={<Promotions/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      
  </Router>
}
export default App;