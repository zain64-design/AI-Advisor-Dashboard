import React from 'react'
import Text from '../UI/Text'
import { Button } from 'react-bootstrap'
import '../../assets/scss/component/AIPartner/infoArea.scss'

const InfoArea = ({onToggleInfoArea}) => {


  return (
    <>
      <div className="chat-info-area">
        <div className="top-area">
          <Button type='button' variant='back' onClick={onToggleInfoArea}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 22" fill="none">
              <path d="M11.5 2L2.5 11M2.5 11L11.5 20M2.5 11L23.5 11" stroke="black" stroke-width="3" strokeLinecap="round" />
            </svg>
          </Button>
          <Text as='h6'>Best long term investment</Text>
        </div>

        <div className="desc">
          <Text as='p'>Choosing the best long-term investment depends on various factors including your financial goals, risk tolerance, investment horizon, and current market conditions. Here are some popular long-term investment options to consider:</Text>

          <Text as='ul'>
            <Text as='li'> <Text as='span'>Stocks:</Text> Investing in individual companies can offer significant growth potential over the long term. Diversifying your stock investments through index funds or ETFs can help mitigate risk while still providing opportunities for growth.</Text>

            <Text as='li'><Text as='span'>Bonds:</Text> Government or corporate bonds can provide steady income with lower risk compared to stocks. Long-term bonds might offer higher returns, but they are also subject to interest rate risk.</Text>

            <Text as='li'><Text as='span'>Real Estate:</Text> Investing in property can provide rental income and potential appreciation. Real estate can also serve as a hedge against inflation.</Text>

            <Text as='li'><Text as='span'>Mutual Funds and ETFs:</Text> These funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other assets. They can be a good way to achieve diversification and professional management.</Text>

            <Text as='li'><Text as='span'>Retirement Accounts:</Text> Contributing to accounts like a 401(k) or IRA can offer tax advantages and help you build wealth for retirement.</Text>
          </Text>
        </div>
      </div>
    </>
  )
}

export default InfoArea