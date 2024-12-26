import React from 'react'
import { Link } from 'react-router';
import Text from '../UI/Text'
import Image from '../UI/Image'
import { Card } from 'react-bootstrap';
import { HiArrowUpRight } from "react-icons/hi2";
import Author from './Author'
import '../../assets/scss/component/news/newsCard.scss';

const NewsCard = ({ newsData }) => {

    const {id, thumbnail, title, authName, authImg } = newsData;

    return (
        <>
            <Card className='news-card'>
                <figure>
                    <Image src={thumbnail} className="news-img" alt='news' />
                </figure>
                <div className="desc">
                    <Text as="h6">{title}</Text>
                    <Author authImg={authImg} authName={authName} />
                    <Link to={`/news-detail/${id}`} className="btn read-btn">read more <HiArrowUpRight /></Link>
                </div>
            </Card>
        </>
    )
}

export default NewsCard