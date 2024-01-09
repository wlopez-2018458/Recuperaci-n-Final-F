import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompTarea from './components/CompTarea'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompTarea />} />
      </Routes>
    </Router>
  );
}

export default App;
