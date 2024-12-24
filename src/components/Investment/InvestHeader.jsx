import React from 'react'
import { Link } from 'react-router'
import Text from '../UI/Text'
import { FaArrowLeft } from "react-icons/fa6";

const InvestHeader = ({heading}) => {
    return (
        <>
            <div className="invest-header">
                <Link to='/dashboard'>
                    <FaArrowLeft />
                </Link>
                <Text as='h6'>{heading}</Text>
            </div>
        </>
    )
}

export default InvestHeader