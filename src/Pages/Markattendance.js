import React, { useState } from 'react';
import { DatePicker, Select } from 'antd';
import NavBar from './NavBar';
import "../styles/attendance.css";

// Import Option from antd

const { Option } = Select;
const Mark = () => {
    const [selectedDomain, setSelectedDomain] = useState('');
    const [selectedDate, setSelectedDate] = useState(null); // Add state for selected date
    const [selectedSession, setSelectedSession] = useState(''); // Add state for selected session

    const handleDomainChange = (event) => {
        setSelectedDomain(event.target.value);
    };

    const handleDateChange = (date, dateString) => {
        setSelectedDate(date);

        // Extract day, formatted date, and session (FN/AN) from the selected date
        const selectedDay = date.format('dddd'); // Get the day name
        const formattedDate = date.format('DD/MM/YYYY'); // Format the date as dd/mm/yyyy
        const session = selectedSession; // Use the selected session from state

        // You can now send the selectedDay, formattedDate, and session to your backend or perform other actions.
        console.log('Selected Date:', formattedDate);
        console.log('Selected Day:', selectedDay);
        console.log('Selected Session:', session);
    };

    const handleSessionChange = (value) => {
        setSelectedSession(value);
    };



    return (
        <div className='body'>
            <NavBar />
            <div className='main'>
                <p>Attendance Mark</p>
                <div className='heading'>

                    <div className='calendar'>
                        <h>Select Date</h>
                        <DatePicker onChange={handleDateChange} value={selectedDate} />
                        <Select
                            value={selectedSession}
                            onChange={handleSessionChange}
                            placeholder="Select Session" // Add a placeholder text
                        >
                            <Option value="">Select Session</Option> {/* Empty value for placeholder */}
                            <Option value="FN">FN</Option>
                            <Option value="AN">AN</Option>
                        </Select>
                    </div>
                    <div>
                        <select id="domain" value={selectedDomain} onChange={handleDomainChange}>
                            <option value="">Select Domain</option>
                            <option value="web-development">Web Development</option>
                            <option value="business-analyst">Business Analyst</option>
                            <option value="graphic-design">Graphic Design</option>
                            <option value="software-engineering">Software Engineering</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='tmark'>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header">S/No</th>
                            <th className="table-header">Employee ID</th>
                            <th className="table-header">Name</th>
                            <th className="table-header">Domain</th>
                            <th className="table-header">Present</th>
                            <th className="table-header">Absent</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="table-data">1</td>
                            <td className="table-data">101</td>
                            <td className="table-data">Sanjay</td>
                            <td className="table-data">Web Development</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">
                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">2</td>
                            <td className="table-data">102</td>
                            <td className="table-data">Sangamithra</td>
                            <td className="table-data">Business Analyst</td>
                            <td className="table-data center-image">
                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>

                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>

                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>
                        <tr>
                            <td className="table-data">3</td>
                            <td className="table-data">103</td>
                            <td className="table-data">Harini S K</td>
                            <td className="table-data">Graphic Design</td>
                            <td className="table-data center-image">

                            </td>
                            <td className="table-data center-image">

                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default Mark;