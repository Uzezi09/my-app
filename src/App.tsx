import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { WaitList } from './pages/WaitList';
import { WaitListSuccess } from './components/WaitListSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<WaitList />} />
          <Route path="/waitlist/success" element={<WaitListSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
