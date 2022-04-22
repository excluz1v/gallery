import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { photosSlice } from '../../redux/slices/photoSlice';
import CustomCard from '../Card/CustomCard';

const categories = ['Все', 'Категория 1', 'Категория 2', 'Категория 3', 'Категория 4'];

function Gallery() {
  const { photos } = useAppSelector((state) => state.photos);
  const dispatch = useAppDispatch();
  const { fetchAllPhotos } = photosSlice.actions;
  console.log('first');
  useEffect(() => {
    dispatch(fetchAllPhotos());
  }, []);

  return (
    <section className="gallery">
      <ListGroup horizontal className="mb-3">
        {categories.map((cat, index) => {
          return (
            <ListGroup.Item key={index} variant="primary">
              <Button variant="light">{cat}</Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {photos.map((p) => {
        return <CustomCard {...p} key={p.id} />;
      })}
    </section>
  );
}

export default Gallery;
