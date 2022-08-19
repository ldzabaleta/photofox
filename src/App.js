import React from 'react';
import './App.css';

//Components
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import CartWidget from './components/CartWidget/CartIcon';

class App extends React.Component {
render() {
  return (
    <div>
      <Header />
      <NavBar>
        <CartWidget />
      </NavBar>
      
    </div>
  )
}
}

export default App;