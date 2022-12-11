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
import SalesRecordForm from './SalesRecordForm';
import SalesRecordList from './SalesRecordsList';
import SalesRecordHistoryList from './SalesRecordHistoryList';


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
          <Route path= "/customers/new" element={<CustomerForm/>}></Route>
          <Route path= "/salesteam/new" element={<SalespersonForm/>}></Route>
          <Route path="/autotechnician" element={<AutoTechnicianForm/>}></Route>
          <Route path="/salesrecord/new" element={<SalesRecordForm/>}></Route>
          <Route path="/salesrecords/" element={<SalesRecordList/>}></Route>
          <Route path="/salesrecord/history/" element={<SalesRecordHistoryList/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
