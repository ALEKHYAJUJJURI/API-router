import React from 'react';
import ReactDOM from 'react-dom/client';

import { HandleIndex } from './components/fakestore-index';
import { Router } from 'express';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
    <HandleIndex/>
    </Router>
  </React.StrictMode>
);


