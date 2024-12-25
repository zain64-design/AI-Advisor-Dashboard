import React, { useState } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import Text from '../UI/Text'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { MdError } from "react-icons/md";
import { Link, NavLink } from 'react-router';
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import '../../assets/scss/component/Auth/loginForm.scss'

const LoginForm = () => {

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const passwordToggle = () => {
    setPasswordVisible(!isPasswordVisible);
  }

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = values => {
    // console.log('Submitting form', values);
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required')
      .matches(/[a-zA-Z]/, 'Password must contain both letters and numbers'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })


  // console.log('visited', formik.touched);

  return (
    <>
      <Card className='login-form'>
        <div className="form-head">
          <Text as='h6'>Welcome</Text>
          <Text as='p'>Please enter your credentials to continue</Text>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" className='ct-inp' name="email" placeholder='Enter Your Email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? <small className='d-none'>{formik.errors.email}<MdError /></small> : null}
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area position-relative">
                <Form.Label>Password</Form.Label>
                <Form.Control type={isPasswordVisible ? 'text' : 'password'} className='ct-inp' name="password" placeholder='Enter Your Password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                <Button type="button" variant='toggle' onClick={passwordToggle}>{isPasswordVisible ? <PiEyeLight /> : <PiEyeSlash />}</Button>
                {formik.touched.password && formik.errors.password ? <small className='d-none'>{formik.errors.password}<MdError /></small> : null}
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Text as='span'>Forgot your password? <Link to='/forgot-password'>Reset Now</Link> </Text>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              {/* <Button type='submit' variant='submit'>
                sign in
              </Button> */}
              <NavLink className='btn-submit' to='/dashboard'>sign in</NavLink>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Text as='span'>Don’t have an account? <Link to='/sign-up'>Sign Up</Link> </Text>
            </Form.Group>
          </Row>
        </Form>
      </Card>
    </>
  )
}

export default LoginForm