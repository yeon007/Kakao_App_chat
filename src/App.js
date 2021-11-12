import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Chatting from './routes/Chatting';
import Profile from './routes/Profile';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Friends />} />
            <Route path="/Chats" element={<Chats />} />
            <Route path="/Find" element={<Find />} />
            <Route path="/More" element={<More />} />
            <Route path="/Chatting" element={<Chatting />} /> 
            <Route path="/Profile" element={<Profile />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
