import React from 'react';
import './App.css';

//Components
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListCointainer from './ItemListCointainer';


class App extends React.Component {
render() {
  return (
    <div>
      <Header />
      <div className='d-flex'>
        <NavBar />
      </div>
      <div className='d-flex'>
        <div className='px-5'>
          <ItemListCointainer 
          greeting='ITEM 1'
          />
        </div>
        <div className='px-5'>
          <ItemListCointainer 
          greeting='ITEM 2'
          />
        </div>
        <div className='px-5'>
          <ItemListCointainer 
          greeting='ITEM 3'
          />
        </div>
      </div>
    </div>
  )
}
}

export default App;