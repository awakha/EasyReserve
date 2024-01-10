import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
