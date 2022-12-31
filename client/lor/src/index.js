import React from 'react';
import ReactDOM from 'react-dom/client';
import SidebarCustom from './components/sidebar/sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './globalstyle.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <BrowserRouter>
        <SidebarCustom/>
        <Routes>
          <Route path="/home" element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>
);

