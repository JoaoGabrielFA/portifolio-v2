import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'overlayscrollbars/overlayscrollbars.css';
import { 
  OverlayScrollbars, 
  ScrollbarsHidingPlugin, 
  SizeObserverPlugin, 
  ClickScrollPlugin 
} from 'overlayscrollbars';

const root = ReactDOM.createRoot(document.getElementById('root'));
OverlayScrollbars(document.querySelector('body'), {
  overflow: {
    x: 'hidden',
  },
  scrollbars: {
    theme: 'os-theme-light',
    visibility: 'auto',
    autoHide: 'scroll',
    autoHideDelay: 1000,
  }
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);