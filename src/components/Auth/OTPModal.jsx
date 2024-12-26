import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button,Form } from 'react-bootstrap';
import Text from '../UI/Text'
import Image from '../UI/Image'
import messageIcon from '/images/icons/message-icon.svg'
import '../../assets/scss/component/modal/otpModal.scss'
import { InputOtp } from 'primereact/inputotp';

const OTPModal = ({showOTPModal,handleCloseOTPModal}) => {

        const [token, setToken] = useState('');

        const customInput = ({ events, props }) => (
            <input {...events} {...props} type="text" className="custom-otp-input" />
        );
    
    return (
        <>
            <Modal size="lg" className='otp-modal' show={showOTPModal} onHide={handleCloseOTPModal} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <div className="reset-area">
                        <figure>
                            <Image src={messageIcon} className='icon-lock' />
                        </figure>
                        <Text as='h6'>Verification</Text>
                        <Text as='p'>Please enter the code we emailed you at</Text>
                        <Text as='p'>example@site.com</Text>

                        <div className="otp-number-area">
                            <Form>
                            <InputOtp
                                    value={token}
                                    onChange={(e) => setToken(e.value)}
                                    inputTemplate={customInput}
                                    integerOnly
                                    numInputs={4} // Set the number of OTP inputs
                                />
                            </Form>
                        </div>

                        <Text as='small'>Didn’t receive code? <Button type="button" variant='resend'>Resend code</Button></Text>
                    </div>
                    <Modal.Footer>
                        <Button variant="okay" onClick={handleCloseOTPModal}>
                            Okay
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default OTPModal