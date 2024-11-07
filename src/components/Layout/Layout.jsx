import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
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