import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'; // Import your other components accordingly
import HistoryLessons1 from './Pages/HistoryLessons1';
import HistoryLessons2 from './Pages/HistoryLessons2';
import HistoryLessons3 from './Pages/HistoryLessons3';
import HistoryLessons4 from './Pages/HistoryLessons4';
import HistoryLessons5 from './Pages/HistoryLessons5';
import HistoryLessons6 from './Pages/HistoryLessons6';
import HistoryLessons7 from './Pages/HistoryLessons7';
import HistoryLessons8 from './Pages/HistoryLessons8';
import HistoryLessons9 from './Pages/HistoryLessons9';
import Biology from './Biology';
import Physics from './Physics';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history/lesson1" element={<HistoryLessons1 />} />
        <Route path="/history/lesson2" element={<HistoryLessons2 />} />
        <Route path="/history/lesson3" element={<HistoryLessons3 />} />
        <Route path="/history/lesson4" element={<HistoryLessons4 />} />
        <Route path="/history/lesson5" element={<HistoryLessons5 />} />
        <Route path="/history/lesson6" element={<HistoryLessons6 />} />
        <Route path="/history/lesson7" element={<HistoryLessons7 />} />
        <Route path="/history/lesson8" element={<HistoryLessons8 />} />
        <Route path="/history/lesson9" element={<HistoryLessons9 />} />
        <Route path="/biology/lesson1" element={<Biology />} />
        <Route path="/physics/lesson1" element={<Physics />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
