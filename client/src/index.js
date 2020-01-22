import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.interceptors.request.use( (config) => {
  const access_token = localStorage.getItem('access_token')
  if (access_token){
    config.headers.access_token = access_token
  }

  return config
}) 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root')
);
