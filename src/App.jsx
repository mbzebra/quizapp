import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SubjectLesson from './Pages/SubjectLesson'; // Import the generic lesson component
import QuizDashboard from './Components/QuizDashboard';
import QuizDetails from './Components/QuizDetails';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:subject/:lessonNumber" element={<SubjectLesson />} />
        <Route path="/dashboard" element={<QuizDashboard />} />
        <Route path="/quizdetails/:quizId" element={<QuizDetails />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
