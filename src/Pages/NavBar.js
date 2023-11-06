import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import "../styles/Navbar.css"
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="Topnav">
                <h1>Statix.<span className="pro">pro</span></h1>
            </div>
            <div className="Sidenav">
                <NavLink to="/" className="link">Dashboard</NavLink>
                <NavLink to="/employee" className="link">Employee</NavLink>
                <Link onClick={() => setIsOpen(!isOpen) } className="link"><span className="linkd">Attendance <BiChevronDown/> </span></Link>
                {isOpen && (
                    <div>
                        <NavLink to="/markattendance" className="linkopt">Mark Attendance</NavLink>
                        <NavLink to="/viewattendance" className="linkopt">View Attendance</NavLink>
                    </div>
                )}

                    <div>
                        <NavLink to="/markattendance" className="linkopt">Mark Attendance</NavLink>
                        <NavLink to="/viewattendance" className="linkopt">View Attendance</NavLink>
                    </div>
                
                <NavLink to="/reports" className="link">Reports</NavLink>

            </div>
        </>
    );
}
export default NavBar;

