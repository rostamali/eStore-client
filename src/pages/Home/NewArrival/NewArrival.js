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
import Slider from 'react-slick';

const NewArrival = () => {

    function NextNavButton(props) {
        const {onClick} = props;
        return (
            <button className="slick-arrow res-slick-next"
            onClick={onClick}><FaArrowRight/></button>
        );
    }

    
    function PrevNavButton(props) {
        const {onClick} = props;
        return (
            <button className="slick-arrow res-slick-prev"
            onClick={onClick}><FaArrowLeft/></button>
        );
    }
    
    const settings = {
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        touchMove: false,
        infinite: false,
        nextArrow: <NextNavButton/>,
        prevArrow: <PrevNavButton/>,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
        ],
        arrows: true
    };

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
                        <Slider {...settings}>
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
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewArrival;