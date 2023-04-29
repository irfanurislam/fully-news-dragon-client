import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavigationBar = () => {
    const {user,logOut } = useContext(AuthContext);
    console.log(user)
    
    const handleLogOut = () =>{
      logOut()
      .then(()=>{
        console.log('logout succes')
      }).catch(error =>{
        console.log(error)
      })
    }



    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
             
                <Link style={{marginRight:'10px'}}  to="/">Home</Link>
                <Link style={{marginRight:'10px'}}  to="/about">ABout</Link>
                <Link style={{marginRight:'10px'}} to="/contact">Contact</Link>
              
            </Nav>
            <Nav>
              {user && (
                
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              )}
              
                {user ? (
                  <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                ) : (
                <Link to='/login'> <Button variant="primary">Login</Button></Link> 
                )}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;