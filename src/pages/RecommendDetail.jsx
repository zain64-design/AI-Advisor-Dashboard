import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query'
import useFetchAPI from '../utils/hooks/useFetchAPI'
import { INVEST_RECOMMEND_API } from '../utils/constant';
import SkNewsDetailLoader from '../components/Loader/SkNewsDetailLoader'
import RecommendDetailsBox from '../components/Recommendation/RecommendDetailsBox';

const RecommendDetail = () => {
    useAOS();

    const { id } = useParams();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: [id],
        queryFn: () => useFetchAPI(INVEST_RECOMMEND_API),
    });

    const recommendData = data && Array.isArray(data) ? data.find(recommend => recommend.id === parseInt(id)) : null;

    console.log(recommendData);
    

    return (
        <>
            <div data-aos="fade-in" className="recommend-area">
                <div className="container-ct">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            {isLoading ? <SkNewsDetailLoader />
                                : isError ? <Text as='h6'>{error.message}</Text>
                                    : <RecommendDetailsBox {...recommendData} />}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default RecommendDetail