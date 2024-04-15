import React from 'react';
import HistoryQuiz from '../Components/HistoryQuiz';
import questions from '../History/lesson3/questions.json'; // Path to the JSON file


const HistoryLessons3 = () => {
  return <HistoryQuiz questions={questions} />;
};

export default HistoryLessons3;
