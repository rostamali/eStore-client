import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../../App';
import './CartSidebar.css';

const CartSidebar = () => {

    const { cartTotal } = useContext(MyContext); 
    // const shippingCountry = ['Select Country', 'Bangladesh', 'India', 'China', 'United State', 'United Kingdom'];

    return (
        <>
            <div className="cart__sidebar">
                <div className="sidebar__header">
                    <h4 className="sidebar__title">Total:</h4>
                    <h4 className="cart__sidebar--total-text">${cartTotal.toFixed(2)}</h4>
                </div>
                <div className="border__line"></div>
                <div className="voucher__group">
                    <input className='input__field' type="text" placeholder='Voucher' />
                    <button className='btn__voucher'>Apply Voucher</button>
                </div>
                {/* <div className="shipping__cost--details mt__lg">
                    <h4 className="sidebar__title">Shipping Estimates</h4>

                    <span className="input__field--label">Country</span>
                    <label class="custom__select" for="countrySelect">
                        <select id="countrySelect" name="options">
                            {
                                shippingCountry.map(sc=> <option value={sc}>{sc}</option>)
                            }
                        </select>
                    </label>
                    <span className="input__field--label">State</span>
                    <label class="custom__select" for="stateSelect">
                        <select id="stateSelect" name="options">
                            <option value="">Select State</option>
                            <option value="1">Bangladesh</option>
                            <option value="2">India</option>
                            <option value="3">China</option>
                            <option value="4">United State</option>
                            <option value="4">United Kingdom</option>
                        </select>
                    </label>
                    <label className="input__field--label" htmlFor="zipCode">Zip Code</label>
                    <input className='input__field' id='zipCode' type="number" min='1' placeholder='3100' />
                </div> */}
                <NavLink className='mt__lg checkout__btn' to="/checkout">Checkout</NavLink>
            </div>
        </>
    );
};

export default CartSidebar;