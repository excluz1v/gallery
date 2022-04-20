import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Navigation from './components/Navigation/Nav';

function App() {
  return (
    <Container className="App" fluid>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
