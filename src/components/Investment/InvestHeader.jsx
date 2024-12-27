import React from 'react'
import { Link } from 'react-router'
import Text from '../UI/Text'
import '../../assets/scss/component/investment/investHeader.scss'

const InvestHeader = ({ heading }) => {
    return (
        <>
            <div className="invest-header">
                <Link to='/dashboard'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                        <path d="M11.0418 2.23956L2.29183 10.4791M2.29183 10.4791L11.0418 18.7186M2.29183 10.4791L22.7085 10.4791" stroke="black" stroke-width="3" strokeLinecap="round" />
                    </svg>
                </Link>
                <Text as='h6'>{heading}</Text>
            </div>
        </>
    )
}

export default InvestHeader