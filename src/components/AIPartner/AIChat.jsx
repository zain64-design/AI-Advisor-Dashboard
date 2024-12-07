import React from 'react'
import ChatLogo from './ChatLogo'
import { Card, Form } from 'react-bootstrap'
import ChatQuestions from './ChatQuestions'
import ChatSend from './ChatSend'
import '../../assets/scss/component/AIPartner/aiChatBox.scss'

const AIChat = () => {
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