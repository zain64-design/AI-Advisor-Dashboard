import React from 'react'
import { Outlet } from "react-router";
import '../../assets/scss/component/Auth/auth.scss'

const AuthLayout = () => {
  return (
    <>
    <section className='auth-area'>
      <Outlet />
    </section>
    </>
  )
}

export default AuthLayout