import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add routes for About, Businesses, and Login here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
