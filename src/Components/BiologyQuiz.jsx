import React, { useState } from 'react';
import { Button, Card, ListGroup, Container } from 'react-bootstrap';

const BiologyQuiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    // Record the user's answer and move to the next question
    const newUserAnswers = { ...userAnswers, [currentQuestion]: answer };
    setUserAnswers(newUserAnswers);

    // Check if the answer is correct
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    // Move to the next question or show the score if it was the last question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setShowScore(true);
    setSubmitted(true);
  };

  const isCorrect = (index) => {
    return questions[index].correct === userAnswers[index];
  };

  return (
    <Card>
      {showScore ? (
        <Card.Body>
          <Card.Title>You scored {score} out of {questions.length}</Card.Title>
          <Card.Text>
            Test Summary:
          </Card.Text>
          <ListGroup variant="flush">
            {questions.map((question, index) => (
              <ListGroup.Item key={index}>
                <div>{index + 1}. {question.question}</div>
                <ListGroup variant="flush">
                  {question.answers.map((answer) => (
                    <ListGroup.Item
                      key={answer.id}
                      style={{
                        color: userAnswers[index] === question.correct
                          ? (answer.id === userAnswers[index] ? 'green' : 'black')
                          : (answer.id === question.correct ? 'green' : (answer.id === userAnswers[index] ? 'red' : 'black'))
                      }}>
                      {answer.text}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      ) : (

        <Container>
        <Card className="mb-3"> {/* mb-3 adds margin at the bottom of each Card */}
          <Card.Header>Question {currentQuestion + 1}</Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>{questions[currentQuestion].question}</strong>
          </Card.Text>
          {questions[currentQuestion].answers.map((answer) => (
            <Button
              key={answer.id}
              onClick={() => handleAnswer(answer.id)}
              disabled={submitted}
              className="w-100 mb-2"
              variant="outline-primary"
            >
              {answer.text}
            </Button>
          ))}
        </Card.Body>
        </Card>
        </Container>
      )}
    </Card>
  );
};

export default BiologyQuiz;
