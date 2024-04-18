import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BiologyQuiz from '../Components/BiologyQuiz'; // Ensure this path is correct

const BiologyLesson = () => {
  const [showModal, setShowModal] = useState(false);
  const [questions, setQuestions] = useState(null);
  const { lessonNumber } = useParams();

  useEffect(() => {
    import(`../Biology/lesson${lessonNumber}/questions.json`)
      .then((data) => {
        // If your JSON is not using default export, adjust this line accordingly
        setQuestions(data.default);
      })
      .catch((error) => {
        console.error("Failed to load questions", error);
      });
  }, [lessonNumber]); // Dependency array ensures this effect only reruns if lessonNumber changes

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="d-flex vh-100">
      <Row className="justify-content-center align-self-center w-100">
        <Col xs={12} className="text-center">
          <Button variant="primary" onClick={handleShow}>
            Start Quiz - Lesson - { lessonNumber }
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Biology Quiz {lessonNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {questions ? (
            <BiologyQuiz questions={questions} />
          ) : (
            <div>Loading questions...</div>
          )}
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

export default BiologyLesson;
