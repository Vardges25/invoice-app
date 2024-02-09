
import '../App.css';
 
import { Route, Routes } from 'react-router-dom';
import Users from '../users';

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from '../dashpoard';

import NavBar from '../NavBar';

function InvoiceApp() { 

  return (
    <div>
     <NavBar/>
      
     <Routes>
      <Route path='/users' element={<Users/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default InvoiceApp;
