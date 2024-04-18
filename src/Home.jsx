import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8} className="text-center">
          <h1>Welcome to the Learning Portal</h1>
          <p>
            Explore various subjects and improve your knowledge. Choose from the topics above to get started!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
