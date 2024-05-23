import { updateUsername } from '../Redux/actions/authActions'; // Import the action creator for updating the username


// ** LOGIN ** //
export const loginUser = async (email, password, dispatch) => { // Pass dispatch as an argument
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Invalid email or password');
      }
  
      const data = await response.json();
  
      if (data.body && data.body.token) {
        localStorage.setItem('token', data.body.token);
        
        // Dispatch action to update username
        dispatch(updateUsername(data.body.userName));
        
        return data.body.token;
      } else {
        throw new Error('Token is missing from response');
      }
    } catch (error) {
      throw new Error(error.message);
    } 
  };


  // ** FETCH USER PROFILE ** //
  export const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // The authorization header is set with the token
        },
        body: JSON.stringify({})
      });
  
      if (!response.ok) { // If the response is not ok, throw an error
        throw new Error('Failed to fetch user profile');
      }
  
      const data = await response.json(); // Parse the response body as JSON
      const { body } = data; // Extract the body from the response data 
      const username = body && body.userName; // Extract the username from the response body
      if (!username) { 
        throw new Error('Username not found in response');
      }
      return username; // Return the username 
    } catch (error) {
      throw new Error(error.message);
    }
  };
  

// ** CHANGE USERNAME ** //
  // Fonction pour mettre à jour le profil utilisateur avec le nouvel username
export const updateUserProfile = async (newUsername) => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT', // Utiliser la méthode PUT pour la mise à jour
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ userName: newUsername }) // Envoyer le nouvel username dans le corps de la requête
    });

    if (!response.ok) {
      throw new Error('Failed to update user profile');
    }

    // Mettre à jour l'username dans le store Redux
    updateUsername(newUsername);

    return 'Username updated successfully';
  } catch (error) {
    throw new Error(error.message);
  }
};