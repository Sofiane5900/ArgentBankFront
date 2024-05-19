import React from 'react';
import './Navbar.css';
import Logo from '../../designs/img/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { useNavigate } from 'react-router-dom'; // Import useHistory hook for navigation
import { signOut } from '../Redux/actions/authActions'; // Import signOut action

const NavbarSignOut = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize history for navigation

  const handleSignOut = () => {
    // Dispatch the signOut action when the sign-out button is clicked
    dispatch(signOut());
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the sign-in page
    navigate('/sign-in');
  };

  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <button className="main-nav-item" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSignOut;
