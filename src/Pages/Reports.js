import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../styles/reports.css";
import axios from "axios";
import { VscListFilter } from "react-icons/vsc";

const Employee = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("/internDetails")
      .then((response) => setUserDetails(response.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function search(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="body_2">
      <NavBar />
      <div className="view_2">
        <div className="h2_2">
          <div className="attendtitle_2">
            <h2>Attendance/View</h2>
            <input
              className="search_2"
              type="search"
              id="myinput"
              placeholder="Search Name"
              value={searchValue}
              onChange={search}
            />
            <div className="filter_2">
              Filter{" "}
              <span className="icon_2">
                <VscListFilter />
              </span>
            </div>
          </div>

          <div className="table_2">
            <table className="tables_2">
              <thead>
                <tr className="tr_23">
                  <th className="th_23">S.no</th>
                  <th className="th_23">Employee ID</th>
                  <th className="th_23">Name</th>
                  <th className="th_23">Domain</th>
                  <th className="th_23">Present %</th>
                  <th className="th_23">Absent %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr_2">
                  <td className="th_2">1</td>
                  <td className="th_2">001</td>
                  <td className="th_2">sanjai</td>
                  <td className="th_2">web Development</td>
                  <td className="th_2">86%</td>
                  <td className="th_2">14%</td>
                </tr>
                {userDetails.map((user, index) => (
                  <tr key={index} className="tr_2">
                    <td className="th_2">{index + 1}</td>
                    <td className="th_2">{user.employeeID}</td>
                    <td className="th_2">{user.name}</td>
                    <td className="th_2">{user.domain}</td>
                    <td className="th_2">{user.presentPercentage}</td>
                    <td className="th_2">{user.absentPercentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
