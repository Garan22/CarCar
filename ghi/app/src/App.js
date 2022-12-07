import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import Nav from './Nav';
import VehicleModelForm from './VehicleModelForm';

function App(props) {
  if (props.manufacturers === undefined) {
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
          <Route path= "/models/new" element={<VehicleModelForm/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
