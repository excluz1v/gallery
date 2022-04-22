import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';
import { TPhoto } from '../../types';

function CustomCard(props: TPhoto) {
  const { title, url } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nostrum at excepturi
          dolorem in assumenda deserunt qui nobis nihil nemo, nisi, corporis expedita eligendi
          tempore vero repellendus iure sapiente iusto!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam perspiciatis atque{' '}
        </ListGroupItem>
        <ListGroupItem>Quisquam, odio ut saepe porro voluptate a atque! Sit,</ListGroupItem>
        <ListGroupItem>
          reprehenderit optio, quia nemo dolorem, ducimus cupiditate porro minus incidunt!
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link as={Link} to="">
          Подробнее
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
