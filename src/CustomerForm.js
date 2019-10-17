
import React from 'react';
import classnames from 'classname';
import {saveCustomer} from './actions';
import { connect } from 'react-redux';

class CustomerForm extends React.Component {
  
  state = {
    storeId: null,
    firstName: null,
    lastName: null,
    phone: null,
    emailId: null,
    errors: {},
    loading: false
  };

   handleChange = (e) => {

    if (!!this.state.errors[e.target.name]) {

      let errors = Object.assign({}, this.state.errors);

      delete errors[e.target.name];

      this.setState({

        [e.target.name]: e.target.value,

        errors

      });

    } else {

      this.setState({ [e.target.name]: e.target.value });

    }

  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    let errors ={};
    if (this.state.storeId === null) errors.storeId ="can't be empty";
    if (this.state.firstName === null) errors.firstName ="can't be empty";
    if (this.state.lastName === null) errors.lastName ="can't be empty";
    if (this.state.phone === null) errors.phone ="can't be empty";
    if (this.state.emailId === null) errors.emailId ="can't be empty";
    this.setState({ errors })

    const isValid = Object.keys(errors).length === 0

    if (isValid) {

      const { storeId, firstName, lastName, phone, emailId} = this.state;
      this.setState({ loading: true });
      this.props.saveCustomer({ storeId, firstName, lastName, phone, emailId })
      .then(() => {},
        (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))
      );

    }
  };

  render() {
    return (
        <div>
          <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
              <h1>Add new Customer</h1>
              
        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}


        <div className={classnames('field', { error: !!this.state.errors.storeId})}>

          <label htmlFor="StoreId">StoreId</label>
          <input 
          name="storeId" 
          id="StoreId" 
          value={this.state.storeId} 
          onChange={this.handleChange}
          type = "text"
          />

          <span>{this.state.errors.storeId}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.firstName})} >
          <label htmlFor="Firstname">Firstname</label>
          <input type= "text" name="firstName" id="Firstname" value = {this.state.firstName}  onChange={this.handleChange} />
          <span>{this.state.errors.firstName}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.lastName})} >
          <label htmlFor="Lastname">Lastname</label>
          <input name="lastName" id="Lastname"  value = {this.state.lastName}  onChange={this.handleChange} />
          <span>{this.state.errors.lastName}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.phone})} >
          <label htmlFor="Phone">Phone</label>
          <input name="phone" id="Phone" value = {this.state.phone}   onChange={this.handleChange} />
          <span>{this.state.errors.phone}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.emailId})} >
          <label htmlFor="Email">Email</label>
          <input name="emailId" id="Email" value = {this.state.emailId}  onChange={this.handleChange} />
          <span>{this.state.errors.emailId}</span>
        </div>

          <div className="field">

            <button className="ui primary button">Save</button>

          </div>
          </form>
        </div>
    );  
  }
}

export default connect(null, { saveCustomer })(CustomerForm);
