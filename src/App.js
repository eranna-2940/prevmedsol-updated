import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDoctor from './components/users/AddDoctor';
import Addpatient from './components/users/AddPatient';
import DashboardPage from './components/Dashboard';
import Navbar from './components/Navbar';
import Addlab from './components/centers/AddLab';
import Addcenter from './components/centers/AddCenter';
import Addappointment from './components/appointments/AddAppointment';
import Addlabagent from './components/users/AddLabagent';
import Managecenter from './components/centers/ManageCenter';
import Managelab from './components/centers/ManageLab';
import Labappoinment from './components/appointments/LabAppointment';
import Patientappoinment from './components/appointments/PatientAppointment';
import Managestate from './components/Location/Managestate';
import Managecity from './components/Location/Managecity';
import Managelocation from './components/Location/Managelocation';
import Managepackage from './components/packages/Managepackage';
import Addpackage from './components/packages/Addpackage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<DashboardPage/>}></Route>
          <Route path='addDoctor' element={<AddDoctor />}></Route>
          <Route path='addPatient' element={<Addpatient />}></Route>
          <Route path='addlabagent' element={<Addlabagent />}></Route>
          <Route path='addlab' element={<Addlab/>}></Route>
          <Route path='addcenter' element={<Addcenter/>}></Route>
          <Route path='Managecenter' element={<Managecenter/>}></Route>
          <Route path='Managelab' element={<Managelab/>}></Route>
          <Route path='addappointment' element={<Addappointment/>}></Route>
          <Route path='Labappoinment' element={<Labappoinment/>}></Route>
          <Route path='Patientappointment' element={<Patientappoinment/>}></Route>
          <Route path='Managestate' element={<Managestate/>}></Route>
          <Route path='Managecity' element={<Managecity/>}></Route>
          <Route path='Managelocation' element={<Managelocation/>}></Route>
          <Route path='Managepackage' element={<Managepackage/>}></Route>
          <Route path='Addpackage' element={<Addpackage/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
