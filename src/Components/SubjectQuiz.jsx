import React, { useState } from 'react';
import Quiz from './Quiz'; // Import Quiz component, ensure path correctness
import TestSummary from './TestSummary'; // Import TestSummary component, ensure path correctness

const SubjectQuiz = ({ questions, quizName }) => {
  // State to control the display of the quiz summary
  const [showSummary, setShowSummary] = useState(false);
  // State to store the quizId from the quiz completion
  const [quizId, setQuizId] = useState('');

  // Handles the completion of the quiz, setting necessary states
  const handleQuizComplete = (finalQuizId) => {
    setQuizId(finalQuizId);
    setShowSummary(true);
  };

  return (
    <div>
      {showSummary ? (
        <TestSummary quizId={quizId} />
      ) : (
        <Quiz
          questions={questions}
          quizName={quizName}
          onQuizComplete={handleQuizComplete}
        />
      )}
    </div>
  );
};

export default SubjectQuiz;
