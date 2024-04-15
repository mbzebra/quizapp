import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson5/questions.json'; // Path to the JSON file


const HistoryLessons5 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons5;
