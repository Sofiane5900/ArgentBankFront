import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import User from './Pages/User';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<div>Error 404</div>} />

      </Routes>
      </Router>

    </div>
  );
}

export default App;
