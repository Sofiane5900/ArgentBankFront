import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import loginData from './logindata.json'; // Import login data JSON file
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { email, password } = formData;

    // Find user in the login data JSON array
    const user = loginData.find(user => user.email === email && user.password === password);

    if (user) {
      // Redirect to /profile if credentials are correct
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <main className='main bg-dark'>
      <section className="sign-in-content bg-dark">
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon"/>
        <h1>Sign In</h1>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
