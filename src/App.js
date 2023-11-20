import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import Employee from "./Pages/Employee"
import Markattendance from "./Pages/Markattendance"
import Viewattendance from "./Pages/Viewattendance"
import Reports from "./Pages/Reports"
import View from "./Pages/view"
import Edit from "./Pages/edit"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/markattendance" element={<Markattendance />} />
          <Route path="/viewattendance" element={<Viewattendance />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/viewemployee" element={<View />} />
          <Route path="/editemployee" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
