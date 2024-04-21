import React, { useState } from 'react';
import Quiz from './Quiz'; // Ensure the path is correct
import TestSummary from './TestSummary'; // Ensure the path is correct

const BiologyQuiz = ({ questions, quizName }) => {
  const [showSummary, setShowSummary] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizId, setQuizId] = useState(''); // State to store quizId

  // Updated to handle final score, user answers, and quizId
  const handleQuizComplete = (finalQuizId) => {
    // Store the final score, user answers, and quizId then show the summary
    setQuizId(finalQuizId); // Update state with the quizId
    setShowSummary(true);
    // Additional backend calls or cleanup can be handled here if needed
  };

  return (
    <div>
      {showSummary ? (
        <TestSummary quizId={quizId} />
      ) : (
        <Quiz questions={questions} quizName={quizName} onQuizComplete={(finalQuizId) => handleQuizComplete(finalQuizId)} />
      )}
    </div>
  );
};

export default BiologyQuiz;
