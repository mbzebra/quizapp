import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson2/questions.json'; // Path to the JSON file


const HistoryLessons2 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons2;
