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

    // Update the details with user answer and question info
    const updatedDetails = [
      ...details,
      {
        question: question.question,
        options: question.answers.map(a => a.text), // Collect all answer texts
        selectedAnswer: question.answers.find(a => a.id === answerId).text,
        correctAnswer: question.answers.find(a => a.id === question.correct).text,
      }
    ];

    this.setState({
      details: updatedDetails,
      score: isCorrect ? score + 1 : score
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      this.setState({ currentQuestion: nextQuestion });
    } else {
      this.setState({ showScore: true });
      this.saveResults(); // Save results when quiz is complete
    }
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

    // POST request to saveResults API
    axios.post('http://192.168.4.223:3001/api/storeResults', data)
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
