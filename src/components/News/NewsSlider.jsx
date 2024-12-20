import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, A11y, Controller, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { useQuery } from '@tanstack/react-query';
import useFetchAPI from '../../utils/hooks/useFetchAPI';
import { NEWS_API } from '../../utils/constant';
import Text from '../UI/Text'
import NewsCard from './NewsCard';
import NewsLoader from '../Loader/NewsLoader';
import '../../assets/scss/component/news/newsSlider.scss'


const useFetchData = (key, url) => {
    return useQuery({
        queryKey: key,
        queryFn: () => useFetchAPI(url),
        staleTime: 10000,
    })
}
const NewsSlider = () => {

    const { data: newsData, isLoading, isError, error } = useFetchData(['latest articles'], NEWS_API);

    return (
        <>
            <Swiper
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                }}
                modules={[Navigation, Pagination, A11y, Thumbs, Controller]}
                spaceBetween={25}
                loop={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1400: {
                        slidesPerView: 3,
                    },
                    1444: {
                        slidesPerView: 3,
                    },
                    1599: {
                        slidesPerView: 3,
                    },
                }}
                className="news-slider">
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => <SwiperSlide key={index}><NewsLoader /></SwiperSlide>)
                    : isError
                        ? <Text as='h6'>{error.message}</Text>
                        : newsData?.map(value => <SwiperSlide key={value.id}><NewsCard newsData={value} /></SwiperSlide>)
                }
                <div className="slider-control">
                    <div className="swiper-button-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20" fill="none">
                            <path d="M10 2L2 10L10 18" stroke="black" stroke-width="2.36732" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20" fill="none">
                            <path d="M2 18L10 10L2 2" stroke="black" stroke-width="2.36732" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </Swiper>
        </>
    )
}

export default NewsSlider