import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson8/questions.json'; // Path to the JSON file


const HistoryLessons8 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons8;
