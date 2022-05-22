import React from 'react';
import Banner from './Banner';
import Info from './Info';
import ServiceAppointment from './ServiceAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceAppointment></ServiceAppointment>
        </div>
    );
};

export default Home;