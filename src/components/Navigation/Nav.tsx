import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="primary" variant="dark" expand={false} collapseOnSelect={true} className="mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Закрыть</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/" eventKey="1">
                Галерея
              </Nav.Link>
              <Nav.Link as={Link} to="/about" eventKey="2">
                Обо мне
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" eventKey="1">
            Добро пожаловать на сайт-галерею
          </Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
