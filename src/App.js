import React from 'react';
import './App.css';

//Components
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

class App extends React.Component {
render() {
  return (
    <div>
      <Header />
      <NavBar />
    </div>
  )
}
}

export default App;