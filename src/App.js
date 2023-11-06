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
import Patients from './components/Accounts/Patients';
import Doctors from './components/Accounts/Doctors';
import Labagents from './components/Accounts/Labagents';
// import Adminpage from './components/Adminpage';
import Loginpage from './components/logincomponents/Loginpage';
import Adminpage from './components/logincomponents/Adminpage'
import Superadminpage from './components/logincomponents/Superadminpage'
import Register from './components/logincomponents/Register';
import Invoice from './components/Payments/Invoice';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Loginpage/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='adminpage' element={<Adminpage/>}></Route>
          <Route path='superadminpage' element={<Superadminpage/>}></Route>
          <Route path='dashboardpage' element={<DashboardPage/>}></Route>
          <Route path='adddoctor' element={<AddDoctor />}></Route>
          <Route path='addpatient' element={<Addpatient />}></Route>
          <Route path='addlabagent' element={<Addlabagent />}></Route>
          <Route path='addlab' element={<Addlab/>}></Route>
          <Route path='addcenter' element={<Addcenter/>}></Route>
          <Route path='managecenter' element={<Managecenter/>}></Route>
          <Route path='managelab' element={<Managelab/>}></Route>
          <Route path='addappointment' element={<Addappointment/>}></Route>
          <Route path='labappoinment' element={<Labappoinment/>}></Route>
          <Route path='patientappointment' element={<Patientappoinment/>}></Route>
          <Route path='managestate' element={<Managestate/>}></Route>
          <Route path='managecity' element={<Managecity/>}></Route>
          <Route path='managelocation' element={<Managelocation/>}></Route>
          <Route path='managepackage' element={<Managepackage/>}></Route>
          <Route path='addpackage' element={<Addpackage/>}></Route>
          <Route path='patients' element={<Patients/>}></Route>
          <Route path='invoice' element={<Invoice/>}></Route>
          <Route path='patients' element={<Patients/>}></Route>
          <Route path='doctors' element={<Doctors/>}></Route>
          <Route path='labagents' element={<Labagents/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
