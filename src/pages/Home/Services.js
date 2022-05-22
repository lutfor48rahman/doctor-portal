import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            describtion: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            describtion: '',
            img: fluoride
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            describtion: '',
            img: fluoride
        }
    ];
    return (
        <div>
            <div className='text-center mt-10'>
                <h3 className='font-bold text-xl text-primary'>Our Services</h3>
                <h1 className='font-bold text-4xl'>Services We Provide</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;