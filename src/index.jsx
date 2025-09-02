import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
// Polyfill Buffer for libraries (gray-matter) expecting Node.js Buffer (CRA le fournissait via ProvidePlugin)
import { Buffer } from 'buffer';
if (!window.Buffer) {
  window.Buffer = Buffer;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
