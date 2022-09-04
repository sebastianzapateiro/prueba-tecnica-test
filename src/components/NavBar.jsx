import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/pikachu.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { actionLogoutAsyn } from '../redux/actions/actionLogin';
import { useDispatch } from 'react-redux';

function NavBar() {
  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">


    <Container className=''>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          <Link to={'/home'} className='text-white nav-link' >Home</Link>
          <Link to={'/add-pokemon'} className='text-white nav-link'>Create pokemon</Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>

        <NavDropdown className='text-white' title="" id="collasible-nav-dropdown">
          <NavDropdown.Item className='link-api' href="https://github.com/sebastianzapateiro/prueba-tecnica" target="_blank">
            App Repository
          </NavDropdown.Item>
          <NavDropdown.Item className='link-api' onClick={() => dispatch(actionLogoutAsyn())} href="#action/3.4">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
        <img
          alt=""
          src={icon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Nav>


    </Container>
  </Navbar>
  )
}

export default NavBar