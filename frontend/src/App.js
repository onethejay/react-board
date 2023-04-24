import { Route, Routes } from 'react-router-dom';
import BoardList from './routes/BoardList';
import Home from './routes/Home';
import React from 'react';
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<BoardList />} />
      <Route path="/board/:idx" element={<BoardDetail />} />
      <Route path="/write" element={<BoardWrite />} />
    </Routes>
  );
}

export default App;
