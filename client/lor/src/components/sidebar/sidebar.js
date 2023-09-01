import React from "react";
import "./sidebar.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import logo from "../../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";

// import 'react-pro-sidebar/dist/css/styles.css';

const SidebarCustom = () => {
  const [which, setWhich] = React.useState("");
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  const navigate = useNavigate();
  function home() {
    setWhich("home");
    navigate("/home");
  }
  function lor() {
    setWhich("lor_request");
    navigate("/lor_request");
  }
  function admission() {
    setWhich("upload_admission_letter");
    navigate("/upload_admission_letter");
  }
  function search() {
    setWhich("search");
    navigate("/search");
  }
  React.useEffect(() => {
    setWhich(window.location.href.split("/").pop());
  }, []);
  console.log();
  return (
    <Sidebar
      className="sidebar"
      style={{ position: "fixed", top: "0", bottom: "0" }}
    >
      <Menu>
        <img src={logo} style={{ width: "18rem" }} alt="" />
      </Menu>
      <Menu claasName="sidebar__menu">
        <MenuItem
          onClick={() => {
            home();
          }}
        >
          <div
            className={
              which === "home" || which === "" ? "active" : "menu-item"
            }
          >
            &nbsp; Home
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            lor();
          }}
        >
          <div className={which === "lor_request" ? "active" : "menu-item"}>
            &nbsp; LOR Request
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            admission();
          }}
        >
          <div
            className={
              which === "upload_admission_letter" ? "active" : "menu-item"
            }
          >
            &nbsp; Upload Admission letter
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            search();
          }}
        >
          <div className={which === "search" ? "active" : "menu-item"}>
            &nbsp; Search
          </div>
        </MenuItem>
      </Menu>
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu
        style={{
          width: "100%",
        }}
      >
        <MenuItem onClick={logout}>
          <div className="logout">Logout</div>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarCustom;
