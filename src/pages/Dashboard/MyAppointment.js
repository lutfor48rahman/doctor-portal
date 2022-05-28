import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointment ,setAppointment] = useState([]);
    const [user] = useAuthState(auth);

    if (user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`,{
          method:'GET',
          headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>{
          console.log('res',res)
          return res.json()})
        .then(data=>setAppointment(data));
    }
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
         
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Patient</th>
              <th>Time Slot</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
                appointment.map(a=>
                    <tr>
              <th></th>
              <td>{a.date}</td>
              <td>{a.patient}</td>
              <td>{a.slt}</td>
              <td>{a.treatment}</td>
            </tr>
            )
            }
          </tbody>
        </table>
      </div>
    );
};

export default MyAppointment;