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
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8} className="text-center">
             <ImageQuizComponent images={images} lessonName="History Lesson"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
