import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../styles/Viewattendance.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

const Mark = () => {
  const [selectedMonth, setSelectedMonth] = useState({ month: "" });
  const [attendnessResult, setattendnessResult] = useState([]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  useEffect(() => {
    axios
      .get("/viewattendness")
      .then((response) => setattendnessResult(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="_body_">
      <NavBar />
      <div className="_view_">
        <div className="_h2_">
          <div className="_attendtitle_">
            <h2>Attendance/View</h2>
            <div className="_month_">
              <select
                className="_month-select_"
                name="month"
                onChange={handleMonthChange}
              >
                <option value="_Month_" disabled>
                  Month
                </option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className="_employeeId_">
              employee Idㅤ<span className="_spid_">103</span>ㅤㅤㅤㅤㅤNameㅤ
              <span className="_spname_">Gowtham</span>
            </div>
          </div>
          <div className="_percentage_">75%</div>
        </div>
      </div>

      <div className="tables_">
        <table className="_tables_">
          <tr className="_tr_">
            <th className="_th_">S.no</th>
            <th className="_th_">Date</th>
            <th className="_th_">Days</th>
            <th className="_th_">Forenoon</th>
            <th className="_th_">Afternoon</th>
          </tr>

          {attendnessResult.map((intern, i) => (
            <tr className="_tr_" key={i}>
              <td className="_td_">{i + 1}</td>
              <td className="_td_">{intern._id}</td>
              <td className="_td_">{intern.day}</td>
              <td className="_td_">
                {intern.FN[0]["65519c52e1a5c36e84bba68d"] === "p" ? (
                  <div>
                    <AiFillCheckCircle className="_present_" />
                  </div>
                ) : (
                  <div>
                    <AiFillCloseCircle className="_absent_" />
                  </div>
                )}
              </td>
              <td className="_td_">
                {intern.AN[0]["65519c52e1a5c36e84bba68d"] === "p" ? (
                  <div>
                    
                    <AiFillCheckCircle className="_present_" />
                  </div>
                ) : (
                  <div>
                    <AiFillCloseCircle className="_absent_" />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Mark;
