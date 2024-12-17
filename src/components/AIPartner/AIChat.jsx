import React from 'react'
import ChatLogo from './ChatLogo'
import { Card, Form } from 'react-bootstrap'
import ChatQuestions from './ChatQuestions'
import ChatSend from './ChatSend'
import AIChatScss from '../../assets/scss/component/AIPartner/aiChatBox.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS'

const AIChat = () => {
  useDynamicCSS(AIChatScss);
  
  return (
    <>
    <Card className="ai-chat-box">
        <Form>
            <ChatLogo/>
            <ChatQuestions/>
            <ChatSend/>
        </Form>
    </Card>
    </>
  )
}

export default AIChat