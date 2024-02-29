import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App.jsx';

if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/*' element={<App />} />
        </Routes>
    </BrowserRouter>
)
