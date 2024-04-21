import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link component

const QuizDashboard = () => {
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/quizResults')
      .then(response => {
        setQuizResults(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching quiz results: ", error);
      });
  }, []);

  return (
    <Container>
      <h1>Quiz Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Quiz Name</th>
            <th>User ID</th>
            <th>Score</th>
            <th>Date Taken</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {quizResults.map((result, index) => (
            <tr key={result.quizId}>
              <td>{index + 1}</td>
              <td>{result.quizName}</td>
              <td>{result.userId}</td>
              <td>{result.score}</td>
              <td>{new Date(result.dateTaken).toLocaleString()}</td>
              <td>
                {/* Use Link component to navigate to QuizDetails page */}
                <Link to={`/quizdetails/${result.quizId}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default QuizDashboard;
