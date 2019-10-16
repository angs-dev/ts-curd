import React from 'react';
import logo from './logo.svg';
import { Link, Route  } from 'react-router-dom';
import storePage from './storepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
      <p>
         <Link to="stores">Stores</Link>
        </p>
       <Route  pattern="/stores" component={storePage}/>
      </div>
    </div>
  );
}

export default App;
