import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SubjectQuiz from '../Components/SubjectQuiz'; // Updated import, ensure this path is correct

const SubjectLesson = ()  => {
  const [showModal, setShowModal] = useState(false);
  const [questions, setQuestions] = useState(null);
  const { subject, lessonNumber } = useParams();

  useEffect(() => {

    if (subject && lessonNumber) {
    console.log('i am here');
      // Dynamic import based on the subject and lesson number
      import(`../${subject}/lesson${lessonNumber}/questions.json`)
        .then((data) => {
          setQuestions(data.default); // or just data if it's not a default export
        })
        .catch((error) => {
          console.error(`Failed to load questions for ${subject} lesson ${lessonNumber}`, error);
        });
    }
  }, [subject, lessonNumber]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="d-flex vh-100">
      <Row className="justify-content-center align-self-center w-100">
        <Col xs={12} className="text-center">
          <Button variant="primary" onClick={handleShow}>
            Start Quiz - Lesson {lessonNumber}
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{subject} Quiz {lessonNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {questions ? (
            <SubjectQuiz questions={questions} quizName={`${subject} Quiz ${lessonNumber}`} />
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

export default SubjectLesson;
