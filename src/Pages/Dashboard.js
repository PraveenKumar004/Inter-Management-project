import React from 'react'
import NavBar from './NavBar';
import "../styles/dashboard.css";

const Dashboard = () => {

    return (
        <div className='body'>
            <NavBar />
            <div className='main'>
                <h>Dashboard</h>
            </div>
        </div>
    );
};

export default Dashboard;