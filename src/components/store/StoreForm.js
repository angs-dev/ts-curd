
import React from 'react';
import classnames from 'classname';
import {saveStore, fetchStore, searchStore} from '../../actions/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';



class StoreForm extends React.Component {
    
state = {
    ID: this.props.match.params.ID,
    Status: this.props.store ? this.props.store.Status : null,
    Name: this.props.store ? this.props.store.Name : null,
    Phone: this.props.store ? this.props.store.Phone : null,
    State: this.props.store ? this.props.store.State : null,
    Domain: this.props.store ? this.props.store.Domain : null, 
    Street: this.props.store ? this.props.store.Street : null,
    errors: {},
    loading: false,
    done: false
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
        Status: nextProps.store ? nextProps.store.Status : null,
        Name: nextProps.store ?  nextProps.store.Name : null,
        Phone: nextProps.store ? nextProps.store.Phone : null,
        State: nextProps.store ? nextProps.store.State : null,
        Domain: nextProps.store ? nextProps.store.Domain : null, 
        Street: nextProps.store ? nextProps.store.Street : null,
    });
  }

  componentDidMount = () => {
    if (this.props.match.params.ID) {
      this.props.searchStore({'storeId': this.props.match.params.ID});
    }
  }
  


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
    if (this.state.Street === null) errors.Street ="can't be empty";
    if (this.state.Name === null) errors.Name ="can't be empty";
    if (this.state.Phone === null) errors.Phone ="can't be empty";
    if (this.state.Domain === null) errors.Domain ="can't be empty";
    if (this.state.Status === null) errors.Status ="can't be empty";
    if (this.state.State === null) errors.State ="can't be empty";
    this.setState({ errors })

    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      const { ID, Street, Name, Phone, Domain, Status, State} = this.state;
      this.setState({ loading: true });
      if (ID) {
        this.props.saveStore({ ID, Street, Name, Phone, Domain, Status, State }).then(
            () => { 
                this.props.searchStore({'storeId': this.props.match.params.ID}).then(() => {
                    this.setState({ 
                        done: true 
                        }) 
                })
                
            },
            (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))
          );
      }
     

    }
  };

  render() {
    const form = (
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
          <h1>Update Store</h1>
          
    {!!this.state.errors.global  && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

    <div className={classnames('field', { error: !!this.state.errors.Phone})} >
      <label htmlFor="Phone">Phone</label>
      <input name="Phone" id="Phone" value = {this.state.Phone}   onChange={this.handleChange} />
      <span>{this.state.errors.Phone}</span>
    </div>

    <div className={classnames('field', { error: !!this.state.errors.Name})} >
      <label htmlFor="Name">Name</label>
      <input type= "text" name="Name" id="Name" value = {this.state.Name}  onChange={this.handleChange} />
      <span>{this.state.errors.Name}</span>
    </div>

        
  <div className={classnames('field', { error: !!this.state.errors.Domain})} >
      <label htmlFor="Domain">Domain</label>
      <input name="Domain" id="Domain"  value = {this.state.Domain}  onChange={this.handleChange} />
      <span>{this.state.errors.Domain}</span>
    </div>


    <div className={classnames('field', { error: !!this.state.errors.Status})} >
      <label htmlFor="Status">Status</label>
      <input name="Status" id="Status"  value = {this.state.Status}  onChange={this.handleChange} />
      <span>{this.state.errors.Status}</span>
    </div>


  <div className={classnames('field', { error: !!this.state.errors.Street})} >
      <label htmlFor="Street">Street</label>
      <input name="Street" id="Street"  value = {this.state.Street}  onChange={this.handleChange} />
      <span>{this.state.errors.Street}</span>
    </div>
    

    <div className={classnames('field', { error: !!this.state.errors.State})} >
      <label htmlFor="State">State</label>
      <input name="State" id="State" value = {this.state.State}  onChange={this.handleChange} />
      <span>{this.state.errors.State}</span>
    </div>

      <div className="field">

        <button className="ui primary button">Save</button>

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

function mapStateToProps(state, props) {
    if (props.match.params.ID && state.store[0] && state.store[0].data) {
      return {
        store: state.store[0].data[0]
      }
    }
  
    return { store: null };
  }

export default connect(mapStateToProps, { saveStore, fetchStore, searchStore })(StoreForm);
