import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import DonutChart from '../components/Charts/DonutChart';
import '../assets/scss/component/home/home.scss';
import Text from '../components/UI/Text'
import { Link } from 'react-router-dom';
import { INVEST_RECOMMEND_API, STATS_API, TREND_STOCKS_API, RECENT_INVEST_API } from '../utils/constant';
import { useQuery } from '@tanstack/react-query';
import useFetchAPI from '../utils/hooks/useFetchAPI';
import InvestBox from '../components/Home/InvestBox';
import InvestRecommendBox from '../components/Home/InvestRecommendBox';
import TrendStocks from '../components/Home/TrendStocks';
import SkChartLoader from '../components/Loader/SkChartLoader';
import SkRecommendLoader from '../components/Loader/SkRecommendLoader';
import SkInvestLoader from '../components/Loader/SkInvestLoader';
import SkTrendLoader from '../components/Loader/SkTrendLoader';


const useFetchData = (key, url) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => await useFetchAPI(url),
    suspense: false,
  });
};

const Home = () => {

  const { data: investData, isLoading: isInvestLoading, isError: isInvestError, error: investError, } = useFetchData(['Recommended Investment Data'], INVEST_RECOMMEND_API);

  const { data: recentData, isLoading: isRecentLoading, isError: isRecentError, error: recentError, } = useFetchData(['Recent Investment Data'], RECENT_INVEST_API);

  const { data: statsData, isLoading: isStatsLoading, isError: isStatsError, error: statError } = useFetchData(['Stats Data'], STATS_API);

  const { data: trendData, isLoading: isTrendLoading, isError: isTrendError, error: trendError } = useFetchData(['Trends Stocks Data'], TREND_STOCKS_API);
  

  const transformDataForChart = (data) => {
    return data ? data.map(item => item.value) : [];
  };

  const chartLabels = Array.isArray(statsData) && statsData.length > 0
    ? statsData.map(item => item.category)
    : [];

  const series = Array.isArray(statsData) && statsData.length > 0
    ? transformDataForChart(statsData)
    : [];


  return (
    <>
      <div className="home-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
              <Card className='stats-box chart-area'>
                <div className="chart-main">
                  {isStatsLoading
                    ? <SkChartLoader />
                    : isStatsError
                      ? <Text as='h6'>Fetching Recent Investment Data:{statError.message} </Text>
                      : <DonutChart series={series} labels={chartLabels} />}
                </div>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
              <Card className='stats-box trend-stock-area'>
                <div className="head-area">
                  <Text as='h5' className='fire-icon'>
                    Trending Stocks
                  </Text>
                </div>
                <div className="trend-stock-details">
                  {isTrendLoading
                    ? Array.from({length:4}).map((_,index)=> <SkTrendLoader key={index} />)
                    : isTrendError
                      ? <Text as='h6'>Fetching Trending Stocks Data:{trendError.message}</Text>
                      : trendData?.map((data) => {
                        const {id,head,sub,price,value,trendChartData} = data;
                        return (
                          <TrendStocks key={id}  head={head} sub={sub} price={price} value={value}trendChartData={trendChartData}  />
                        )
                      })}
                </div>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
              <Card className='stats-box invest-box-area'>
                <div className="head-area">
                  <Text as='h5'>Recent Investments</Text>
                  <Link to='/news' className='btn add-btn'>
                    <span className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="none">
                        <g clipPath="url(#clip0_715_2693)">
                          <path d="M16.9003 7.84617H11.0494V1.99527C11.0494 1.11929 10.3393 0.40918 9.46332 0.40918C8.58734 0.40918 7.87723 1.11929 7.87723 1.99527V7.84617H2.02633C1.15035 7.84617 0.440239 8.55628 0.440239 9.43226C0.440239 10.3082 1.15035 11.0183 2.02633 11.0183H7.87723V16.8692C7.87723 17.7452 8.58734 18.4553 9.46332 18.4553C10.3393 18.4553 11.0494 17.7452 11.0494 16.8692V11.0183H16.9003C17.7763 11.0183 18.4864 10.3082 18.4864 9.43226C18.4864 8.55628 17.7763 7.84617 16.9003 7.84617Z" fill="url(#paint0_linear_715_2693)" />
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_715_2693" x1="0.440239" y1="9.43226" x2="20.2995" y2="9.70636" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#01C5DB" />
                            <stop offset="1" stopColor="#1B5682" />
                          </linearGradient>
                          <clipPath id="clip0_715_2693">
                            <rect width="18.0462" height="18.0462" fill="white" transform="translate(0.440239 0.40918)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Add Investment
                  </Link>
                </div>
                <div className="invest-details">
                  {isRecentLoading
                    ? Array.from({ length: 5 }).map((_, index) => <SkInvestLoader key={index} />)
                    : isRecentError
                      ? <Text as='h6'>Fetching Recent Investment Data:{recentError.message} </Text>
                      : <InvestBox recentData={recentData} />}
                </div>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
              <Card className='stats-box recommend-box-area'>
                <div className="head-area">
                  <Text as='h5'>Investment Recommended for you</Text>
                </div>
                <div className="invest-recommend-details">
                  {isInvestLoading
                    ? Array.from({ length: 7 }).map((_, index) => <SkRecommendLoader key={index} />)
                    : isInvestError
                      ? <Text as='h1'>Fetching Recommend Investment Data:{investError.message} </Text>
                      : <InvestRecommendBox investData={investData} />
                  }
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Home