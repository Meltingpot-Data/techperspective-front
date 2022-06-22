import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={`${window.location.origin}/admin`}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
