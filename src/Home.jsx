import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookGallery from './Components/BookGallery';

const images = [
  { src: 'images/1.jpg', alt: 'First slide', label: 'First Slide', description: 'This is the first slide' },
  { src: 'images/2.jpg', alt: 'Second slide', label: 'Second Slide', description: 'This is the second slide' },
  // Add more images as needed
];


const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8} className="text-center">
          <h1>Welcome to the Learning Portal</h1>
          <p>
            Explore various subjects and improve your knowledge. Choose from the topics above to get started!
             <BookGallery images={images} />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
