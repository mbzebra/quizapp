import React from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Button, Card, ListGroup, Container } from 'react-bootstrap';

import { v4 as uuidv4 } from 'uuid';
// Generates a unique UUID for each quiz attempt

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizId:uuidv4(),
      currentQuestion: 0,
      details: [],
      showScore: false,
      score: 0
    };
  }

  handleAnswer = (answerId) => {
    const { details, currentQuestion, score, quizId } = this.state;
    const { questions } = this.props;
    const question = questions[currentQuestion];
    const isCorrect = answerId === question.correct;

    const updatedDetails = [
      ...details,
      {
        question: question.question,
        options: question.answers.map(a => a.text),
        selectedAnswer: question.answers.find(a => a.id === answerId).text,
        correctAnswer: question.answers.find(a => a.id === question.correct).text,
      }
    ];

    this.setState({
      details: updatedDetails,
      score: isCorrect ? score + 1 : score
    }, () => {
      // This callback ensures we are only moving to the next question or saving results
      // after the state has been fully updated.
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        this.setState({ currentQuestion: nextQuestion });
      } else {
        this.setState({ showScore: true }, this.saveResults); // Save results after state update
      }
    });
  };


  saveResults = () => {
    const { score, details, quizId  } = this.state;
    const { quizName } = this.props; // Ensure quizName is passed as a prop

    const data = {
      quizId: quizId,
      quizName: quizName,
      userId: 'user123', // This should be dynamically set based on the user context
      details: details,
      score: score
    };


    // Use the config file for the API URL
    const apiUrl = process.env.REACT_APP_API_BASE_URL
    console.log('apiUrl')

    // POST request to saveResults API
    axios.post(`${apiUrl}/storeResults`, data)
      .then(response => {
        console.log('Results saved successfully:', response.data);
        this.props.onQuizComplete(quizId); // Optionally pass the details if needed
      })
      .catch(error => {
        console.error('Failed to save results:', error);
      });
  };

  render() {
    const { currentQuestion, showScore } = this.state;
    const { questions } = this.props;

    return (
      <Container>
        {showScore ? (
          <Card>
            <Card.Body>
              <Card.Title>Quiz Complete</Card.Title>
              <Card.Text>Your score will be displayed on the next screen.</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <Card className="mb-3">
            <Card.Header>Question {currentQuestion + 1} of {questions.length}</Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>{questions[currentQuestion].question}</strong>
              </Card.Text>
              {questions[currentQuestion].answers.map((answer, index) => (
                <Button
                  key={index}
                  onClick={() => this.handleAnswer(answer.id)}
                  className="w-100 mb-2"
                  variant="outline-primary"
                >
                  {answer.text}
                </Button>
              ))}
            </Card.Body>
          </Card>
        )}
      </Container>
    );
  }
}

export default Quiz;
