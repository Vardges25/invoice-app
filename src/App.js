
import './App.css';
 
import { Route, Routes, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar';
import Login from './login';
import { useEffect, useState } from 'react';

import InvoiceApp from './InvoiceApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const navigate = useNavigate('/');

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate('/login');
    } else {
      navigate('/invoice-app');
    }
  }, [isLoggedIn]);
 

  return (
    <div className="App">      
      <Routes>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/invoice-app' element={InvoiceApp} />
      </Routes>
    </div>
  );
}

export default App;
