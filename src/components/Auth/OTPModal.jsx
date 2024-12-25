import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button,Form } from 'react-bootstrap';
import Text from '../UI/Text'
import Image from '../UI/Image'
import messageIcon from '/images/icons/message-icon.svg'
import '../../assets/scss/component/Modal/otpModal.scss'

const OTPModal = ({showOTPModal,handleCloseOTPModal}) => {
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
                        </div>
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