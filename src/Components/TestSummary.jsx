import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';

const TestSummary = ({ quizId }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://192.168.4.223:3001/api/retrieveResults/${quizId}`);
        if (response.data.results) {
          setResults(response.data.results);
        }
      } catch (error) {
        console.error("Error retrieving test results: ", error);
      }
    };

    if (quizId) {
      fetchResults();
    }
  }, [quizId]); // Include quizId in the dependency array to fetch results when quizId is available

  if (!results) {
    return <div>Loading results...</div>;
  }

  return (
    <div>
      <h2>Test Summary</h2>
      <Card>
        <Card.Body>
          <Card.Title>You scored {results.score} out of {results.details.length}</Card.Title>
          <Card.Text>
            Detailed Answers:
          </Card.Text>
          <ListGroup variant="flush">
            {results.details.map((detail, index) => (
              <ListGroup.Item key={index}>
                <div>{index + 1}. {detail.question}</div>
                <ListGroup variant="flush">
                  {detail.options.map((option, idx) => {
                    let color = 'black'; // Default text color
                    if (option === detail.selectedAnswer) {
                      color = 'blue'; // Highlight selected answer
                    }
                    if (option === detail.correctAnswer) {
                      color = 'green'; // Highlight correct answer
                    }
                    if (option === detail.selectedAnswer && option !== detail.correctAnswer) {
                      color = 'red'; // Highlight incorrect selected answer
                    }
                    return (
                      <ListGroup.Item key={idx} style={{ color }}>
                        {option} {option === detail.correctAnswer ? ' (Correct)' : ''}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestSummary;
