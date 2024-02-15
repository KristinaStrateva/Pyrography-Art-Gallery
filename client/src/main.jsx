import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Router>
            <Route path='/*' element={<App />} />
        </Router>
    </BrowserRouter>
)
