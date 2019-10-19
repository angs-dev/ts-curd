import React from 'react';
import { Route , Link } from 'react-router-dom';
import StorePage from '../store/Storepage';
import CustomerForm  from '../customer/CustomerForm';
import SearchStoreForm  from '../store/SearchStoreForm';
import StoreForm from '../store/StoreForm';
import StoreCustomerCount from '../customer/StoreCustomerCount';
import Login from '../login/LoginPage';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Home extends React.Component {

  
   
    render() {
      
          return (
            <div>
              { this.props.auth.isAuthenticated ? <div className="ui container">
                  <div className="ui six item menu">
                    <Link className="item" to="/stores">Home</Link>
                    <Link className="item" to="/search/store">Stores</Link>
                    <Link className="item" to="/customer/new">Add New Customer</Link>
                    <Link className="item" to="">Update Store</Link>
                    <Link className="item" to="/count/customer/store">Store Customer Count</Link>
                </div>
          
                
              <Route exactly path="/stores" component={StorePage} />
              <Route exactly path="/search/store" component={SearchStoreForm} />
              <Route  path="/customer/new" component={CustomerForm} />
              <Route exactly path="/store/:ID" component={StoreForm} />
              <Route exactly path="/count/customer/store" component={StoreCustomerCount} />
              </div> : <Route exactly component={Login}  /> } <Route exactly component={Login}  /> }
            </div>
          )
        }
}

Home.propTypes = {
  auth: PropTypes.array.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Home); 


