import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Pagination } from 'react-bootstrap';

const ImageQuizComponent = ({ images, lessonName }) => {
  const [index, setIndex] = useState(0);
  const totalPages = images.length;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === index + 1} onClick={() => setIndex(number - 1)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Container fluid>
      <Row className="mt-3">
        <Col md={3} className="d-flex align-items-center">
          <Button variant="primary" disabled size="sm">{lessonName}</Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Pagination size="sm">{items}</Pagination>
        </Col>
        <Col md={3} className="d-flex justify-content-end align-items-center">
          <Button variant="primary" size="sm">Start Quiz</Button>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mb-3">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={`Slide ${idx + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageQuizComponent;
