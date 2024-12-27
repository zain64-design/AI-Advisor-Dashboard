import React,{useState} from 'react'

const useTwoModal = () => {
            const [showResetModal, setShowResetModal] = useState(false);
            const [showOTPModal, setShowOTPModal] = useState(false);
    
            const handleShowResetModal = () => setShowResetModal(true);
            const handleCloseResetModal = () => {
                setShowResetModal(false);
                setShowOTPModal(true);
            }
    
            const handleCloseOTPModal = () => setShowOTPModal(false);
  return (
    <div>useTwoModal</div>
  )
}

export default useTwoModal