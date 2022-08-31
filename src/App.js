import React from 'react';
import './App.css';

//Components
import ItemCount from './components/ItemCount/ItemCount';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListCointainer from './components/ItemListContainer/ItemListCointainer';



const App = () => {
  return (
    <div>
      <Header />
      <div className='d-flex'>
        <NavBar />
      </div>
      <div className=''>
        <div className='px-5'>
          <ItemListCointainer />
        </div>
        <div>
          <ItemCount stock={25} initial={1} />
        </div>
      </div>
    </div>
  )
}

export default App