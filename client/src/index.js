import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import cartReducer from '../src/components/shop/reducers/cartreducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
// // help app work offline and load faster
 serviceWorker.register();