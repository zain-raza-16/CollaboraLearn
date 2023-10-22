import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Your existing components
import MainPage from '/Users/zainraza/Downloads/CollaboraLearn/frontend/src/components/mainpage/MainPage'; 
import Login from '/Users/zainraza/Downloads/CollaboraLearn/frontend/src/components/login/Login';
import Register from '/Users/zainraza/Downloads/CollaboraLearn/frontend/src/components/register/Register';
import CreateStudyGroup from '/Users/zainraza/Downloads/CollaboraLearn/frontend/src/components/studygroupformation/CreateStudyGroup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-study-group" element={<CreateStudyGroup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
