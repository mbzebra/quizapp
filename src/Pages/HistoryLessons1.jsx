import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson1/questions.json'; // Path to the JSON file


const HistoryLessons = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons;
