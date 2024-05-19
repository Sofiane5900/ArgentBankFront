
import React, { useEffect, useState } from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../Redux/apiCalls';
import { updateUsername } from '../Redux/actions/authActions';
import { updateUserProfile } from '../Redux/apiCalls'; // Importer la fonction pour mettre à jour le profil utilisateur

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const username = await fetchUserProfile();
        dispatch(updateUsername(username));
      } catch (error) {
        console.error('Failed to fetch username:', error);
      }
    };

    if (!localStorage.getItem('token')) {
      navigate('/sign-in');
    } else {
      fetchUsername();
    }
  }, [dispatch, navigate]);

  const handleEditButtonClick = () => {
    setEditMode(true);
    setNewUsername(user.userName);
  };

  const handleSaveButtonClick = async () => {
    try {
      await updateUserProfile(newUsername); // Appeler la fonction pour mettre à jour le profil utilisateur
      localStorage.setItem('username', newUsername);
      window.location.reload();
      setEditMode(false);
    } catch (error) {
      console.error('Failed to update username:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };


  return (
    <main className="main bg-dark">
      <div className="header">
        {editMode ? (
          <input
            className="edit-input"
            type="text"
            value={newUsername}
            onChange={handleInputChange}
            autoFocus
          />
        ) : (
          <h1>Welcome back<br /> {user.userName} !</h1>
        )}
        {!editMode && (
          <button className="edit-button" onClick={handleEditButtonClick}>
            Edit Name
          </button>
        )}
        {editMode && (
          <button className="save-button" onClick={handleSaveButtonClick}>
            Save
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default Account;
