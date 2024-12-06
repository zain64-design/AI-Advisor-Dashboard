import React from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import Text from '../UI/Text'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { MdError } from "react-icons/md";
import { Link } from 'react-router';
import '../../assets/scss/component/Auth/authForm.scss'
import FormHead from './FormHead';

const LoginForm = () => {

  const initialValues = {
    name: '',
    email: '',
  }

  const onSubmit = values => {
    console.log('Submitting form', values);
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  // console.log('visited', formik.touched);

  return (
    <>
      <Card className='auth-form'>
        <FormHead/>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" className='ct-inp' name="email" placeholder='Enter Your Email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? <small>{formik.errors.email}<MdError /></small> : null}
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" className='ct-inp' name="name" placeholder='Enter Your Password' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name ? <small>{formik.errors.name}<MdError /></small> : null}
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Text as='span'>Forgot your password? <Link>Reset Now</Link> </Text>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Button type='submit' variant='submit'>
                sign in
              </Button>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Text as='span'>Don’t have an account? <Link>Sign Up</Link> </Text>
            </Form.Group>
          </Row>
        </Form>
      </Card>
    </>
  )
}

export default LoginForm