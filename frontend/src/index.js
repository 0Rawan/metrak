import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.rtl.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


