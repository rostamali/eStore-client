import React from 'react';
import { AiFillEye } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Rating from 'react-rating';
import { useContext } from 'react';
import { MyContext } from '../../../App';
import './Wishlist.css';
import useStorage from '../../../hooks/useStorage';

const Wishlist = () => {

    const { wishlist } = useContext(MyContext);
    const { clearTheWishlist } = useStorage();

    const checkWishlist = wishlist.length === 0;


    return (
        <>
            
            <div id="wishlist">
                <div className="wishlist__header">
                    <h2 className="dashboard__container--title">
                    <BsFillSuitHeartFill className='dashboard__container--icon'/> My Wishlist
                    </h2>
                    <button onClick={clearTheWishlist} className='transparent__btn'>Clear Wishlist</button>
                </div>
                {
                    checkWishlist ?
                    <div className="empty__wishlist">
                        <p className="empty__text">Your wishlist is empty.<br/> Start adding</p>
                    </div>
                    :
                    <div className="wishlist__products mt__md">
                        <div className="row gy-4">
                            {
                                wishlist.map(product => <div key={product._id} className="col-lg-4 col-md-6 col-12">
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
                                            <button className='btn__overly btn__wishlist'>
                                                <BsFillSuitHeartFill className='wishlist__full--heart'/>
                                            </button>
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
                                                    {
                                                        product.regularPrice &&
                                                        <span className="regular__price"><del>${product.regularPrice.toFixed(2)}</del></span>
                                                    }
                                                    
                                                </div>
                                            </div>
                                            <div className="cart__btn--wrapper">
                                                {/* <div className={cart.find(pd=> pd._id === product._id) ? 'btn__block':'btn__hidden'}>
                                                    <button onClick={()=>handleRemoveCart(product)} className="btn__minus">
                                                        <BiMinus/>
                                                    </button>
                                                    <WishlistCartQty key={product._id} product={product}></WishlistCartQty>
                                                </div>
                                                <button onClick={()=> handleAddCart(product)} className="btn__plus">
                                                    <BiPlus/>
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div> 
                }   
            </div>
        </>
    );
};

export default Wishlist;