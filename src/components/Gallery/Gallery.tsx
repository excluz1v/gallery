import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Gallery() {
  return (
    <section className="gallery">
      <ListGroup horizontal>
        <ListGroup.Item>This</ListGroup.Item>
        <ListGroup.Item>ListGroup</ListGroup.Item>
        <ListGroup.Item>renders</ListGroup.Item>
        <ListGroup.Item>horizontally!</ListGroup.Item>
      </ListGroup>
    </section>
  );
}

export default Gallery;
