import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const categories = ['Все', 'Категория 1', 'Категория 2', 'Категория 3', 'Категория 4'];

function Gallery() {
  return (
    <section className="gallery">
      <ListGroup horizontal>
        {categories.map((cat, index) => {
          return (
            <ListGroup.Item key={index} variant="primary">
              <Button variant="light">{cat}</Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </section>
  );
}

export default Gallery;
