
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GeneralContextProvider } from './components/GeneralContext.jsx'
import "./index.css";
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
  </StrictMode>,
  document.getElementById("root")
)

