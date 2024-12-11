import React from 'react'
import { Link } from 'react-router';
import Text from '../UI/Text'
import Image from '../UI/Image'
import { Col,Card } from 'react-bootstrap';
import { HiArrowUpRight } from "react-icons/hi2";
import Author from './Author'
import '../../assets/scss/component/news/newsCard.scss';



const NewsCard = ({filteredNewsData}) => {
    return (
        <>
        {filteredNewsData?.map((data)=> {
            const {id,thumbnail,title,authName,authImg} = data;
            return (
                <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={id}>
                <Card className='news-card'>
                    <figure>
                        <Image src={thumbnail} className="news-img" alt='news' />
                    </figure>
                    <div className="desc">
                        <Text as="h6">{title}</Text>
                        <Author authImg={authImg} authName={authName} />
                        <Link className="btn read-btn">read more <HiArrowUpRight /></Link>
                    </div>
                </Card>
            </Col>
            )
        })}
        </>
    )
}

export default NewsCard