import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { MyContext } from '../../App';

const UserRoute = ({children}) => {

    const { newUser, loading } = useContext(MyContext);
    const location = useLocation();

    if(loading){
        
        return <div id="spinner__section">
            <div className="container">
                <div className="spinner__inner">
                    <Spinner animation="border" className='spinner__color' />
                </div>
            </div>
        </div>;
    }

    return (
        newUser.displayName ? children 
        : 
        <Navigate to="/login" replace state={{from: location}} />
    );
};

export default UserRoute;