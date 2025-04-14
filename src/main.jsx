import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { clientId } from './data/constant';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { createStore } from 'react-auth-kit';

import AuthProvider from 'react-auth-kit';


const Authstore = createStore({
  authName: 'token', 
  authType: 'cookie', 
  cookieDomain: window.location.hostname, 
  cookieSecure: window.location.protocol === 'https:', 
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider store={Authstore}>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </AuthProvider>
  </StrictMode>
)
