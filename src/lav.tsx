import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LavPage } from './components/LavPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LavPage />
  </StrictMode>,
);
