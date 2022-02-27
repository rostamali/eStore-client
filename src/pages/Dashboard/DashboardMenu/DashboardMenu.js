import React from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardMenu.css';
import { BsHandbag } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const DashboardMenu = () => {
    
    return (
        <>
            <div className="dashboard__sidebar">
                <div className="dashboard__sidebard--header">
                    <h5 className="dashboard__sm--title">Dashboard</h5>
                </div>
                <div className="dashboard__menu mt__md">
                    <NavLink className="dashboard__menu--link" to="/dashboard/order">
                        <BsHandbag className='dashboard__menu--icon'/> <span className='dashboard__menu--text'>Orders</span>
                    </NavLink>
                    <NavLink className="dashboard__menu--link" to="/dashboard/wishlist">
                        <BsSuitHeart className='dashboard__menu--icon'/> <span className='dashboard__menu--text'>Wishlist</span>
                    </NavLink>
                </div>  
                <div className="dashboard__sidebard--header">
                    <h5 className="dashboard__sm--title">Dashboard</h5>
                </div>  
                <div className="dashboard__menu mt__md">
                    <NavLink className="dashboard__menu--link" to="/dashboard/profile">
                        <BiUser className='dashboard__menu--icon'/> <span className='dashboard__menu--text'>Profile Info</span>
                    </NavLink>
                </div>       
            </div>
        </>
    );
};

export default DashboardMenu;