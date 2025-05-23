import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import AppRoutes from './AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </StrictMode>,
);