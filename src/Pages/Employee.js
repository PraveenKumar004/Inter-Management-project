import React from 'react'
import NavBar from './NavBar';
import "../styles/employee.css";
import { VscListFilter } from 'react-icons/vsc';

const Employee = () => {

    return (
        <div className='body'>
            <NavBar />
            <div className='main'>
                <h className="title">Employee</h>
                <input className='search' type='text' id="myinput" onkeyup="myfunction()" placeholder='  Search Name' ></input>
                <h className="filter"><span className='icon'>Filter </span><VscListFilter/></h>
            </div>
            <div className='content'>
                <h>emp ID</h>
                <p>Prveeen</p>
            </div>
        </div>
    );
};

export default Employee;