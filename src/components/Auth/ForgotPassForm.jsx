import React ,{useState} from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import Text from '../UI/Text'
import { Link } from 'react-router';
import ResetLinkModal from './ResetLinkModal';
// import useModal from '../../utils/hooks/useModal';
import '../../assets/scss/component/Auth/forgotPassForm.scss'
import OTPModal from './OTPModal';

const ForgotPassForm = () => {

        const [showResetModal, setShowResetModal] = useState(false);
        const [showOTPModal, setShowOTPModal] = useState(false);

        const handleShowResetModal = () => setShowResetModal(true);
        const handleCloseResetModal = () => {
            setShowResetModal(false);
            setShowOTPModal(true);
        }

        const handleCloseOTPModal = () => setShowOTPModal(false);

    return (
        <>
            <Card className='forgot-form'>
                <div className="form-head">
                    <div className="ct-flex">
                        <Link to='/' className='back-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                <path d="M11.0418 2.32263L2.29183 10.5622M2.29183 10.5622L11.0418 18.8017M2.29183 10.5622L22.7085 10.5622" stroke="#3B90AA" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </Link>
                        <Text as='h6'>Forgot Password?</Text>
                    </div>
                    <Text as='p'>Please enter the email you use to sign in and we will send you resent link.</Text>
                </div>
                <Form>
                    <Row>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="inp-area">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" className='ct-inp' name="email" placeholder='Enter Your Email' />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Button type='button' onClick={handleShowResetModal} variant='submit'>submit</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Card>

            <ResetLinkModal showResetModal={showResetModal} handleCloseResetModal={handleCloseResetModal}/>
            <OTPModal showOTPModal={showOTPModal} handleCloseOTPModal={handleCloseOTPModal}/>
        </>
    )
}

export default ForgotPassForm