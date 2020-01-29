import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./providers/AuthProvider";
import { initMiddleware, } from 'devise-axios';
import 'semantic-ui-css/semantic.min.css'
import { TrackProvider } from './providers/TrackProvider';
// initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <TrackProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TrackProvider>
  </AuthProvider>
  , document.getElementById('root')
);
