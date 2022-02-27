import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Register.css';

const Register = () => {

    const { register, handleSubmit, reset } = useForm();
    const { handleRegisterUser, authError } = useFirebase();
    const onSubmit = data => {
        handleRegisterUser(data.fullName, data.email, data.password);
        reset();
    };

    return (
        <>
            <div id="register">
                <div className="container">
                    <div className="form__wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="input__field--label" htmlFor="fullName">Full Name</label>
                            <input className='input__field' id='fullName' type="text" {...register("fullName")} required />

                            <label className="input__field--label" htmlFor="email">Email</label>
                            <input className='input__field' id="email" type="email" {...register("email")} required />

                            <label className="input__field--label" htmlFor="password">Password</label>
                            <input className='input__field' minlength="6" id="password" type="password" {...register("password")} required />
                            <input className='form__btn' type="submit" value="Register Now" />
                        </form>
                        <div className="text-center mt__sm">
                            <NavLink className="notification__color" to="/login">Already have an account ?</NavLink>
                        </div>
                        <div className="text-center mt__sm">
                            {
                                authError && <p className="error__msg">{authError.split('/')[1]}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;