import {combineReducers} from 'redux';

import store from './reducer/store';
import auth from './reducer/auth';

export default combineReducers ({
    store,
    auth
});