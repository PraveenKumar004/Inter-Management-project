import React from 'react'
import NavBar from './NavBar';
import "../styles/employee.css";
import { VscListFilter } from 'react-icons/vsc';

const Employee = () => {

    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    return (
        <div className='body'>
            <NavBar />
            <div className='main'>
                <h className="title">Employee</h>
                <input class="search" type='text' id="myinput" onkeyup="myfunction()" placeholder='  Search Name' ></input>
                <h className="filter"><VscListFilter/></h>
            </div>
            <div className='content'>
               <table className='table'>
                <tr >
                    <div className='ttitle'>
                    <th>Details</th>
                    <th>Phone No</th>
                    <th>Email ID</th>
                    <th>Domain</th>
                    <th>Date of Join</th>
                    </div>
                </tr>
               </table>
               <table>
                <tr>
                    <div className='tcontent'>
                    <td>imag</td>
                    <td>id name<br/><span>name</span></td>
                    <td>70702e</td>
                    <td>gmail</td>
                    <td>web</td>
                    <td>202023</td>
                    </div>
                </tr>
               </table>
            </div>
        </div>
    );
};

export default Employee;