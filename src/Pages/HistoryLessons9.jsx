import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson9/questions.json'; // Path to the JSON file


const HistoryLessons9 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons9;
