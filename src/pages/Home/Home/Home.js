import React from 'react';
import Banner from '../Banner/Banner';
import DealDay from '../DealDay/DealDay';
import FlashDeal from '../FlashDeal/FlashDeal/FlashDeal';
import NewArrival from '../NewArrival/NewArrival';
import NewsLetter from '../NewsLetter/NewsLetter';
import Trending from '../Trending/Trending';
import 'swiper/css';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FlashDeal></FlashDeal>
            <NewArrival></NewArrival>
            <DealDay></DealDay>
            <Trending></Trending>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;