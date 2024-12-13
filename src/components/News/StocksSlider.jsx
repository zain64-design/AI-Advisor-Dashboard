import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, A11y, Controller,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import TrendStocks from '../Home/TrendStocks'
import { TREND_STOCKS_API} from '../../utils/constant';
import { useQuery } from '@tanstack/react-query';
import useFetchAPI from '../../utils/hooks/useFetchAPI';
import SkTrendLoader from '../../components/Loader/SkTrendLoader';

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: async () => await useFetchAPI(url),
      suspense: false,
    });
  };

const StocksSlider = () => {
    

      const { data: trendData, isLoading: isTrendLoading, isError: isTrendError, error: trendError } = useFetchData(['Trends Stocks Data'], TREND_STOCKS_API);

    return (
        <>
        <Swiper modules={[Autoplay,Thumbs, A11y, Controller]}
                    spaceBetween={24}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2.2,
                        },
                        992: {
                            slidesPerView: 1.9,
                        },
                        1200: {
                            slidesPerView: 2.5,
                        },
                        1400: {
                            slidesPerView: 2.5,
                        },
                        1444: {
                            slidesPerView: 2.5,
                        },
                        1599: {
                            slidesPerView: 2.6,
                        },
                    }}
                    className="stock-slider"
                >
                    
                    {isTrendLoading
                    ? Array.from({length:4}).map((_,index)=> <SkTrendLoader key={index} />)
                    : isTrendError
                      ? <Text as='h6'>Fetching Trending Stocks Data:{trendError.message}</Text>
                      : trendData?.map(data => <SwiperSlide key={data.id}><TrendStocks trendData={trendData} /></SwiperSlide>)}
                </Swiper>
        </>
    )
}

export default StocksSlider