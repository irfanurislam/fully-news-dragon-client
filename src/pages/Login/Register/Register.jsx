import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false)

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result?.user;
        console.log(createdUser);
        updateUser(result?.user, name, photo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateUser = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccepted = (event) =>{
    setAccepted(event.target.checked)
   
  }

  return (
    <Container>
      <Form onSubmit={handleRegister} className="w-25 mx-auto">
        <h3>Please login </h3>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicphoto">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            placeholder="Enter photo url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to='/terms'>terms condition</Link></>}
          />
        </Form.Group>
        <Button variant="primary" disabled ={!accepted} type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-gray">
          already Have a account <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
