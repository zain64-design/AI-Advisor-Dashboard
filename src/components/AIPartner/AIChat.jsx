import React, { useState } from 'react'
import ChatLogo from './ChatLogo'
import { Card, Form } from 'react-bootstrap'
import ChatQuestions from './ChatQuestions'
import ChatSend from './ChatSend'
import '../../assets/scss/component/AIPartner/aiChatBox.scss'
import InfoArea from './InfoArea'

const AIChat = () => {

  const [showInfoArea, setShowInfoArea] = useState(false);
  const [isChatSendClicked, setIsChatSendClicked] = useState(false); 

  const toggleInfoArea = () => {
    setShowInfoArea(!showInfoArea);
    if (showInfoArea) {
      setIsChatSendClicked(false);
    }
  }
  const handleChatSendClick = () => {
    if (!isChatSendClicked) {
      setIsChatSendClicked(true);
      toggleInfoArea(true);
    }
  };
  return (
    <>
      <Card className="ai-chat-box">
        <Form>
          {!showInfoArea && (
            <>
              <ChatLogo />
              <ChatQuestions />
            </>
          )}
          {showInfoArea && <InfoArea onToggleInfoArea={toggleInfoArea} />}
          <ChatSend onChatSendClick={handleChatSendClick} />
        </Form>
      </Card>
    </>
  )
}

export default AIChat