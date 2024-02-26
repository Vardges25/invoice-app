
import './App.css';
 
import { Route, Routes, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Posts from './pages/Posts';

import NavBar from './components/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const navigate = useNavigate('/');

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate('/login');
    } else {
      navigate('/invoice-app/dashboard');
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      {
        isLoggedIn && (<>
        <NavBar/>
        <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
        </>)
      }
      <Routes>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/invoice-app'>
          <Route path='/invoice-app/users' element={<Users/>}/>
          <Route path='/invoice-app/posts' element ={<Posts/>}/>
          <Route path='/invoice-app/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
