import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="1" className="justify-content-end">
      <Nav.Item>
        <Nav.Link as={Link} to="/" eventKey="1">
          Gallery
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about" eventKey="2">
          About
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
