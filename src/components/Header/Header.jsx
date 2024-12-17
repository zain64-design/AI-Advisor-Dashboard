import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderScss from '../../assets/scss/layout/header.scss?inline';
import userProfile from '/images/user.png';
import useScrollNav from '../../utils/hooks/useScrollNav';
import { RxHamburgerMenu } from "react-icons/rx";
import useAOS from '../../utils/hooks/useAOS';
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const Header = () => {
    useDynamicCSS(HeaderScss);

    const scrolled = useScrollNav();
    useAOS();

    return (
        <header data-aos="fade-down" className={`${scrolled ? 'sticky' : ''}`}>
            <Navbar expand="sm">
                <Container fluid className='px-2 px-sm-5 px-md-5 px-lg-5 px-xl-5 px-xxl-5'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <RxHamburgerMenu />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-wrap align-items-center justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between justify-content-xxl-between w-100 gap-3">
                        <li className="nav-item">
                                <div className="user-details">
                                    <h6><span>Hi,</span> Welcome Daniel</h6>
                                    <p>Manage Your Investment</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/settings" className="user-profile-area">
                                    <img src={userProfile} className="img-fluid" alt="Profile" />
                                    <div className="desc">
                                        <h6>Daniel Dave</h6>
                                        <span>danieldave@email.com</span>
                                    </div>
                                </NavLink>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
