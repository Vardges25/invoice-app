

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <DropdownButton id="dropdown-item-button" title="Menu">
      <Dropdown.Item as="button"><Link to="/invoice-app/dashboard">Dashboard</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to ="/invoice-app/users">Users</Link></Dropdown.Item>
      <Dropdown.Item as="button"><Link to ="/invoice-app/posts">Posts</Link></Dropdown.Item>
    </DropdownButton>
  );
}

export default NavBar;