import React from 'react'
import { Outlet } from "react-router";
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <SideBar />
                <section className='sec-main'>
                    <div className="container-fluid">
                        <div className="inner-area">
                        <Outlet />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Layout