import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

import './index.scss';

const user = {
  login: '1',
  password: '1'
};

function Login({setIsLoggedIn}) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
     if (login === user.login && password === user.password) {
      setIsLoggedIn(true);
     }
  };

  return (
    <>
      <Form.Group className="mb-3 inputLogin" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={login} onChange={(e) => setLogin(e.currentTarget.value)} type="text" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 inputLogin" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button onClick={signIn} variant="primary" type="submit">Sign in</Button>  
   </>
  );
}

export default Login;