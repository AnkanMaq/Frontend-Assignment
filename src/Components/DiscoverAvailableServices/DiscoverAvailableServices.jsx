import React from 'react';
import CardAvailableServices from '../Common/CardAvailableServices/CardAvailableServices';
import './DiscoverAvailableServices.css';

const DiscoverAvailableServices = () => {
    return (
        <div >
            <h1 className="heading1">Discover Available Services</h1>
            <div className="big-card">
                <CardAvailableServices />
            </div>
        </div>
    );
};

export default DiscoverAvailableServices;
