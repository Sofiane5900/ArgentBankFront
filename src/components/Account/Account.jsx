
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
    <>


    <main className="main bg-dark">
      <div className="header">
        {editMode ? (
          <input
            className="edit-input"
            type="text"
            value={newUsername}
            onChange={handleInputChange}
            autoFocus
          />):
          (
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
    </main>
    </>
  );
};

export default Account;
