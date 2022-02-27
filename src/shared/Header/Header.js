import React, { useContext, useState } from 'react';
import { IoMdCall } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import './Header.css';
import brandLogo from '../../images/logo.png';
import { BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import MiniCart from '../MiniCart/MiniCart';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../App';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {

    const [showMiniCart, setShowMiniCart] = useState(false);
    const handleCloseMiniCart = () => setShowMiniCart(false);
    const toggleShowMiniCart = () => setShowMiniCart((s) => !s);

    const {cart} = useContext(MyContext);

    // Sticky Navbar
    const [stickyNav, setStickyNav] = useState(false);
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 50){
            setStickyNav(true);
        }else{
            setStickyNav(false);
        }
    });

    const { newUser, handleSignoutUser } = useFirebase();


    return (
        <div id='header__section'>
            <div id="headerTop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className='headerTop__contactList'>
                                <span>
                                    <IoMdCall className='headerTop__contactList--icon'/>+88013 2107 0987
                                </span>
                                <span>
                                    <FaRegEnvelope className='headerTop__contactList--icon'/>support@estore.com
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <NavLink to="/" className='headerTop__link'>Need help?</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="headerMiddle" className={stickyNav && 'stickyNav'}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-6">
                            <NavLink to="/">
                                <img src={brandLogo} alt="brand logo" className="header__logo" />
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-12 res__search--form">
                            <div className="search__form">
                                <div className="search__form--group">
                                    <label htmlFor="searchForm" className='searchForm__icon'><FiSearch/></label>
                                    <div className="searchForm__wrapper">
                                        <input type="text" id="searchForm" placeholder='Search and hit enter...' />
                                    </div>
                                    <div className="searchForm__category--wrapper">
                                        <label className="custom__select" htmlFor="countrySelect">
                                            <select required id="countrySelect" name="options">
                                                <option value="All Categories" disabled>All Categories</option>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 text-end">
                            <NavLink to="/dashboard/order" className='menu__link'>
                                <button className="headerMiddle__icon"><BiUser/></button>
                            </NavLink>
                            <button onClick={toggleShowMiniCart} className="headerMiddle__icon"><BsHandbag/>
                                <span className="cart__qty--number">{cart.length}</span>
                            </button>
                            <MiniCart 
                                showMiniCart={showMiniCart}
                                handleCloseMiniCart={handleCloseMiniCart}
                            ></MiniCart>
                        </div>
                    </div>
                </div>
            </div>

            <div id="headerMenu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="nav__menu">
                                <NavLink to="/" className='menu__link'>Home</NavLink>
                                <NavLink to="/shop" className='menu__link'>Shop</NavLink>
                                <NavLink to="/contact-us" className='menu__link'>Contact</NavLink>
                                {
                                    !newUser.email && <NavLink to="/login" className='menu__link'>Login</NavLink>
                                }
                                {
                                    !newUser.email && <NavLink to="/register" className='menu__link'>Register</NavLink>
                                }
                                {
                                    newUser.email && <button className='signout__btn' onClick={handleSignoutUser}>Logout</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;