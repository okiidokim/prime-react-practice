import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import '@/index.css';
import 'primereact/resources/themes/lara-light-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import { router } from '@/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>,
);
