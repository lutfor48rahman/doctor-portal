import React from 'react';
import CartInfo from './CartInfo';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <CartInfo cartTitle="Openning Hours" bgColor="bg-gradient-to-r from-secondary to-primary" img={clock}></CartInfo>
            <CartInfo cartTitle="Ours Locations" bgColor="bg-accent" img={marker}></CartInfo>
            <CartInfo cartTitle="Contact us now" bgColor="bg-gradient-to-r from-secondary to-primary" img={phone}></CartInfo>
        </div>
    );
};

export default Info;