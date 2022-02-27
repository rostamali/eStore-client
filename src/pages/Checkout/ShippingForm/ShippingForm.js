import React from 'react';
import { useForm } from "react-hook-form";
import './ShippingForm.css';
import { useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const ShippingForm = () => {

    const { register, handleSubmit } = useForm();

    let history = useNavigate();

    const { handleShippingDetails } = useCart();

    const shippingFormSubmit = data => {
        handleShippingDetails(data);
        history('/payment')
    };

    const shippingCountry = ['Select Country', 'Bangladesh', 'India', 'China', 'United State', 'United Kingdom'];

    return (
        <>
            <div className="shipping__form">
                <h4 className="sidebar__title">Shipping Address</h4>
                <form id='shipping-form' onSubmit={handleSubmit(shippingFormSubmit)}>
                    {/* <div className="form__grid">
                        <div className="form__group">
                            <label className="input__field--label" htmlFor="fullName">Full Name</label>
                            <input required id="fullName" className='input__field' type="text" {...register("fullName")} />
                        </div>
                        <div className="form__group">
                            <label className="input__field--label" htmlFor="email">Email Address</label>
                            <input required id="email" className='input__field' type="email" {...register("email")} />
                        </div>
                    </div> */}
                    <div className="form__grid">
                        <div className="form__group">
                            <label className="input__field--label" htmlFor="phoneNumber">Phone Number</label>
                            <input required id="phoneNumber" className='input__field' type="tel" {...register("phoneNumber")} />
                        </div>
                        <div className="form__group">
                        <span className="input__field--label">Country</span>
                            <label className="custom__select" htmlFor="countrySelect">
                                <select required id="countrySelect" name="options" {...register("shippingCountry")}>
                                    {
                                        shippingCountry.map(sc=> <option key={sc} value={sc}>{sc}</option>)
                                    }
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="form__grid">
                        <div className="form__group">
                            <label className="input__field--label" htmlFor="zipCode">Zip Code</label>
                            <input required id="zipCode" className='input__field' type="number" {...register("zipCode")} />
                        </div>
                        <div className="form__group">
                            <label className="input__field--label" htmlFor="addressLine">Address Line</label>
                            <input required id="addressLine" className='input__field' type="text" {...register("addressLine")} />
                        </div>
                    </div>
                    <div className="full__form--group">
                        <label className="input__field--label" htmlFor="additionalNotes">Additional Comments</label>
                        <textarea className='textarea__field' id="additionalNotes" {...register("additionalNotes")} />
                    </div>
                </form>
            </div>
        </>
    );
};

export default ShippingForm;