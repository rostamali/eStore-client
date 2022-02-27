import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { MyContext } from '../../../App';
import userImg from "../../../images/ralph.png";
import './Profile.css';

const Profile = () => {

    const { newUser, wishlist } = useContext(MyContext);
    const [totalOrders, setTotalOrders] = useState([]);

    useEffect(()=>{

        const URL = `https://damp-fortress-84268.herokuapp.com/orders/${newUser?.email}`;
        const getOrders = fetch(URL)
        .then(res => res.json())
        .then(data => setTotalOrders(data))

        return () => getOrders;

    }, [newUser.email]);

    let orderTotalCost = 0;
    for(const order of totalOrders){
        orderTotalCost = orderTotalCost + order.totalCost;
    }

    return (
        <>
            <div id="profile">
                <div className="profile__header">
                    <h2 className="dashboard__container--title">
                       <FaUserAlt className='dashboard__container--icon'/> My Profile
                    </h2>
                </div>
                <div className="user__info--wrapper mt__md">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="user__login">
                                <div className="user__thumbnail">
                                    <img src={userImg} alt="User" />
                                </div>
                                <div className="user__info">
                                    <h3 className="user__name">{newUser.displayName}</h3>
                                    <h4 className="user__orderinfo--text">{newUser.email}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 order__info--wrapper">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="user__orderinfo">
                                        <h3 className="user__orderinfo--number">{totalOrders.length}</h3>
                                        <h4 className="user__orderinfo--text">All Orders</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="user__orderinfo">
                                        <h3 className="user__orderinfo--number">${orderTotalCost}</h3>
                                        <h4 className="user__orderinfo--text">Total Cost</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="user__orderinfo">
                                        <h3 className="user__orderinfo--number">{wishlist.length}</h3>
                                        <h4 className="user__orderinfo--text">Wishlist</h4>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="user__orderinfo">
                                        <h3 className="user__orderinfo--number">16</h3>
                                        <h4 className="user__orderinfo--text">All Orders</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;