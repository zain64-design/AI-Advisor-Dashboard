import React from 'react'
import { Link } from 'react-router';
import Text from '../UI/Text'
import Image from '../UI/Image'
import { Col,Card } from 'react-bootstrap';
import { HiArrowUpRight } from "react-icons/hi2";
import Author from './Author'
import thumbnail from '/images/news/n1.svg'
import authImg from '/images/news/user.png'
import '../../assets/scss/component/news/newsCard.scss';



const NewsCard = () => {
    return (
        <>
            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
                <Card className='news-card'>
                    <Image src={thumbnail} className="news-img" alt='news' />
                    <div className="desc">
                        <Text as="h6">Nvidia Holds the Key to the Market. But Is It Worth This Much?</Text>
                        <Author authImg={authImg} authName='James Mark' />
                        <Link className="btn read-btn">read more <HiArrowUpRight /></Link>
                    </div>
                </Card>
            </Col>
        </>
    )
}

export default NewsCard