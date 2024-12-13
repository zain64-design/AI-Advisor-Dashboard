import React from 'react'
import { Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkTrendLoader = () => {
    return (
        <>
            <Card className="stock-box">
                <Skeleton count={2} height={10} width={80} />
                <Skeleton count={1} height={20} width={50} />
                <Skeleton count={2} height={10} width={50} />
            </Card>
        </>
    )
}

export default SkTrendLoader