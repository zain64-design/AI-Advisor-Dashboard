import React from 'react'
import Text from '../UI/Text'
import { Link } from 'react-router'
import '../../assets/scss/component/setting/navArea.scss'

const NavArea = ({ title }) => {
    return (
        <>
            <div className="nav-area">
                <Link to='/settings'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                        <path d="M11.0413 2.23956L2.29134 10.4791M2.29134 10.4791L11.0413 18.7186M2.29134 10.4791L22.708 10.4791" stroke="#3B90AA" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </Link>
                <Text as='h6'>{title}</Text>
            </div>
        </>
    )
}

export default NavArea