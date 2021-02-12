import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterWeb from './_COMPONENTS/_MAIN/_RouterWeb/RouterWeb'
import { Provider } from 'react-redux'
import { storeConfig } from './_STORE'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ storeConfig }>
      <RouterWeb/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
