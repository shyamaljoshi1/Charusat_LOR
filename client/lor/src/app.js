import React, { useState, useEffect } from 'react';
import SidebarCustom from './components/sidebar/sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/home/home';
import LorRequest from './pages/lor_request/lor_request';
import Login from './pages/login/login';

const App = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:3001/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Contenet-type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            }).then(response => {
                if (response.status === 200) return response.json();
                throw new Error("authenticatoin has been failed");
            }).then(resObj => {
                setUser(resObj.user);
            }).catch(err => {
                console.log(err);
            });
        };
        getUser();
    }, []);
    console.log(user);
    return (
        <ProSidebarProvider>
            <BrowserRouter>
                {user && <SidebarCustom />}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={user ? <Home /> : <Login />} />
                    <Route path="/" element={user ? <Home /> : <Login />} />
                    <Route path="/lor_request" element={user ? <LorRequest /> : <Login />} />
                </Routes>
            </BrowserRouter>
        </ProSidebarProvider>);
};

export default App;