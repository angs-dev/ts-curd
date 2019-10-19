// import React from 'react';
// import TextFieldGroup from '../common/TextFieldGroup';
// //import validateInput from '../../../server/shared/validations/login';
// import { connect } from 'react-redux';
// import { login } from '../../actions/authActions';
// import PropTypes from 'prop-types';

import React from 'react';
import classnames from 'classname';
import { login } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Route  } from 'react-router-dom';
import Home from '../../App';


class LoginForm extends React.Component {
  constructor(){
    super();
  this.state = {
    username: null,
    password: null,
    errors: {},
    loading: false,
    done: false
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
  
  handleSubmit = (e) => {
    e.preventDefault();

    let errors ={};
    if (this.state.username === null) errors.username ="can't be empty";
    if (this.state.password === null) errors.password ="can't be empty";
    this.setState({ errors })

    const isValid = Object.keys(errors).length === 0

   
    if (isValid) {

      const { username, password} = this.state;
      this.setState({ loading: true });
      this.props.login({ username, password}).then(
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
      <div class="ui middle aligned center aligned grid">
        <div class="column" >
    <h2 class="ui image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
         
          
    {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}


   

    <div class="field">
       <div class="ui left icon input">
      <i class="user icon"></i>
      <input type= "text" fluid icon='user' placeholder="User Name" name="username" id="username" value = {this.state.username}  onChange={this.handleChange} />
      <span>{this.state.errors.username}</span>

    </div>

    </div>

    <div class="field">
          <div class="ui left icon input">
      <i class="lock icon"></i>
      <input name="password" id="password"  placeholder="Password" type="password" value = {this.state.password}  onChange={this.handleChange} />
      <span>{this.state.errors.password}</span>
    </div>
    </div>

    <div className="field">

<button  className="ui fluid large teal primary button">Login</button>

</div>

      <div class="ui error message"></div>
    
      </form>
      </div>
      </div>
    );
    return (
     
      <div>
        
        { this.state.done ? < Route component={Home}></Route> : form }
      </div>
       
    );  
  }
}

export default connect(null, { login })(LoginForm);
