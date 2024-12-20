import React from 'react'
import { Col, Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const NewsLoader = () => {
    return (
        <>
            <Card className='news-card'>
                <figure>
                    <Skeleton className='news-img' width='100%' />
                </figure>
                <div className="desc">
                    <Skeleton count={2} height={10} width='100%' />
                    <Skeleton count={1} height={10} width={100} />
                    <Skeleton height={60} count={1} width='100%' />
                </div>
            </Card>
        </>
    )
}

export default NewsLoader