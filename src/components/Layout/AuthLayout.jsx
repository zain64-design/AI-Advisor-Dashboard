import React from 'react'
import { Outlet } from "react-router";
import AuthLayoutScss from '../../assets/scss/component/Auth/auth.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const AuthLayout = () => {
  useDynamicCSS(AuthLayoutScss);
  return (
    <>
    <section className='auth-area'>
      <Outlet />
    </section>
    </>
  )
}

export default AuthLayout