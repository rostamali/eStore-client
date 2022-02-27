import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { MyContext } from '../../App';
import CheckoutForm from '../../shared/CheckoutForm/CheckoutForm';
import './Payment.css';

const stripePromise = loadStripe('pk_test_51KUQHREBn2ix5PoMdvEe7VKS8O3MoBppthWMLC6OolTKmD0ZdZYSMNB5hKDzhaYiojji5vZyn8egg5XnxeA0Oq5u00mP2pO4tf');

const Payment = () => {

    const { cartTotal } = useContext(MyContext);

    return (
        <>
            <div id="payment">
                <div className="container">
                    <div className="payment__form--wrapper">
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

                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;