import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson6/questions.json'; // Path to the JSON file


const HistoryLessons6 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons6;
