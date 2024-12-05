import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                <SideBar />
                <section className='sec-main'>
                    <div className="container-fluid">
                        <div className="inner-area">
                        {children}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Layout