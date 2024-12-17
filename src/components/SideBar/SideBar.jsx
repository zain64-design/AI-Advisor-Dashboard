import React from 'react';
import { NavLink } from 'react-router';
import Logo from '/images/logo-header.png';
import Image from '../UI/Image';
import useSideBarToggle from '../../utils/hooks/useSideBarToggle';
import SideBarScss from '../../assets/scss/layout/sidebar.scss?inline'
import Links from './Links';
import useAOS from '../../utils/hooks/useAOS';
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';
import { FaChevronRight } from "react-icons/fa6";

const SideBar = () => {
    useDynamicCSS(SideBarScss);
    useAOS();

    const [isSidebarOpen,toggleSidebar] = useSideBarToggle(null);

    return (
        <aside data-aos="fade-right" className={`side-bar ${isSidebarOpen ? 'sidebar-close' : 'sidebar-open'}`}>
            <button className="side-bar-toggle" onClick={toggleSidebar}>
            <FaChevronRight />
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
