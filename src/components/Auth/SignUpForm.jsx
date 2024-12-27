import React, { useState } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import Text from '../UI/Text'
import { Link, NavLink } from 'react-router';
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import '../../assets/scss/component/auth/signUpForm.scss'

const SignUpForm = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const passwordToggle = () => {
        setPasswordVisible(!isPasswordVisible);
    }
    return (
        <>
            <Card className='signup-form'>
                <div className="form-head">
                    <Text as='h6'>Create An Account</Text>
                </div>
                <Form>
                    <Row>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="inp-area">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" className='ct-inp' name="name" placeholder='Enter Your Full Name' />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="inp-area">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" className='ct-inp' name="email" placeholder='Enter Your Email' />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="inp-area position-relative">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' className='ct-inp' name="password" placeholder='Enter Your Password' />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="inp-area position-relative">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={isPasswordVisible ? 'text' : 'password'} className='ct-inp' name="password" placeholder='Confirm Your Password' />
                                <Button type="button" variant='toggle' onClick={passwordToggle}>{isPasswordVisible ? <PiEyeLight /> : <PiEyeSlash />}</Button>
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            {/* <Button type='submit' variant='submit'>sign in</Button> */}
                            <NavLink className='btn-submit' to='/investment-questionnaire'>Continue</NavLink>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Text as='span'>Already have an account? <Link to='/'>Sign In</Link> </Text>
                        </Form.Group>
                    </Row>
                </Form>
            </Card>
        </>
    )
}

export default SignUpForm