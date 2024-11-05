import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import AppLayout from './components/AppLayout.jsx';
import appRouter from './Router/appRouter.jsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}  />
  </StrictMode>
)
