import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import User from './Pages/User';
import { Provider } from 'react-redux';
import store from './components/Redux/store.js';


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<div>Error 404</div>} />
      </Routes>
      </Router>
    </Provider>

    </div>
  );
}

export default App;
 