import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const ServiceAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center mt-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt=""  />
            </div>
            <div className='flex-1 p-5'>
                <h1 className='text-primary text-xl font-bold'>Appointment</h1>
                <h2 className='text-3xl text-white py-5'>Make an appointment today</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio reiciendis, maxime non quae perferendis a ex id, culpa voluptate deleniti quos asperiores officiis incidunt totam quia dolorum suscipit aspernatur tenetur.</p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default ServiceAppointment;