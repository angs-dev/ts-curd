
import React from 'react';
import classnames from 'classname';
import {searchStore} from '../../actions/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class SearchStoreForm extends React.Component {
  constructor(){
    super();
  this.state = {
    storeId: null,
    ID: 'ID',
    NAME: 'NAME',
    errors: {},
    loading: false,
    done: false,
    selectValue: 'NAME'
  };
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

  handleDropDownChange = (e) => {
    this.setState({selectValue:e.target.value});
  }
  
  handleSubmitSearch = (e) => {
    e.preventDefault();
    let errors ={};
    if (this.state.storeId === null) errors.storeId ="can't be empty";
    this.setState({ errors })

    const isValid = Object.keys(errors).length === 0

    if (isValid) {

      const storeId = this.state.storeId;
      const selectValue = this.state.selectValue;
      
      this.setState({ loading: true });
      this.props.searchStore({ storeId, selectValue}).then(
        () => { 
          this.setState({ 
            done: true 
            }) 
        },
        (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))
      );

    }
  };

  render() {
   
    const form = (
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmitSearch}>
          <h1>Sreach store by id and name </h1>
          
    {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

   
    <select value={this.state.selectValue}  onChange={this.handleDropDownChange} >
      <option value={this.state.NAME} >Search by Name</option>
      <option value={this.state.ID} >Search by ID</option>
    </select>

    <div className={classnames('field', { error: !!this.state.errors.storeId})}>

      
      <input 
      name="storeId"
      placeholder="Enter store id or name.."  
      id="StoreId" 
      value={this.state.storeId} 
      onChange={this.handleChange}
      type = "text"
      />

      <span>{this.state.errors.storeId}</span>
    </div>

      <div className="field">

        <button className="ui primary button">Search</button>

      </div>
      </form>
    );
    return (
      <div>
          { this.state.done ? <Redirect to="/stores" /> : form }
      </div>
       
    );  
  }
}

export default connect(null, { searchStore })(SearchStoreForm);
