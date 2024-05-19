import { loginUser } from '../apiCalls'; // Import the loginUser function from apiCalls.js
import { SIGN_OUT } from '../authActionsTypes';


export const login = (email, password) => async (dispatch) => { // Ici, je crée une action asynchrone qui envoie une requête à l'API pour se connecter 
  try {
    const token = await loginUser(email, password); // Ici, j'appelle la fonction loginUser pour me connecter 
    dispatch(loginSuccess(token)); // Si tout se passe bien, j'envoie une action LOGIN_SUCCESS avec le token
  } catch (error) { // Si j'ai une erreur, j'envoie une action LOGIN_FAILURE avec le message d'erreur
    dispatch(loginFailure(error.message)); // Ici, j'envoie une action LOGIN_FAILURE avec le message d'erreur
  } 
};

export const loginSuccess = (token) => ({ // Ici, je crée une action LOGIN_SUCCESS qui prend le token en paramètre
  type: 'LOGIN_SUCCESS', // Je définis le type de l'action
  payload: token, // Je définis le payload de l'action 
});

export const loginFailure = (error) => ({ // Ici, je crée une action LOGIN_FAILURE qui prend le message d'erreur en paramètre
  type: 'LOGIN_FAILURE', // Je définis le type de l'action 
  payload: error,  // Je définis le payload de l'action
});

export const updateUsername = (username) => ({
  type: 'UPDATE_USERNAME',
  payload: username,
});


export const signOut = () => ({
  type: SIGN_OUT
});

