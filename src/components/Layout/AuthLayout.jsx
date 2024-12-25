import React from 'react'
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
    <div className='auth-area'>
      <Outlet />
    </div>
    </>
  )
}

export default AuthLayout