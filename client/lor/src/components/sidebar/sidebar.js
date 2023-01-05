import React from "react";
import './sidebar.css';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import logo from '../../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';


// import 'react-pro-sidebar/dist/css/styles.css';


const SidebarCustom = () => {
    const logout = () => {
        window.open('http://localhost:3001/auth/logout', '_self')
    }
    const navigate = useNavigate();
    function home() {
        navigate("/home");
    }
    function lor() {
        navigate("/lor_request");
    }

    return (
        <Sidebar className="sidebar" style={{ position: 'fixed', top: '0', bottom: '0' }}>
            <Menu>
                <img src={logo} style={{ width: '18rem' }} alt="" />
            </Menu>
            <Menu claasName="sidebar__menu">
                <MenuItem className="menu_item" onClick={() => { home() }}>
                    &nbsp; Home
                </MenuItem>
                <MenuItem className="menu_item" onClick={() => { lor() }}>
                    &nbsp; LOR Request
                </MenuItem>
                <MenuItem className="menu_item">
                    &nbsp; Upload Admission letter
                </MenuItem>
                <MenuItem className="menu_item">
                    &nbsp; Search
                </MenuItem>
            </Menu>
            <Menu />
            <Menu />
            <Menu />
            <Menu />
            <Menu>
                <MenuItem className="menu_item" onClick={logout}>
                    Logout
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SidebarCustom;
