import React from 'react';
import { Link, Route  } from 'react-router-dom';
import StorePage from './Storepage';
import CustomerForm  from './CustomerForm';
import './App.css';

function App() {
  return (


      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/stores">Stores</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/customer/new">Add New Customer</Link>
      </div>

    <Route exactly path="/stores" component={StorePage} />
    <Route  path="/customer/new" component={CustomerForm} />
</div>
  );
}

export default App;
