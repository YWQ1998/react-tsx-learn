import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { overwriteDefaultConfig } from "choerodon-ui/dataset";
import defaults from "choerodon-ui/lib/configure/default";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
overwriteDefaultConfig(defaults);