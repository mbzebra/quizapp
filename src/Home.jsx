import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageQuizComponent from './Components/ImageQuizComponent';

const images = [
  { src: 'images/1.jpg', alt: 'First slide', label: 'First Slide', description: 'This is the first slide' },
  { src: 'images/2.jpg', alt: 'Second slide', label: 'Second Slide', description: 'This is the second slide' },
  { src: 'images/3.jpg', alt: 'third slide', label: 'third Slide', description: 'This is the third slide' },

  // Add more images as needed
];


const Home = () => {
  return (
  <header className="bg-primary">
      <div id="root"></div>
      <div className="container h-100">
          <div className="row h-100">
              <div className="col-12">
                  <div className="text-center m-0 vh-100 d-flex flex-column justify-content-center text-light">
                      <h1 className="display-4">Welcome Varsha!</h1>
                      <p className="lead">This is your fun place to learn! Practice and ENJOY!</p>
                  </div>
              </div>
          </div>
      </div>
  </header>
  );
};

export default Home;
