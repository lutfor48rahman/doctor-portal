import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (user) {
    fetch(`http://localhost:5000/booking?patient=${user.email}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          console.log('res', res)
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/');
        }
        return res.json()
      })
      .then(data => setAppointment(data));
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
            appointment.map(a =>
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