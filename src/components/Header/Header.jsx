import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isNavCollapsed, setNavCollapsed] = useState(true);

    const toggleNavbar = () => {
        setNavCollapsed(!isNavCollapsed);
    };

    return (
        <header>
            <nav className="navbar navbar-expand">
                <div className="container-fluid px-2 px-sm-5 px-md-5 px-lg-5 px-xl-5 px-xxl-5">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={toggleNavbar} 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded={!isNavCollapsed} 
                        aria-label="Toggle navigation"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div 
                        className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} 
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav flex-wrap justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between justify-content-xxl-between ms-auto w-100">
                            <li className="nav-item">
                                <div className="user-details">
                                    <h6><span>Hi,</span> Ron Steve</h6>
                                    <p>Let’s manage Properties!</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/settings" className="user-profile-area">
                                    <img src="assets/images/profile.png" className="img-fluid" alt="Profile"/>
                                    <div className="desc">
                                        <h6>Ron Steve</h6>
                                        <span>Super Admin</span>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
