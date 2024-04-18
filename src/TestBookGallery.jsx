import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookGallery from './BookGallery';

const images = [
  { src: 'images/1.jpg', alt: 'First slide', label: 'First Slide', description: 'This is the first slide' },
  { src: 'images/2.jpg', alt: 'Second slide', label: 'Second Slide', description: 'This is the second slide' },
  // Add more images as needed
];

ReactDOM.render(
  <BookGallery images={images} />,
  document.getElementById('root')
);
