import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import MainPage from './MainPage';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import Nav from './Nav';
import VehicleModelForm from './VehicleModelForm';
import VehicleModelList from './VehicleModelList';

function App(props) {
  if (props.autos === undefined && props.models === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturerList manufacturers={props.manufacturers}/>}></Route>
          <Route path="/manufacturers/new" element={<ManufacturerForm />}></Route>
          <Route path="/models" element={<VehicleModelList models={props.models}/>}></Route>
          <Route path= "/models/new" element={<VehicleModelForm/>}></Route>
          <Route path= "/automobiles" element={<AutomobileList autos={props.autos}/>}></Route>
          <Route path= "/automobiles/new" element={<AutomobileForm/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
