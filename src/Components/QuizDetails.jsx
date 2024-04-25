import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, Container } from 'react-bootstrap';

const QuizDetails = () => {
  const [quizDetails, setQuizDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { quizId } = useParams(); // Get quizId from the URL parameters

  const apiUrl = process.env.REACT_APP_API_BASE_URL;


  useEffect(() => {
    const fetchQuizDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/retrieveResults/${quizId}`);
        setQuizDetails(response.data.results);
      } catch (err) {
        setError('Failed to fetch quiz details');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizDetails();
  }, [quizId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <h1>Quiz Details</h1>
      {quizDetails && (
        <Card>
          <Card.Header>Quiz Name: {quizDetails.quizName}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>User ID: {quizDetails.userId}</ListGroup.Item>
            <ListGroup.Item>Score: {quizDetails.score}</ListGroup.Item>
            <ListGroup.Item>Date Taken: {new Date(quizDetails.dateTaken).toLocaleString()}</ListGroup.Item>
            {quizDetails.details.map((detail, index) => (
              <ListGroup.Item key={index}>
                <h4>Question {index + 1}:</h4>
                <p>{detail.question}</p>
                <ListGroup variant="flush">
                  {detail.options.map((option, optionIndex) => (
                    <ListGroup.Item
                      key={optionIndex}
                      style={{
                        color: option === detail.correctAnswer ? 'green' : 'black',
                        backgroundColor: option === detail.selectedAnswer ? '#d3d3d3' : 'transparent'
                      }}
                    >
                      {option}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <p>
                  <b>Your Answer:</b> {detail.selectedAnswer}
                  {detail.selectedAnswer !== detail.correctAnswer && (
                    <span style={{ color: 'red' }}> (Incorrect)</span>
                  )}
                </p>
                <p><b>Correct Answer:</b> {detail.correctAnswer}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      )}
    </Container>
  );
};

export default QuizDetails;
