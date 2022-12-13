import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import CustomerForm from './CustomerForm';
import MainPage from './MainPage';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import Nav from './Nav';
import SalespersonForm from './SalespersonForm';
import VehicleModelForm from './VehicleModelForm';
import VehicleModelList from './VehicleModelList';
import AutoTechnicianForm from './AutoTechnicianForm'
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceAppointmentList from './ServiceAppointmentList';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordList from './SalesRecordsList';
import SalesRecordHistoryList from './SalesRecordHistoryList';
// import ServiceHistoryList from './ServiceHistoryList';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturerList />}></Route>
          <Route path="/manufacturers/new" element={<ManufacturerForm />}></Route>
          <Route path="/models" element={<VehicleModelList/>} ></Route>
          <Route path= "/models/new" element={<VehicleModelForm/>}></Route>
          <Route path= "/automobiles" element={<AutomobileList/>}></Route>
          <Route path= "/automobiles/new" element={<AutomobileForm/>}></Route>
          <Route path="/customers/new" element={<CustomerForm/>}></Route>
          <Route path= "/salesteam/new" element={<SalespersonForm/>}></Route>
          <Route path="/autotechnician/new" element={<AutoTechnicianForm/>}></Route>
          <Route path="/serviceappointment/new" element={<ServiceAppointmentForm/>}></Route>
          <Route path="/serviceappointments/" element={<ServiceAppointmentList/>}></Route>
          <Route path="/salesrecord/new" element={<SalesRecordForm/>}></Route>
          <Route path="/salesrecords" element={<SalesRecordList/>}></Route>
          <Route path="/salesrecords/history" element={<SalesRecordHistoryList/>}></Route>
          {/* <Route path="servicehistory/" element={<ServiceHistoryList/>}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
