import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import BiologyQuiz from '../Components/BiologyQuiz';
import questions from '../Biology/lesson2/questions.json'; // Path to the JSON file

const BiologyLessons2 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="d-flex vh-100">
      <Row className="justify-content-center align-self-center w-100">
        <Col xs={12} className="text-center">
          <Button variant="primary" onClick={handleShow}>
            Start Quiz
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Biology Quiz - Lesson 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BiologyQuiz questions={questions} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BiologyLessons2;
