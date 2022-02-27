import React from 'react';
import CheckoutSidebar from '../CheckoutSidebar/CheckoutSidebar';
import ShippingForm from '../ShippingForm/ShippingForm';
import './Checkout.css';

const Checkout = () => {

    

    return (
        <>
            <div id="checkout">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <ShippingForm></ShippingForm>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <CheckoutSidebar></CheckoutSidebar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;