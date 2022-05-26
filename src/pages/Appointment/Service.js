import React from 'react';

const Service = ({ service,setTreatment }) => {
    const {name,slot} = service;
    return (
        <div class="card w-96">
            <div class="card-body">
                <h2 class="card-title justify-center text-secondary">{name}</h2>
                <p className='text-center'>
                    {
                        slot.length >0 
                        ? <span>{slot[0]}</span>
                        : <span className='text-red-500'>Try another date</span>
                    }
                </p>
                <p className='text-center'>{slot.length} {slot.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label 
                    for="booking-modal" 
                    disabled={slot.length === 0 } 
                    onClick={()=>setTreatment(service)}
                    class="btn btn-secondary text-white uppercase justify-center">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;