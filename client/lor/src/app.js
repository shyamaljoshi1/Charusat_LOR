import React, { useState, useEffect, createContext } from "react";
import SidebarCustom from "./components/sidebar/sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/home/home";
import LorRequest from "./pages/lor_request/lor_request";
import Login from "./pages/login/login";
import LorFormat from "./pages/lor_format/lorFormat";
import UploadAdmissionLetter from "./pages/UploadAdmissionLetter/UploadAdmissionLetter.js";
import Search from "./pages/search/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AlertContext = createContext({
  setOpen: () => {},
  setDesc: () => {},
  setType: () => {},
});
const App = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

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
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authenticatoin has been failed");
        })
        .then((resObj) => {
          setUser(resObj.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  
  useEffect(() => {
    if (open) {
      
      if (type === "error") {
        
        toast.error(desc, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (type === "success") {
        toast.success(desc, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (type === "warn") {
        toast.warn(desc, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (type === "info") {
        toast.info(desc, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
    setOpen(false);
  }, [open]);
  const getAllData = (obj) => {
    console.log(obj);
    return obj;
  };
  const allData = getAllData;
  return (
    <ProSidebarProvider>
      <BrowserRouter>
        <AlertContext.Provider value={{ setOpen, setDesc, setType }}>
          {/* for implementation */}
          {/* {user && <SidebarCustom />}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={user ? <Home /> : <Login />} />
                    <Route path="/" element={user ? <Home /> : <Login />} />
                    <Route path="/lor_request" element={user ? <LorRequest /> : <Login />} />
                </Routes> */}

          {/* for tesiting */}

          <ToastContainer />
          <SidebarCustom />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/lor_request"
              element={<LorRequest getAllData={getAllData} />}
            />
            <Route
              path="/lor_format"
              element={<LorFormat allData={allData} />}
            />
            <Route
              path="/upload_admission_letter"
              element={<UploadAdmissionLetter />}
            />
            <Route path="/search" element={<Search />} />
          </Routes>
        </AlertContext.Provider>
      </BrowserRouter>
    </ProSidebarProvider>
  );
};

export default App;
