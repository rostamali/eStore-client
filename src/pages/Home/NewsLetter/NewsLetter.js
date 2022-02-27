import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import './NewsLetter.css';

const NewsLetter = () => {


    return (
        <>
            <div id="newsletter">
                <div className="container">
                    <div className="newsletter__wrapper text-center">
                        <FaTelegramPlane className="newsletter__icon"/>
                        <h3 className="newsletter__title">Subscribe To Our Newsletter</h3>
                        <p className="short__subtitle mb-3">and receive $20 coupon for the first Shopping</p>

                        <div className="input-group">
                            <input type="text" className='newsletter__form' placeholder='Subscribe us' />
                            <button className='subscribe__btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;