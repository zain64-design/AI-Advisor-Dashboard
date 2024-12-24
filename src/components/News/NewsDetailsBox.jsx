import React from 'react'
import Image from '../UI/Image'
import Text from '../UI/Text';
import Author from './Author';
import '../../assets/scss/component/news/newsDetailBox.scss'
import { Link } from 'react-router';

const NewsDetailsBox = (newsData) => {

    const { thumbnail, title, authImg, authName, content } = newsData;

    return (
        <>
            <div className="news-box">
                <figure>
                    <Link to='/news' className='back-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
                            <path d="M11.5 2L2.5 11M2.5 11L11.5 20M2.5 11L23.5 11" stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </Link>
                    <Image src={thumbnail} />
                </figure>
                <Text as='h4'>{title}</Text>
                <Author authImg={authImg} authName={authName} />
                <div className="desc">
                    {content?.map((desc) => {
                        const { id, para } = desc;
                        return (

                            <Text as='p' key={id}>{para}</Text>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default NewsDetailsBox