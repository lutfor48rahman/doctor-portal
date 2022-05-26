import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner';
import Footer from '../Shared/Footer/Footer';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;