import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

//Components
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Views/Cart/Cart';

// Views
import Home from './components/Views/Home/Home'
import ComoComprar from './components/Views/ComoComprar/ComoComprar'
import Faq from './components/Views/Faq/Faq'
import Contact from './components/Views/Contact/Contact'
import ItemDetailContainer from './components/Views/ItemDetailContainer/ItemDetailContainer';
import ProductsProvider from './components/ProductsContext/ProductsContext';

const App = () => {
  return (
    <ProductsProvider>
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
      </Router>
    </ProductsProvider>
  )
}

export default App