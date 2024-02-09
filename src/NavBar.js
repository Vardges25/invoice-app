

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    
    <DropdownButton id="dropdown-item-button" title="Menu">
      
      <Dropdown.Item as="button"><Link to="/">Dashboard</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to ="/Users">Users</Link></Dropdown.Item>
      
    
    </DropdownButton>
    
  );
}

export default NavBar;