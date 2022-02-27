import React from 'react';
import './Footer.css';
import footerLogo from '../../images/logo.png';
import googleStoreLogo from '../../images/google-store-badge.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    
    return (
        <>
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="footer-1">
                                <NavLink to="/">
                                    <img src={footerLogo} alt="" className="footer__logo" />
                                    <p className="short__subtitle">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                                    </p>
                                    <div className="app__link--wrapper">
                                        <NavLink to="/" className="app__link"><img src={googleStoreLogo} alt="" /></NavLink>
                                        <NavLink to="/" className="app__link"><img src={googleStoreLogo} alt="" /></NavLink>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-12">
                            <div className="footer-2">
                                <h4 className="footer__title">About Us</h4>
                                <ul className="footer__menu">
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Careers</NavLink>
                                    </li>
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Our Stores</NavLink>
                                    </li>
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Our Cares</NavLink>
                                    </li>
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Terms & Conditions</NavLink>
                                    </li>
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Privacy Policy</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-12">
                            <div className="footer-3">
                                <h4 className="footer__title">Customer Care</h4>
                                <ul className="footer__menu">
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Help Center</NavLink>
                                    </li>
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">How to Buy</NavLink>
                                    </li>
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Track Your Order</NavLink>
                                    </li>
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Corporate & Bulk Purchasing</NavLink>
                                    </li>
                                    <li className="footer__menu--item">
                                        <NavLink to="/" className="footer__link">Returns & Refunds</NavLink>
                                    </li>
                                </ul>    
                            </div> 
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="footer-4">
                                <h4 className="footer__title">Contact Us</h4>
                                <p className="short__subtitle mb-2">70 Washington Square South, New York, NY 10012, United States</p>
                                <p className="short__subtitle mb-2">
                                    Email: <NavLink className='footer__link' to="mailto:rostamsardar448@gmail.com">rostamsardar448@gmail.com</NavLink>
                                </p>
                                <p className="short__subtitle mb-2">
                                    Phone: <NavLink className='footer__link' to="tel:+8801321070987">01321070987</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="copyright__text">
                    2022 &copy;Copyright all right reserved by Rostam.
                </p>
            </div>
        </>
    );
};

export default Footer;