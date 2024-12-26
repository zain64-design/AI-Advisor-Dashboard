import React from 'react'
import Image from '../UI/Image'
import Text from '../UI/Text';
import '../../assets/scss/component/recommendation/recommendDetailBox.scss'
import { Link } from 'react-router';

const RecommendDetailsBox = (recommendData) => {

    const { image, head, listDetail,desc } = recommendData;

    return (
        <>
            <div className="recommend-detail-box">
                <figure>
                    <Link to='/recommendation' className='back-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
                            <path d="M11.5 2L2.5 11M2.5 11L11.5 20M2.5 11L23.5 11" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </Link>
                    <Image src={image} />
                </figure>
                <Text as='h4'>{head}</Text>
                <div className="desc">
                    <Text as='ul'>
                    {listDetail?.map((value) => {
                        const { id, item } = value;
                        return (

                            <Text as='li' key={id}>{item}</Text>
                        )
                    })}
                    </Text>

                    {desc?.map((value)=> {
                        const {id,para} = value;
                        return(
                            <Text as="p" key={id}>{para}</Text>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default RecommendDetailsBox