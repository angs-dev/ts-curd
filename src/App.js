import React from 'react';
import { Route , Link } from 'react-router-dom';
import StorePage from '../src/components/store/Storepage';
import CustomerForm  from '../src/components/customer/CustomerForm';
import SearchStoreForm  from '../src/components/store/SearchStoreForm';
import StoreForm from '../src/components/store/StoreForm';
import StoreCustomerCount from '../src/components/customer/StoreCustomerCount';
import Login from '../src/components/login/LoginPage';
import StoreCustomerDetails from '../src/components/store/StoreCustomerDetails';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class App extends React.Component {
   
    render() {
      console.log(localStorage.getItem('jwtToken'));
          return (
            <div>
          
          { 
            localStorage.getItem('jwtToken') ?
          <div className="ui container">
                  <div className="ui six item menu">
                    <Link className="item" to="/stores">Home</Link>
                    <Link className="item" to="/search/store">Stores</Link>
                    <Link className="item" to="/customer/new">Add New Customer</Link>
                    <Link className="item" to="/count/customer/store">Store Customer Count</Link>
                    <Link className="item" to="/details/customer/store">Customer Details under store</Link>
                </div>
              <Route exactly path="/stores" component={StorePage} />
              <Route exactly path="/search/store" component={SearchStoreForm} />
              <Route  path="/customer/new" component={CustomerForm} />
              <Route exactly path="/store/:ID" component={StoreForm} />
              <Route exactly path="/count/customer/store" component={StoreCustomerCount} />
              <Route exactly path="/details/customer/store" component={StoreCustomerDetails} />
              </div> 
          : <Route exactly path="/" component={Login} />}
            </div>
          );
        }
}

App.propTypes = {
  auth: PropTypes.array.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App); 


