import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

//Creating Store using Redux
const store = createStore(movies);
console.log('store', store);
// console.log('Before STATE',store.getState());

// //Sending actions to the reducers using dispatch
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name:'superman'}]
// });
// console.log('After STate', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>,
  document.getElementById('root')
);


