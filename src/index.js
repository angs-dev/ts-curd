import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root'

const store = createStore(
    rootReducer,
    composeWithDevTools (
        applyMiddleware(thunk)
    )
);

ReactDOM.render(<Root store={store} />,
 document.getElementById('root'));

serviceWorker.unregister();
