import React, { useContext } from 'react';
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { MyContext } from '../../../App';
import CartSidebar from '../CartSidebar/CartSidebar';
import './Cart.css';
import shoppingBag from '../../../images/shopping-bag.svg';

const Cart = () => {

    const { cart, handleAddCart, handleRemoveCart, deleteCartItem } = useContext(MyContext);
    const isCartEmpty = cart.length === 0; 

    return (
        <>
            {
                isCartEmpty ? 
                <div className="cart__emptyNotification--wrapper">
                    <div className='cart__empty--notification'>
                        <img src={shoppingBag} alt="shoppingBag" />
                        <p className='empty__text'> 
                            Your shopping bag is empty.
                            <br />
                            Start shopping
                        </p>
                    </div>
                </div>
                :
                <div id="cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-12">

                                {
                                    cart.map(cartItem => <div key={cartItem._id} className="cart__item">
                                        <div className="cart__thumbnail">
                                            <img src={cartItem.image} alt="" />
                                        </div>
                                        <div className="cart__product--details">
                                            <h3 className="product__sm--title">{cartItem.title}</h3>
                                            <span className="short__text">${cartItem.salePrice} × {cartItem.cartQty}</span>
                                            <p className="current__price">${cartItem.salePrice * cartItem.cartQty}</p>
                                        </div>
                                        
                                        <div className="cart__action--btn-wrapper">
                                            <div className="cartItem__delete">
                                                <button onClick={()=>deleteCartItem(cartItem)} className='btn__cartItem--delete'><FaTimes/></button>
                                            </div>
                                            <div className="cart__btn--wrapper">
                                                <button onClick={()=>handleRemoveCart(cartItem)} className="btn__minus">
                                                    <BiMinus/>
                                                </button>
                                                <span className="item__qty">{cartItem.cartQty}</span>
                                                <button onClick={()=>handleAddCart(cartItem)} className="btn__plus">
                                                    <BiPlus/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>)
                                }

                            </div>
                            <div className="col-lg-4 col-md-12 col-12">
                                <CartSidebar></CartSidebar>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </>
    );
};

export default Cart;