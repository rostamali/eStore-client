import React, { useContext, useState } from 'react';
import { BsFillLightningChargeFill, BsFillSuitHeartFill } from "react-icons/bs";
import 'pure-react-carousel/dist/react-carousel.es.css';
import './FlashDeal.css';
import { MyContext } from '../../../../App';

import 'swiper/css';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { useEffect } from 'react';

import { AiFillEye } from "react-icons/ai";
import { BiHeart, BiPlus, BiMinus } from "react-icons/bi";
import Rating from 'react-rating';
import { Spinner } from 'react-bootstrap';


const FlashDeal = () => {

    const [flashDeal, setFlashDeal] = useState([]);
    const [flasDealLoading, setFlashDealLoading] = useState(true);
    useEffect(()=>{
        const flashDealProduct = fetch('https://damp-fortress-84268.herokuapp.com/flashdeal')
        .then(res => res.json())
        .then(data => {
            setFlashDeal(data)
            setFlashDealLoading(false);
        });
        return ()=> flashDealProduct;
    },[]);


    const { handleAddCart, handleRemoveCart, cart, wishlist, addToWishlist } = useContext(MyContext);


    const FlashdealCartQtyShow = ({product}) =>{
        
        const specificProduct = cart?.find(ci => ci._id == product._id);
        
        return <span className="item__qty">{specificProduct?.cartQty}</span>;
    }


    return (
        <>
            <div id="flashDeal">
                <div className="container">
                    <div className="sectionHeader">
                        <h2 className="sectionHeader__title">
                            <BsFillLightningChargeFill className='sectionHeader__icon' /> Flash Deals
                        </h2>
                    </div>
                </div>
                {
                    flasDealLoading ? 
                    <div id="spinner__section">
                        <div className="container">
                            <div className="spinner__inner">
                                <Spinner animation="border" className='spinner__color' />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flashDeal__slider">
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
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                                navigation
                                modules={[Navigation, Pagination]}
                            >
                            
                                {
                                    flashDeal.map(product=> <SwiperSlide key={product._id}>
                                        
                                        <div className="product__wrapper">
                                            {
                                                product.offer && 
                                                <div className="offer__chip">
                                                    {product.offer}% off
                                                </div>
                                            }
                                            <div className="product__overly">
                                                <button className='btn__overly btn__view'>
                                                    <AiFillEye/>
                                                </button>
                                                {
                                                    wishlist.find(wl => wl._id === product._id) ?
                                                    <button className='btn__overly btn__wishlist'>
                                                        <BsFillSuitHeartFill className='wishlist__full--heart'/>
                                                    </button>
                                                    :
                                                    <button onClick={()=>addToWishlist(product)} className='btn__overly btn__wishlist'>
                                                        <BiHeart/>
                                                    </button>
                                                }
                                            </div>
                                            <div className="product__thumbnail">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className="product__info--wrapper">
                                                <div className="product__info">
                                                    <h3 className="product__sm--title">{product.title}</h3>
                                                    <p className="rating">
                                                        <Rating
                                                            emptySymbol="fa fa-star-o fa-2x"
                                                            fullSymbol="fa fa-star fa-2x"
                                                            initialRating={product.rating}
                                                            readonly
                                                        />
                                                    </p>
                                                    <div className="product__price--details">
                                                        <span className="current__price">${product.salePrice.toFixed(2)}</span>
                                                        <span className="regular__price"><del>${product.regularPrice.toFixed(2)}</del></span>
                                                    </div>
                                                </div>
                                                <div className="cart__btn--wrapper">
                                                    <div className={cart.find(pd=> pd.id === product.id) ? 'btn__block':'btn__hidden'}>
                                                        <button onClick={()=>handleRemoveCart(product)} className="btn__minus">
                                                            <BiMinus/>
                                                        </button>
                                                        <FlashdealCartQtyShow key={product._id} product={product}></FlashdealCartQtyShow>
                                                    </div>
                                                    
                                                    <button onClick={()=>handleAddCart(product)} className="btn__plus">
                                                        <BiPlus/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default FlashDeal;