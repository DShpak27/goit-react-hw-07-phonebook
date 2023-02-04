import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);