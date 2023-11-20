import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './NavBar';
import "../styles/employee.css";
import { Link } from "react-router-dom";
import { VscListFilter } from 'react-icons/vsc';
import { VscPreview } from 'react-icons/vsc';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { LuAlertCircle } from 'react-icons/lu';

const Employee = () => {

    const [userDetails, setuserDetails] = useState([]);
    const [searchValue, setsearchValue] = useState('');

    useEffect(() => {
        axios.get("/internDetails").then(response => setuserDetails(response.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);


    function search(e) {
        setsearchValue({ ...[searchValue], [e.target.name]: e.target.value });
    }


    return (
        <div className='body_e'>
            <NavBar />
            <div className='main_e'>
                <h className="title">Employee</h>
                <input class="search" type='search' id="myinput" placeholder='Search Name' name='searchName' onChange={search} />
                <div className="filter">Filter <span className='icon'><VscListFilter /></span></div>
            </div>
            <div className='content'>

                <div className='table'>

                    <div className='tr head'>
                        <div className='details'>Details</div>
                        <div className='content-container'>
                            <div className='other-details'>Phone No</div>
                            <div className='other-details'>Email ID</div>
                            <div className='other-details'>Domain</div>
                            <div className='other-details'>Date of Join</div>
                        </div>
                    </div>
                    <div className='tr tbody'>
                        <div className='detail_body_hide'><Link to="/viewemployee" className='t'>1234567890</Link><br />
                            <span className='body_icon'>
                                <Link to="/viewemployee" className="p" ><VscPreview /></Link>
                                <Link to="/addemployee" className="p"><FaEdit /></Link>
                                <p3 className="p" onClick={()=>{
                                    var d = document.getElementById("del");
                                    d.style.display = "block"
                                }}><MdDelete /></p3>
                            </span>
                        </div>
                        <div className='detail_body'>1234567890<br />qwertyuioplkjhgfdsazxcvbnm1234567890</div>
                        <div className='content-container'>
                            <div className='other-details'>1234567890</div>
                            <div className='other-details'>qwertyuioplkjhgfdsazxcvbnm1234567890</div>
                            <div className='other-details'>Web Development</div>
                            <div className='other-details'>DATE OF JOIN</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='deletion' id="del">
            <div className='background'>
                <p className='alert'><LuAlertCircle/></p>
                <p>Are you sure you want delete this <span>ID : 687987</span></p>
                <p>This Action Cannot be Undone.</p>
                <span className='confirm_button'>
                <button className='cancel' onClick={()=>{
                                    var d = document.getElementById("del");
                                    d.style.display = "none"
                                }}>Cancel</button>
                <button className='delete'>Yes, Delete it</button>
                </span>
            </div>
        </div>
        </div>

    );
};

export default Employee;