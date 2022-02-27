import React from 'react';
import { CarouselProvider, DotGroup, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from '../../../images/xiaomi-watch.png';
import './DealDay.css';
import CountDown from '../../../shared/CountDown/CountDown';

const DealDay = () => {


    return (
        <>
            <div id="dealDay">
                <div className="container">
                <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={35}
                            totalSlides={3}
                            visibleSlides={1}
                        >
                            <Slider>
                                <Slide index={0}>
                                    <div className="dealDay__slider--signle">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="dealDay__slider--thumbnail">
                                                    <img src={img1} alt="" />
                                                </div>
                                                <DotGroup className="btn__dots" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <ButtonBack className='dealDay__arrow--btn'>
                                                    <FaArrowLeft/>
                                                </ButtonBack>
                                                <ButtonNext className='dealDay__arrow--btn'>
                                                    <FaArrowRight/>
                                                </ButtonNext>
                                                <div className="dealDay__product--info">
                                                    <h3 className="sectionHeader__sm--title mb-3">Deal Of The Day</h3>
                                                    <h3 className="product__lg--title mb-3">Rapple Watch Series 4 (Black)</h3>
                                                    <p className="short__subtitle mb-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
                                                    </p>
                                                    <div className="flashDeal__price--details mb-3">
                                                        <span className="current__price">$110.00</span>
                                                        <span className="regular__price"><del>$255.00</del></span>
                                                    </div>
                                                    <div className="countdown mb-3">
                                                        <h4 className="countdown__title">Fresh Deal Everyday, Get It Now!</h4>
                                                        <CountDown></CountDown>
                                                    </div>
                                                    <button className="btn__buy-now">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="dealDay__slider--signle">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="dealDay__slider--thumbnail">
                                                    <img src={img1} alt="" />
                                                </div>
                                                <DotGroup className="btn__dots" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <ButtonBack className='dealDay__arrow--btn'>
                                                    <FaArrowLeft/>
                                                </ButtonBack>
                                                <ButtonNext className='dealDay__arrow--btn'>
                                                    <FaArrowRight/>
                                                </ButtonNext>
                                                <div className="dealDay__product--info">
                                                    <h3 className="sectionHeader__sm--title mb-3">Deal Of The Day</h3>
                                                    <h3 className="product__lg--title mb-3">Rapple Watch Series 4 (Black)</h3>
                                                    <p className="short__subtitle mb-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
                                                    </p>
                                                    <div className="flashDeal__price--details mb-3">
                                                        <span className="current__price">$110.00</span>
                                                        <span className="regular__price"><del>$255.00</del></span>
                                                    </div>
                                                    <div className="countdown mb-3">
                                                        <h4 className="countdown__title">Fresh Deal Everyday, Get It Now!</h4>
                                                        <CountDown></CountDown>
                                                    </div>
                                                    <button className="btn__buy-now">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="dealDay__slider--signle">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="dealDay__slider--thumbnail">
                                                    <img src={img1} alt="" />
                                                </div>
                                                <DotGroup className="btn__dots" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <ButtonBack className='dealDay__arrow--btn'>
                                                    <FaArrowLeft/>
                                                </ButtonBack>
                                                <ButtonNext className='dealDay__arrow--btn'>
                                                    <FaArrowRight/>
                                                </ButtonNext>
                                                <div className="dealDay__product--info">
                                                    <h3 className="sectionHeader__sm--title mb-3">Deal Of The Day</h3>
                                                    <h3 className="product__lg--title mb-3">Rapple Watch Series 4 (Black)</h3>
                                                    <p className="short__subtitle mb-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
                                                    </p>
                                                    <div className="flashDeal__price--details mb-3">
                                                        <span className="current__price">$110.00</span>
                                                        <span className="regular__price"><del>$255.00</del></span>
                                                    </div>
                                                    <div className="countdown mb-3">
                                                        <h4 className="countdown__title">Fresh Deal Everyday, Get It Now!</h4>
                                                        <CountDown></CountDown>
                                                    </div>
                                                    <button className="btn__buy-now">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                </div>
            </div>
        </>
    );
};

export default DealDay;