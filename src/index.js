import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';


//function logger(obj,next,action)
//logger(obj)(next)(action) --> using the concept of curried function
// const logger = function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       //middleware code
//       console.log('ACTION_TYPE=',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action !== 'function')
  console.log("ACTION_TYPE = ", action.type);
  next(action);
}

// //We are using middleware to pass dispatch as arguement
// //Thunk is a special kind of function which is returned by a function
// const thunk = ({dispatch, getState}) => (next) => (action) => {
// //We are telling redux if you get an action just pass it to the reducer 
// //but if you get a function then just call that function with dispatch as its arguement
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// } 

//Creating Store using Redux
const store = createStore(rootReducer, applyMiddleware(logger,thunk));
console.log('store', store);
// console.log('Before STATE',store.getState());

// //Sending actions to the reducers using dispatch
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name:'superman'}]
// });
// console.log('After STate', store.getState());

// export const StoreContext = createContext();

// console.log('StoreContext', StoreContext);

// class Provider extends React.Component {
//   render(){ 
//     const {store} = this.props;
//     return <StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//   }
// }

// export function connect(callback){
//   return function(Component){
//      class ConnectedComponent extends React.Component {
//         constructor(props){
//           super(props);
//           this.unsubscribe = this.props.store.subscribe(()=> this.forceUpdate());
//         }
//         componentWillUnmount(){
//           this.unsubscribe();
//         }
//         render(){
//             const { store } = this.props;
//             const state = store.getState();
//             const dataToBePassedAsProps = callback(state);
//             return (
//                 <Component {...dataToBePassedAsProps} dispatch= {store.dispatch} />
//             );
//           };
//       }
//       class ConnectedComponentWrapper extends React.Component {
//         render(){
//           return (
//             <StoreContext.Consumer>
//               {(store) => <ConnectedComponent store={store} />}
//             </StoreContext.Consumer>
//           );
//         }
//       }
//       return ConnectedComponentWrapper;
//     }
//   }
  
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


