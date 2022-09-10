import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

//Components
// import ItemCount from './components/ItemCount/ItemCount';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Views/Cart/Cart';

// Views
import Home from './components/Views/Home/Home'
import ComoComprar from './components/Views/ComoComprar/ComoComprar'
import Faq from './components/Views/Faq/Faq'
import Contact from './components/Views/Contact/Contact'
import ItemDetailContainer from './components/Views/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className='d-flex'>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/como-comprar' element={<ComoComprar />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:id' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      {/* <div className=''>
            <div className='px-5'>
              <ItemListCointainer />
            </div>
            <div>
              <ItemCount stock={25} initial={1} />
            </div>
          </div> */}
        
    </Router>
  )
}

export default App