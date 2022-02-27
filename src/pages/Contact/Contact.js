import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {

    const { register, handleSubmit } = useForm();
    const handleContactForm = (data) =>{
        console.log(data);
    }

    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="contact__form--wrapper">
                        <form onSubmit={handleSubmit(handleContactForm)}>
                            <div className="form__grid">
                                <div className="form__group">
                                    <label className="input__field--label" htmlFor="fullName">Full Name</label>
                                    <input required id="fullName" className='input__field' type="text" {...register("fullName")} />
                                </div>
                                <div className="form__group">
                                    <label className="input__field--label" htmlFor="email">Email Address</label>
                                    <input required id="email" className='input__field' type="email" {...register("email")} />
                                </div>
                            </div>
                            <div className="full__form--group">
                                <label className="input__field--label" htmlFor="subject">Subject</label>
                                <input required id="subject" className='input__field' type="text" {...register("subject")} />
                            </div>
                            <div className="full__form--group">
                                <label className="input__field--label" htmlFor="message">Message</label>
                                <textarea className='textarea__field' id="message" {...register("message")} />
                            </div>
                            <input className='form__btn' type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;