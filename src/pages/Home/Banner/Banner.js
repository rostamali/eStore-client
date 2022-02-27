import React from 'react';
import './Banner.css';
import product1 from '../../../images/shoes-1.png';
import product2 from '../../../images/jacket.png';
import product3 from '../../../images/t-shirt-1.png';
import product4 from '../../../images/paper-bag.png';

import securePayment from '../../../images/secure-payment.png';
import feedbackThumb from '../../../images/feedback-thumb.png';
import { NavLink } from 'react-router-dom';

const Banner = () => {

    return (
        <>
            <div id="banner">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="banner__product bannerSpecial__product h-100">
                                <div className="banner__product--thumbnail">
                                    <img src={product1} alt="" />
                                </div>
                                <div className="bannerSpecial__product--desc-wrapper">
                                    <p className="banner__category">SPECIAL OFFER</p>
                                    <h3 className="banner__product--title">
                                        <span className="brand__color">Comfortable</span> Original Cotton Sneaker
                                    </h3>
                                    <p className="banner__product--short-desc text__muted">
                                        Handcrafted from genuine Italian leather. One inner compartment with black satin lining
                                    </p>
                                    <NavLink to="/shop" className="banner__btn">shop now</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-12">
                            <div className="banner__product bannerWomen__product mb-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <p className="banner__category">WOMEN'S HANDBAG</p>
                                        <h3 className="banner__product--title">
                                            <span className="brand__color">Minimalist</span> Genuine Cotton Jacket
                                        </h3>
                                        <p className="banner__product--short-desc text__muted">
                                            Handcrafted from genuine Italian leather. One inner compartment with black satin lining
                                        </p>
                                        <NavLink to="/shop" className="banner__btn">shop now</NavLink>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="banner__product--thumbnail">
                                            <img src={product2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner__product bannerMen__product">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="banner__product--thumbnail">
                                            <img src={product3} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <p className="banner__category">MEN'S SHOE</p>
                                        <h3 className="banner__product--title">
                                            <span className="brand__color">Stylish</span> Genuine Comfy T-shirts
                                        </h3>
                                        <p className="banner__product--short-desc text__muted">
                                            Handcrafted from genuine Italian leather. One inner compartment with black satin lining
                                        </p>
                                        <NavLink to="/shop" className="banner__btn">shop now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt__lg gy-4">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="feature__box align__center">
                                <div className="feature__box--icon text-center">
                                    <img src={securePayment} alt="" />
                                </div>
                                <h4 className="feature__box--title text-center">Secure Payment</h4>
                                <p className="short__subtitle text-center">100% secured payment & privacy</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="feature__box align__center">
                                <div className="feature__box--icon text-center">
                                    <img src={feedbackThumb} alt="" />
                                </div>
                                <h4 className="feature__box--title text-center">Great Feedback</h4>
                                <p className="short__subtitle text-center">More than 97% positive & happy customers</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="feature__box feature__product">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <p className="banner__category">MEN'S SHOE</p>
                                        <h3 className="banner__product--title">
                                            <span className="brand__color">$100 Off</span> Over $1200
                                        </h3>
                                        <p className="short__subtitle">
                                            Handcrafted from genuine Italian leather
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="banner__product--thumbnail">
                                            <img src={product4} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;