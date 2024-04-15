import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson7/questions.json'; // Path to the JSON file


const HistoryLessons7 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons7;
