import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import styles from '../NavBar/NavBar.css'
import NavAccordion from "../navAccordion/navAccordion";
import Accor from '../Accor/Accor.jsx'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 70 }} >
            <Container>
                <Navbar.Brand href="#home">
                    Переводчик
                </Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;