import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../assets/scss/component/AIPartner/chatSend.scss'

const ChatSend = ({onChatSendClick}) => {
    return (
        <>
            <div className="send-area">
                <Form.Control className='chat-inp' type="text" placeholder='Ask your investment question' />
                <Button type='button' variant='send' onClick={onChatSendClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                        <path d="M28.4682 13.0823L2.67044 0.497976C2.44857 0.389749 2.20495 0.333496 1.95808 0.333496C1.06072 0.333496 0.333252 1.06096 0.333252 1.95832V2.00522C0.333252 2.22324 0.359985 2.44046 0.412865 2.65198L2.88749 12.5504C2.95508 12.8208 3.18368 13.0206 3.46064 13.0514L14.3374 14.2599C14.7146 14.3018 14.9999 14.6206 14.9999 15.0002C14.9999 15.3798 14.7146 15.6986 14.3374 15.7404L3.46064 16.949C3.18368 16.9798 2.95508 17.1795 2.88749 17.4499L0.412865 27.3483C0.359985 27.5599 0.333252 27.7771 0.333252 27.9951V28.042C0.333252 28.9394 1.06072 29.6668 1.95808 29.6668C2.20495 29.6668 2.44857 29.6106 2.67044 29.5023L28.4682 16.918C29.2014 16.5604 29.6666 15.816 29.6666 15.0002C29.6666 14.1843 29.2014 13.4399 28.4682 13.0823Z" fill="white" />
                    </svg>
                </Button>
            </div>
        </>
    )
}

export default ChatSend