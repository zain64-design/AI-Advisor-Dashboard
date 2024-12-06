import React from 'react';
import { NavLink } from 'react-router';
import Logo from '/images/logo-header.png';
import Logosm from '/images/sm-logo.png';
import Image from '../UI/Image';
import useSideBarToggle from '../../utils/hooks/useSideBarToggle';
import '../../assets/scss/layout/sidebar.scss'
import Links from './Links';

const SideBar = () => {

    const [isSidebarOpen,toggleSidebar] = useSideBarToggle(null);

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
                        {/* <Image src={Logosm} className="thumb-sm" alt="logo" /> */}
                    </NavLink>
                </div>
            </div>
            <div className="menu-main">
                <div className="menu-area">
                    <Links/>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
