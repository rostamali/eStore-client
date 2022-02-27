import React from 'react';
import { useContext } from 'react';
import { AiFillEye } from "react-icons/ai";
import { BiHeart, BiPlus, BiMinus } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Rating from 'react-rating';
import { MyContext } from '../../../App';
import './DisplayProduct.css';

const DisplayProduct = (props) => {

    const {_id, image, title, regularPrice, salePrice, rating, offer} = props.products;

    const ShopCartQtyShow = ({product}) =>{
        
        const shopCartProduct = props.cart?.find(ci => ci._id === product._id);
        
        return <span className="item__qty">{shopCartProduct?.cartQty}</span>;
    }

    const { wishlist } = useContext(MyContext);

    const checkWishlist = wishlist.find(wl => wl._id === _id);

    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="product__wrapper">
                    {
                        offer && 
                        <div className="offer__chip">
                            {offer}% off
                        </div>
                    }
                    
                    <div className="product__overly">
                        <button className='btn__overly btn__view'>
                            <AiFillEye/>
                        </button>
                        {
                            checkWishlist ? 
                            <button className='btn__overly btn__wishlist'>
                                <BsFillSuitHeartFill className='wishlist__full--heart'/>
                            </button>
                            :
                            <button onClick={()=>props.addToWishlist(props.products)} className='btn__overly btn__wishlist'>
                                <BiHeart/>
                            </button>
                        }
                        
                    </div>
                    <div className="product__thumbnail">
                        <img src={image} alt="" />
                    </div>
                    <div className="product__info--wrapper">
                        <div className="product__info">
                            <h3 className="product__sm--title">{title}</h3>
                            <p className="rating">
                                <Rating
                                    emptySymbol="fa fa-star-o fa-2x"
                                    fullSymbol="fa fa-star fa-2x"
                                    initialRating={rating}
                                    readonly
                                />
                            </p>
                            <div className="product__price--details">
                                <span className="current__price">${salePrice.toFixed(2)}</span>
                                {
                                    regularPrice &&
                                    <span className="regular__price"><del>${regularPrice.toFixed(2)}</del></span>
                                }
                            </div>
                        </div>
                        <div className="cart__btn--wrapper">
                            <div className={props.cart.find(pd=> pd._id === _id) ? 'btn__block':'btn__hidden'}>
                                <button onClick={()=>props.handleRemoveCart(props.products)} className="btn__minus">
                                    <BiMinus/>
                                </button>
                                <ShopCartQtyShow key={_id} product={props.products}></ShopCartQtyShow>
                            </div>
                            <button onClick={()=> props.handleAddCart(props.products)} className="btn__plus">
                                <BiPlus/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DisplayProduct;