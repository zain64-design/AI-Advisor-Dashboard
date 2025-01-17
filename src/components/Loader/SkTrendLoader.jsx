import React from 'react'
import { Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkTrendLoader = () => {
    return (
        <>
            <Card className="stock-box">
                <Skeleton count={2} height={10} width={60} />
                <Skeleton count={1} height={20} width={40} />
                <Skeleton count={2} height={10} width={40} />
            </Card>
        </>
    )
}

export default SkTrendLoader