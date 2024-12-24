import React from 'react'
import useGetValueClass from '../../utils/hooks/useGetValueClass';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router';
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/component/recommendation/recommendBox.scss';

const RecommendBox = ({ investData }) => {

    const { getValueClass } = useGetValueClass();
    const { id,image, head, sub, price, value } = investData;

    return (
        <>
            <Card className='invest-box'>
                <figure>
                    <Image src={image} className="logo" alt='logo' />
                </figure>
                <div className="desc">
                    <Link to={`/recommendation/recommendation-detail/${id}`}>{head}</Link>
                    <Text as="small">{sub}</Text>
                </div>
                <div className="stats-info">
                    <Text as="h6">{price}</Text>
                    <Text as="small" className={`investment-value ${getValueClass(value)}`}>{value}</Text>
                </div>
            </Card>
        </>
    )
}

export default RecommendBox