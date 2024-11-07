import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '/images/logo-header.png';
import Logosm from '/images/sm-logo.png';
import Image from '../UI/Image';
import { BiSolidDashboard } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { RiAdminLine,RiDashboardHorizontalLine } from "react-icons/ri";

const SideBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <aside className={`side-bar ${isSidebarOpen ? 'open' : 'sidebar-close'}`}>
            <button className="side-bar-toggle" onClick={toggleSidebar}>
                <i className="fa-regular fa-chevron-right arrow-ct"></i>
            </button>
            <div className="side-top">
                <div className="side-logo">
                    {/* NavLink for the logo */}
                    <NavLink to="/">
                        <Image src={Logo} className="thumb-xl" alt="logo" />
                        <Image src={Logosm} className="thumb-sm" alt="logo" />
                    </NavLink>
                </div>
            </div>
            <div className="menu-main">
                <div className="menu-area">
                    <ul className="main-ul">
                        <li className="mn-item">
                            <NavLink to="/" className="mn-link">
                                <span className="icons">
                                <RiDashboardHorizontalLine />
                                </span>
                                <span className="link-txt">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="mn-item">
                            <NavLink to="/admin-management" className="mn-link" activeClassName="mn-active">
                                <span className="icons">
                                <RiAdminLine />
                                </span>
                                <span className="link-txt">Admin Management</span>
                            </NavLink>
                        </li>
                        <li className="mn-item">
                            <NavLink to="/settings" className="mn-link" activeClassName="mn-active">
                                <span className="icons">
                                    <SlSettings />
                                </span>
                                <span className="link-txt">Settings</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
