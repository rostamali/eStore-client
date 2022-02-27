import React from 'react';
import { MdNewReleases } from 'react-icons/md';
import './NewArrival.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from '../../../images/new-arrival-1.png';
import img2 from '../../../images/new-arrival-2.png';
import img3 from '../../../images/new-arrival-3.png';
import img4 from '../../../images/new-arrival-4.png';
import img5 from '../../../images/new-arrival-5.png';
import img6 from '../../../images/new-arrival-6.png';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const NewArrival = () => {
    
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <>
            <div id="newArrival">
                <div className="container">
                    <div className="sectionHeader">
                        <h2 className="sectionHeader__title">
                            <MdNewReleases className='sectionHeader__icon' /> New Arrivals
                        </h2>
                    </div>
                </div>
                <div className="newArrival__slider">
                    <div className="container">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                            clickable: true,
                            }}
                            breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            modules={[Navigation, Pagination]}
                        >
                            
                            <SwiperSlide>
                                <div className="newArrival__slider--signle">
                                    <div className="newArrival__slider--thumbnail">
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="productSlider__info--wrapper">
                                        <div className="productSlider__info">
                                            <h3 className="product__sm--title">Smart watch black</h3>
                                            <div className="flashDeal__price--details">
                                                <span className="current__price">$110.00</span>
                                                <span className="regular__price"><del>$255.00</del></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newArrival__slider--signle">
                                    <div className="newArrival__slider--thumbnail">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="productSlider__info--wrapper">
                                        <div className="productSlider__info">
                                            <h3 className="product__sm--title">Smart watch black</h3>
                                            <div className="flashDeal__price--details">
                                                <span className="current__price">$110.00</span>
                                                <span className="regular__price"><del>$255.00</del></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newArrival__slider--signle">
                                    <div className="newArrival__slider--thumbnail">
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className="productSlider__info--wrapper">
                                        <div className="productSlider__info">
                                            <h3 className="product__sm--title">Smart watch black</h3>
                                            <div className="flashDeal__price--details">
                                                <span className="current__price">$110.00</span>
                                                <span className="regular__price"><del>$255.00</del></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newArrival__slider--signle">
                                    <div className="newArrival__slider--thumbnail">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="productSlider__info--wrapper">
                                        <div className="productSlider__info">
                                            <h3 className="product__sm--title">Smart watch black</h3>
                                            <div className="flashDeal__price--details">
                                                <span className="current__price">$110.00</span>
                                                <span className="regular__price"><del>$255.00</del></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newArrival__slider--signle">
                                    <div className="newArrival__slider--thumbnail">
                                        <img src={img5} alt="" />
                                    </div>
                                    <div className="productSlider__info--wrapper">
                                        <div className="productSlider__info">
                                            <h3 className="product__sm--title">Smart watch black</h3>
                                            <div className="flashDeal__price--details">
                                                <span className="current__price">$110.00</span>
                                                <span className="regular__price"><del>$255.00</del></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newArrival__slider--signle">
                                    <div className="newArrival__slider--thumbnail">
                                        <img src={img6} alt="" />
                                    </div>
                                    <div className="productSlider__info--wrapper">
                                        <div className="productSlider__info">
                                            <h3 className="product__sm--title">Smart watch black</h3>
                                            <div className="flashDeal__price--details">
                                                <span className="current__price">$110.00</span>
                                                <span className="regular__price"><del>$255.00</del></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newArrival__slider--signle">
                                    <div className="newArrival__slider--thumbnail">
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="productSlider__info--wrapper">
                                        <div className="productSlider__info">
                                            <h3 className="product__sm--title">Smart watch black</h3>
                                            <div className="flashDeal__price--details">
                                                <span className="current__price">$110.00</span>
                                                <span className="regular__price"><del>$255.00</del></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button ref={navigationPrevRef} className="swiper__arrow--prev"><FaArrowLeft/></button>
                        <button ref={navigationNextRef} className="swiper__arrow--next"><FaArrowRight/></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewArrival;