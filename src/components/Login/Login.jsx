import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/actions/authActions'; 

const Login = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); // J'importe la fonction useDispatch pour envoyer une action au store
  const error = useSelector((state) => state.auth.error); // J'importe le state error pour afficher un message d'erreur si la connexion échoue

  const [formData, setFormData] = useState({ email: '', password: '' }); // Je crée un state pour stocker les données du formulaire
  const [loginError, setLoginError] = useState(null); // Je crée un state pour stocker les erreurs de connexion

  const handleInputChange = (e) => { 
    const { name, value } = e.target; // Je récupère le nom et la valeur de l'input
    setFormData({ ...formData, [name]: value }); // Je mets à jour le state avec les nouvelles valeurs
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { email, password } = formData;
  
    try {
      await dispatch(login(email, password));
      navigate('/profile');
    } catch (error) {
      console.error('Login failed:', error);
      
      if (error) { // 
        setLoginError('Invalid email or password.');
        navigate('/sign-in');
      } else {
        setLoginError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <main className='main bg-dark'>
      <section className="sign-in-content bg-dark">
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon"/>
        <h1>Sign In</h1>
        {loginError && <div className="error">{loginError}</div>}
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}> {/* J'envoie le formulaire à la fonction handleSubmit */}
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
