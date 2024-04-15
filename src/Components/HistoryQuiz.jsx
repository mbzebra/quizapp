import React, { useState } from 'react';

const HistoryQuiz = ({ questions }) => {
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
  <div>
    {showScore ? (
      <div className="summary">
        <h2>You scored {score} out of {questions.length}</h2>
        <h3>Test Summary:</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <div>{index + 1}. {question.question}</div>
              <ul className="option-list">
                {question.answers.map((answer) => (
                  <li key={answer.id} style={{
                    color: userAnswers[index] === question.correct
                      ? (answer.id === userAnswers[index] ? 'green' : 'black')
                      : (answer.id === question.correct ? 'green' : (answer.id === userAnswers[index] ? 'red' : 'black'))
                  }}>
                    {answer.text}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    ) : (
          <div>
            <h2>Question {currentQuestion + 1}</h2>
            <div>{questions[currentQuestion].question}</div>
            {questions[currentQuestion].answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(answer.id)}
                disabled={submitted}
                className="answer-button"
              >
                {answer.text}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  export default HistoryQuiz;

