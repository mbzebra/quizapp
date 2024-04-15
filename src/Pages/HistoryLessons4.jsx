import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson4/questions.json'; // Path to the JSON file


const HistoryLessons4 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons4;
