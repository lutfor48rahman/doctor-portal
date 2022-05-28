import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast} from 'react-toastify';

const BookingModal = ({ date, treatment,setTreatment,refetch }) => {
    const {_id, name, slot } = treatment;
    const [user,loading,error] = useAuthState(auth);
    const formatDate = format(date,'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const slt = event.target.slt.value;
        const phone = event.target.phone.value;
        // console.log(_id,name,slt,phone);

        // create patient Appointment
        const booking = {
            treatmentId:_id,
            treatment:name,
            date:formatDate,
            slt,
            patient:user.email,
            patientName: user.displayName,
            phone
        }

        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                toast(`Appointment is set ${formatDate} at ${slt}`);
            }
            else{
                toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slt}`)
            }
        })
        refetch();
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slt" class="select select-bordered w-full max-w-xs">
                            {
                                slot.map(slt => <option value={slt}> {slt} </option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value = {user?.displayName} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;