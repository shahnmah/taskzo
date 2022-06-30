import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="transparent" variant="light">
                <Container className='menubar'>
                    <Navbar.Brand href="#home">
                        <Link to='/home'><img className='w-75' src="https://i.ibb.co/VC2HChc/taskzo-logo.png" alt="logo" /></Link>
                    </Navbar.Brand>
                    <Nav className=" menu">
                        <Link to='/home'>Completed Tasks</Link>
                        <Link to='/home'>To-Do</Link>
                        <Link to='/home'>Calendar</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;