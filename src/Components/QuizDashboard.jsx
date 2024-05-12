import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuizDashboard = () => {
  const [quizResults, setQuizResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10); // Adjust the number of results per page as needed

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/quizResults`)
      .then(response => {
        // Ensure the response contains results and it's an array
        if (response.data && Array.isArray(response.data.results)) {
          setQuizResults(response.data.results);
        } else {
          // Handle the case where results are not in expected format
          console.error("Unexpected data format:", response.data);
          setQuizResults([]); // Set to an empty array to avoid type errors later
        }
      })
      .catch(error => {
        console.error("Error fetching quiz results: ", error);
        setQuizResults([]); // Ensure it's still an array
      });
  }, []);

  // Get current results
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = quizResults.length > 0 ? quizResults.slice(indexOfFirstResult, indexOfLastResult) : [];

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Calculate total pages for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(quizResults.length / resultsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
        {i}
      </Pagination.Item>
    );
  }

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
          {currentResults.map((result, index) => (
            <tr key={result.quizId}>
              <td>{indexOfFirstResult + index + 1}</td>
              <td>{result.quizName}</td>
              <td>{result.userId}</td>
              <td>{result.score}</td>
              <td>{new Date(result.dateTaken).toLocaleString()}</td>
              <td>
                <Link to={`/quizdetails/${result.quizId}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {pageNumbers.length > 1 && <Pagination>{pageNumbers}</Pagination>}
    </Container>
  );
};

export default QuizDashboard;
