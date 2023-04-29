import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    // const [disable, setDisable] = useState(false)
    return (
        <div>
            <Container>
            <h2>this is terms page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quis? Omnis nam sit ducimus ut tempora officiis laboriosam. Veniam corrupti, nisi necessitatibus aliquam obcaecati provident! Consequatur doloremque aperiam quasi nesciunt?</p>
            <p>go back <Link to="/register">Register</Link></p>
            {/* <button className={`btn ${disable ? 'btn-danger' : 'btn-primary'}`}>Login</button> */}

            </Container>
        </div>
    );
};

export default Terms;