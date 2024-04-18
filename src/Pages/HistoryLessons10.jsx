import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson10/questions.json'; // Path to the JSON file


const HistoryLessons10 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons10;
