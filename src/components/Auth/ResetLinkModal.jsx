import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Text from '../UI/Text'
import Image from '../UI/Image'
import lockIcon from '/images/icons/lock-icon.svg'
import '../../assets/scss/component/Modal/resetLinkModal.scss'

const ResetLinkModal = ({ showResetModal, handleCloseResetModal }) => {
    return (
        <>
            <Modal size="lg" className='reset-link-modal' show={showResetModal} onHide={handleCloseResetModal} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <div className="reset-area">
                        <figure>
                            <Image src={lockIcon} className='icon-lock' />
                        </figure>
                        <Text as='h6'>Reset Link Sent!</Text>
                        <Text as='p'>Password reset link has been sent to bru*****n@gmail.com please check your email and follow the instructions</Text>
                    </div>
                    <Modal.Footer>
                        <Button variant="okay" onClick={handleCloseResetModal}>
                            Okay
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ResetLinkModal