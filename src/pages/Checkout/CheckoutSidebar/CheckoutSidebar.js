import React, { useContext } from 'react';
import { MyContext } from '../../../App';
import './CheckoutSidebar.css';

const CheckoutSidebar = () => {

    const { cartTotal } = useContext(MyContext);
    
    return (
        <>
            <div className="checkout__sidebar">
                <div className="sidebar__header">
                    <h4 className="sidebar__title">Subtotal:</h4>
                    <h4 className="cart__sidebar--total-text">${cartTotal.toFixed(2)}</h4>
                </div>
                <div className="sidebar__header">
                    <h4 className="sidebar__title">Shipping:</h4>
                    <h4 className="cart__sidebar--total-text">-</h4>
                </div>
                <div className="sidebar__header">
                    <h4 className="sidebar__title">Tax:</h4>
                    <h4 className="cart__sidebar--total-text">-</h4>
                </div>
                <div className="sidebar__header">
                    <h4 className="sidebar__title">Discount:</h4>
                    <h4 className="cart__sidebar--total-text">-</h4>
                </div>
                <div className="border__line"></div>
                <div className="total__cost--count">
                    <h4 className="cart__sidebar--total-text">${cartTotal.toFixed(2)}</h4>
                </div>
                <div className="voucher__group">
                    <input className='input__field' type="text" placeholder='Voucher' />
                    <button className='btn__voucher'>Apply Voucher</button>
                </div>
                <div className="shipping__form--btn-group">
                    <input form ="shipping-form" type="submit" className='shipping__form--btn' value="Proceed to Payment" />
                </div>

                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm paymentProcess={paymentProcess} handleStripeFormSubmit={handleStripeFormSubmit} />
                </Elements> */}
            </div>
        </>
    );
};

export default CheckoutSidebar;