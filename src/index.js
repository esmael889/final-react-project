import React from 'react';
import ReactDOM from 'react-dom/client';
import App from'./Components/App/App';
import reportWebVitals from './reportWebVitals';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MediaContextprovider, { MediaContext } from './Context/MediaStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MediaContextprovider>
      <App/>
    </MediaContextprovider>
  </React.StrictMode>
);

reportWebVitals();
