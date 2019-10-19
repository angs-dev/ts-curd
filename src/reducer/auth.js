import { SET_AUTH } from '../actions/authActions';


const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_AUTH:
      console.log('store', action);
      return {
        isAuthenticated: action && action.user ? true : false,
        user: action.user
      };
    default: return state;
  }
}