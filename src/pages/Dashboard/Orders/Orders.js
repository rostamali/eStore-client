import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BsHandbag } from "react-icons/bs";
import { MyContext } from '../../../App';
import './Order.css';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true);
    const {newUser} = useContext(MyContext);

    useEffect(()=>{

        const URL = `https://damp-fortress-84268.herokuapp.com/orders/${newUser?.email}`;
        const getOrders = fetch(URL)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            setOrdersLoading(false)
        })

        return () => getOrders;

    }, [newUser.email])
    
    return (
        <>
            {
                ordersLoading ? 
                <div className="orders__loader spinner__inner">
                    <Spinner animation="border" className='spinner__color' />
                </div>
                :
                <div id="orders">
                    <div className="orders__header">
                        <h2 className="dashboard__container--title">
                        <BsHandbag className='dashboard__container--icon'/> My Orders
                        </h2>
                    </div>
                    <div className="order__list--header">
                        <h3 className="order__list--title">Order#</h3>
                        <h3 className="order__list--title">Status</h3>
                        <h3 className="order__list--title">Date purchased</h3>
                        <h3 className="order__list--title">Total</h3>
                    </div>
                    <div className="order__list--wrapper">
                        {
                            orders.map(order => <div key={order.orderNumber} className="order__list--item">
                                <h5 className="order__number">{order?.orderNumber}</h5>
                                <h5 className="order__status"><span className={order.OrderStatus}>{order.OrderStatus}</span></h5>
                                <h5 className="order__date">{order.purchasedDate}</h5>
                                <h5 className="order__cost">${order.totalCost.toFixed(2)}</h5>
                            </div>)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Orders;