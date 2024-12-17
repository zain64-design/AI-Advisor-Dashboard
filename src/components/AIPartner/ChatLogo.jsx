import React from 'react'
import chatLogo from '/images/ai-bot.svg';
import Image from '../UI/Image'
import Text from '../UI/Text'
import '../../assets/scss/component/AIPartner/chatLogo.scss'

const ChatLogo = () => {
    return (
        <>
            <div className="top-bar">
                <figure className='chat-logo'>
                    <Image src={chatLogo} className='logo' alt='chat-logp' />
                </figure>
                <div className="desc">
                    <Text as='h6'>AI Investment Partner</Text>
                </div>
            </div>
        </>
    )
}

export default ChatLogo