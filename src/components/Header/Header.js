import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Link to='/home'><img className='w-75' src="https://i.ibb.co/VC2HChc/taskzo-logo.png" alt="logo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto menu" navbarScroll>
                            <Link to='/home'>Completed Tasks</Link>
                            <Link to='/toDo'>To-Do</Link>
                            <Link to='/calendar'>Calendar</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;