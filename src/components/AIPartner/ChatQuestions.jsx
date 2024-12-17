import React from 'react';
import Form from 'react-bootstrap/Form';
import ChatQuestionsScss from '../../assets/scss/component/AIPartner/chatQuestions.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const ChatQuestions = () => {
  useDynamicCSS(ChatQuestionsScss);
  
    const questions = [
        "What stocks to buy today?",
        "What is dollar-cost averaging, and how does it work?",
        "What are some common mistakes to avoid when investing?",
        "Is real estate a good investment compared to stocks or bonds?",
        "How can I minimize taxes on my investments?",
    ]

  return (
    <>
    <div className="question-area">
        {questions?.map((value,index)=> (
            <Form.Control className='questions' type="button" value={value} key={index} />
        ))}
    </div>
    </>
  )
}

export default ChatQuestions