import React from 'react';
import { Link, Route  } from 'react-router-dom';
import StorePage from './Storepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <p>
         <Link to="stores">Stores</Link>
        </p>
       <Route  path="/stores" component={StorePage}/>
      </div>
      </header>
      
    </div>
  );
}

export default App;
