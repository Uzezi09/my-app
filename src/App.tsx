import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { WaitList } from './pages/WaitList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<WaitList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
