import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'; // Import your other components accordingly
import HistoryLesson from './Pages/HistoryLesson';
import BiologyLesson from './Pages/BiologyLesson';
import QuizDashboard from './Components/QuizDashboard';
import QuizDetails from './Components/QuizDetails';

import Physics from './Physics';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history-lesson/:lessonNumber" element={<HistoryLesson />} />
        <Route path="/biology-lesson/:lessonNumber" element={<BiologyLesson />} />
        <Route path="/dashboard" element={<QuizDashboard />} />
        <Route path="/quizdetails/:quizId" element={<QuizDetails />} />
        <Route path="/physics/lesson1" element={<Physics />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
