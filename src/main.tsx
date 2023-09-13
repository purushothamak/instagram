
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CommentProvider } from './Context/CommentsDatas.context.tsx';
// import './index.css'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommentProvider>
      <App />
    </CommentProvider>
  </React.StrictMode>
);
