import React from 'react';
import img404 from '../../images/404.svg';
import './NotFound.css';

const NotFound = () => {


    return (
        <>
            <div id="notfound">
                <div className="container text-center">
                    <img src={img404} alt="Not found" className="notfound__thumbnail" />
                </div>
            </div>
        </>
    );
};

export default NotFound;