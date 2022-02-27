import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import useStorage from '../../hooks/useStorage';


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    const { cartTotal, newUser, cart, setCart } = useContext( MyContext );


    const [clientSecret, setClientSecret] = useState('');
    const [paymentProcess, setPaymentProcess] = useState(false);
    const [paymentMessage, setPaymentMessage] = useState('');
    const {clearTheCart} = useStorage()

    
    // http://localhost:4000/
    useEffect(()=>{
        fetch('https://damp-fortress-84268.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price: cartTotal})
        })
        .then(res => res.json())
        .then(data => {
            setClientSecret(data.clientSecret)
        })
    }, [cartTotal])

    const handleStripeFormSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setPaymentProcess(true);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setPaymentMessage(error.message);
        } else {
            setPaymentMessage('Payment successfully complate');
        }

        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name: newUser.displayName,
                    email: newUser.email
                },
              },
            },
        );

        if(intentError){
            setPaymentMessage(error.message);
            setPaymentProcess(false);
        }else{
            setPaymentMessage('Payment successfully complate');
            setPaymentProcess(false);

            axios.post('https://damp-fortress-84268.herokuapp.com/order', {
                shippingDetails: "shippingDetails",
                OrderDetails: cart,
                PaymentStatus: 'paid',
                orderNumber: Math.floor(Math.random()*90000) + 10000,
                email: newUser.email,
                purchasedDate: new Date().toDateString(),
                totalCost: cartTotal,
                OrderStatus: 'pending'
            })
            .then(function (response) {
                if(response.data.insertedId){
                    setCart([]);
                    clearTheCart();
                }
            })

            // navigate('/dashboard/order');
        }
    };


    return (
        <>
            <div className="cardPayment__header mt__lg">
                <h4 className="sidebar__title">Pay with card:</h4>
            </div>
            <form onSubmit={handleStripeFormSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            },
                            invalid: {
                            color: '#9e2146',
                            },
                        },
                        hidePostalCode: true
                    }}
                />
                <button className={`payment__btn ${paymentProcess ? 'btn__disabled': ''}`} type="submit" disabled={!stripe}>
                    Pay Now {paymentProcess && <Spinner animation="border" className='payment__spinner' />}
                </button>
                {
                    paymentMessage && <div className="text-center"><p className="error__msg">{paymentMessage}</p></div>
                }
            </form>
        </>
    );
};

export default CheckoutForm;