import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background:`url(${appointment})`,
        }} className='mt-12'>
            <div className='mt-5'>
                <h3 className='text-primary text-xl text-center'>Contact us</h3>
                <h1 className='text-white text-4xl text-center'>Stay connetct with us</h1>
            </div>
            <div className='mt-5 text-center'><input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" /></div>
            <div className='mt-5 text-center'> <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs" /></div>
            <div className='mt-5 text-center'><textarea class="textarea input input-bordered w-full max-w-xs" placeholder="Your message"></textarea></div>
           <div className='text-center'><button className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary  my-5'>submit</button></div>
            
        </div>
    );
};

export default Contact;