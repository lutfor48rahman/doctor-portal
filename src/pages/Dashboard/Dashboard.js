import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin,adminLoading] = useAdmin(user);

  if(adminLoading){
    return <Loading></Loading>
  }
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <h2 className='text-5xl text-purple-500'>Dashboard</h2>
          <Outlet></Outlet>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">My Appointment</Link></li>
            <li><Link to="/dashboard/review">My Review</Link></li>
            <li><Link to="/dashboard/history">My History</Link></li>
            {admin && <>
              <li><Link to="/dashboard/users">All Users</Link></li>
              <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
            </>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;