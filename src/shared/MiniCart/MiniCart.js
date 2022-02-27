import React, { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { BsHandbag } from "react-icons/bs";
import './MiniCart.css';
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import shoppingBag from '../../images/shopping-bag.svg';

import {MyContext} from '../../App';
import { NavLink } from 'react-router-dom';

const MiniCart = (props) => {
    
    const showMiniCart = props.showMiniCart;
    const handleCloseMiniCart = props.handleCloseMiniCart;
    const { cart, handleAddCart, handleRemoveCart, deleteCartItem, cartTotal } = useContext(MyContext);

    const isCartLength = cart.length === 0;


    return (
        <>
            <Offcanvas show={showMiniCart} onHide={handleCloseMiniCart} placement={'end'} scroll backdrop>
                <div className="miniCart__header">
                    <span><BsHandbag/> {cart.length} item</span>
                    <button onClick={()=>handleCloseMiniCart()} type="button" class="btn-close text-reset" aria-label="Close"></button>
                </div>
                
                <div className="miniCart__container">
                    {
                        !isCartLength ? 
                        cart.map(cp => <div key = {cp.id} className="miniCart__item">
                            <div className="cart__btn--wrapper">
                                <button onClick={()=>handleAddCart(cp)} className="btn__plus">
                                    <BiPlus/>
                                </button>
                                <span className="item__qty">{cp.cartQty}</span>
                                <button onClick={()=>handleRemoveCart(cp)} className="btn__minus">
                                    <BiMinus/>
                                </button>
                            </div>
                            <div className="miniCart__thumbnail">
                                <img src={cp.image} alt="" />
                            </div>
                            <div className="miniCart__product--details">
                                <h3 className="product__sm--title">{cp.title}</h3>
                                <span className="short__text">${cp.salePrice} × {cp.cartQty}</span>
                                <p className="current__price">${cp.salePrice * cp.cartQty}</p>
                            </div>
                            <div className="cartItem__delete">
                                <button onClick={()=>deleteCartItem(cp)} className='btn__cartItem--delete'><FaTimes/></button>
                            </div>
                        </div>)
                        :
                        <div className='cart__empty--notification'>
                            <img src={shoppingBag} alt="shoppingBag" />
                            <p className='empty__text'> 
                                Your shopping bag is empty.
                                <br />
                                Start shopping
                            </p>
                        </div>
                        
                    }
                </div>
                {
                    !isCartLength && <div className="miniCart__bottom">
                        <NavLink className="checkout__btn" to="/checkout">Checkout Now (${cartTotal.toFixed(2)})</NavLink>
                        <NavLink className="viewCart__btn" to="/cart">View Cart</NavLink>
                    </div>
                }
                
            </Offcanvas>
        </>
    );
};

export default MiniCart;