import React, { useContext } from 'react';
import { AiFillEye } from "react-icons/ai";
import { BiHeart, BiPlus, BiMinus } from "react-icons/bi";
import Rating from 'react-rating';
import { SwiperSlide } from 'swiper/react';
import { MyContext } from '../../../../App';

const DisplayFlashDeal = (props) => {

    const { image, title, rating, salePrice, regularPrice, cartQty, id } = props.product;
    const { cart } = useContext(MyContext);

    return (
        <>
            <SwiperSlide>
                <div className="flashDeal__slider--signle">
                    <div className="offer__chip">
                        56% off
                    </div>
                    <div className="flashDeal__overly">
                        <button className='btn__overly btn__view'>
                            <AiFillEye/>
                        </button>
                        <button className='btn__overly btn__wishlist'>
                            <BiHeart/>
                        </button>
                    </div>
                    <div className="flashDeal__slider--thumbnail">
                        <img src={image} alt="" />
                    </div>
                    <div className="productSlider__info--wrapper">
                        <div className="productSlider__info">
                            <h3 className="product__sm--title">{title}</h3>
                            <p className="rating">
                                <Rating
                                    emptySymbol="fa fa-star-o fa-2x"
                                    fullSymbol="fa fa-star fa-2x"
                                    initialRating={rating}
                                    readonly
                                />
                            </p>
                            <div className="flashDeal__price--details">
                                <span className="current__price">${salePrice.toFixed(2)}</span>
                                <span className="regular__price"><del>${regularPrice.toFixed(2)}</del></span>
                            </div>
                        </div>
                        <div className="cart__btn--wrapper">
                            <div className={cart.find(pd=> pd.id === id) ? 'btn__block':'btn__hidden'}>
                                <button onClick={()=>props.handleRemoveCart(props.product)} className="btn__minus">
                                    <BiMinus/>
                                </button>
                                <span className="item__qty">{cartQty}</span>
                            </div>
                            <button onClick={()=>props.handleAddCart(props.product)} className="btn__plus">
                                <BiPlus/>
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>    
        </>
    );
};

export default DisplayFlashDeal;