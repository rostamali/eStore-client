import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const { handleSigninUser, authError, setNewUser, setAuthError, setLoading } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();
    const redirectUri = location.state?.from || '/';

    const onSubmit = data => {

        handleSigninUser(data.email, data.password)
        .then((userCredential) => { 
            const user = userCredential.user;
            setNewUser(user);
            setAuthError('');
            navigate(redirectUri);
        })
        .catch((error) => {
            const errorCode = error.code;
            setAuthError(errorCode);
        }).finally(()=>setLoading(false));
        reset();
    };

    

    return (
        <>
            <div id="login">
                <div className="container">
                    <div className="form__wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="input__field--label" htmlFor="email">Email</label>
                            <input className='input__field' id="email" type="email" {...register("email")} required />

                            <label className="input__field--label" htmlFor="password">Password</label>
                            <input className='input__field' minLength="6" id="password" type="password" {...register("password")} required />
                            <input className='form__btn' type="submit" value="Login Now" />
                        </form>
                        <div className="text-center mt__sm">
                            <NavLink className="notification__color" to="/register">New user ?</NavLink>
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

export default Login;