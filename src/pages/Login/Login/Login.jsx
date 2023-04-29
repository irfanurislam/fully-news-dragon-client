import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log('location changed ',location)
  const from = location.state?.from?.pathname || '/category/0'

const handleLogin = event =>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value
  const password = form.password.value
  console.log(email,password)
  signIn(email,password)
  .then(result => {
    const signUser = result.user
    console.log(signUser)
    navigate(from,{replace: true})
  }).catch(error =>{
    console.log(error)
  })
}




    return (
        <Container>
            <Form onSubmit={handleLogin} className='w-25 mx-auto'>
                <h3>Please login </h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name='remember' type="checkbox" label="remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Form.Text className="text-gray">
        Dont Have a account  <Link to="/register">Register</Link>
        </Form.Text>
      <Form.Text className="text-success">
          
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;