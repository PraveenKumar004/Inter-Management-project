import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import NavBar from "./NavBar";
import "../styles/attendance.css";

const { Option } = Select;

const Mark = () => {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSession, setSelectedSession] = useState("");
  const [attendanceData, setAttendanceData] = useState([
    { no: 1, id: 101, name: "Sanjay", domain: "Web Development", status: null },
    {
      no: 2,
      id: 102,
      name: "Sangamithra",
      domain: "Business Analyst",
      status: null,
    },
    {
      no: 3,
      id: 103,
      name: "Harini S K",
      domain: "Graphic Design",
      status: null,
    },
    // Add more persons as needed
  ]);

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(date);

    const selectedDay = date.format("dddd");
    const formattedDate = date.format("DD/MM/YYYY");
    const session = selectedSession;
  };

  const handleSessionChange = (value) => {
    setSelectedSession(value);
  };

  const handleStatusClick = (id, status) => {
    setAttendanceData((prevData) =>
      prevData.map((person) =>
        person.id === id ? { ...person, status } : person
      )
    );
  };

  return (
    <div className="overall_m">
      <NavBar />
      <div className="main_m">
        <h4>Attendance/Mark</h4>
      </div>
      <div className="calendar_m">
        <div>
          <h4>Attendance/Mark</h4>
        </div>

        <h>Select Date : </h>
        <DatePicker onChange={handleDateChange} value={selectedDate} />
        <Select
          value={selectedSession}
          style={{ width: 120 }}
          onChange={handleSessionChange}
          placeholder="Select Session"
        >
          <Option value="">Select Session</Option>
          <Option value="FN">FN</Option>
          <Option value="AN">AN</Option>
        </Select>

        <select
          id="domain_m"
          value={selectedDomain}
          onChange={handleDomainChange}
        >
          <option value="">Select Domain</option>
          <option value="web-development">Web Development</option>
          <option value="business-analyst">Business Analyst</option>
          <option value="graphic-design">Graphic Design</option>
          <option value="software-engineering">Software Engineering</option>
        </select>
      </div>
      <div className="mark_m">
        <div className="table-container_m">
          <table className="table_m">
            <thead>
              <tr>
                <th className="table-header_m">S/No</th>
                <th className="table-header_m">Employee ID</th>
                <th className="table-header_m">Name</th>
                <th className="table-header_m">Domain</th>
                <th className="table-header_m">Present</th>
                <th className="table-header_m">Absent</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((person) => (
                <tr key={person.id}>
                  <td className="table-data_m">{person.no}</td>
                  <td className="table-data_m">{person.id}</td>
                  <td className="table-data_m">{person.name}</td>
                  <td className="table-data_m">{person.domain}</td>
                  <td className="table-data_m center-checkbox">
                    <input
                      type="checkbox"
                      checked={person.status === "present"}
                      onChange={() => handleStatusClick(person.id, "present")}
                    />
                  </td>
                  <td className="table-data_m center-checkbox">
                    <input
                      type="checkbox"
                      checked={person.status === "absent"}
                      onChange={() => handleStatusClick(person.id, "absent")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="Marked_m">
          <div>
            <button>Submit</button>
            <h3>
              Marked:<span>00</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mark;
