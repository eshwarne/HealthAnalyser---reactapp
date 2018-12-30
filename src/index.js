//Index.js : This is where all things set up! The index.js gets the html of the index.html file, and we use that
//line19 uses Vanilla js to get elements of index.html file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//use redux
import { createStore } from 'redux';
//to interact from react to redux store
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer); // we need to pass inside a reducer.
//a reducer contains the state and actions
//and an action is a javascript object

//wrap provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
