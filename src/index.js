import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import { dbService } from './service/fbase';

const db = dbService;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App db={db} />
  </React.StrictMode>
);

