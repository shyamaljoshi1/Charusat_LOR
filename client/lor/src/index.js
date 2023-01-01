import React from 'react';
import ReactDOM from 'react-dom/client';
import SidebarCustom from './components/sidebar/sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/home';
import LorRequest from './pages/lor_request/lor_request';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <BrowserRouter>
        <SidebarCustom/>
        <Routes>
          <Route path="/home" element={ <Home/> } />
          <Route path="/" element={ <Home/> } />
          <Route path="/lor_request" element={ <LorRequest/> } />
        </Routes>
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>
);

