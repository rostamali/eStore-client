import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div id="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12">
                            <DashboardMenu></DashboardMenu>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;