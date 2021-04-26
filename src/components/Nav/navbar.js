import React from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';



const navbar = () => {
    return (
        <React.Fragment>

            
            <header className="header">
                <Navbar  expand="lg" >
                    <Navbar.Brand href="/">
                        Xperians
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto m-auto nav-bar">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/myaccount">My ACCOUNT</Nav.Link>
                        <Nav.Link href="/posts">All Posts</Nav.Link>
                        <Nav.Link href="/register">SignUp</Nav.Link>
                        <Nav.Link href="/account/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>   
              
            </header>
        </React.Fragment>
    );
}

export default navbar;
