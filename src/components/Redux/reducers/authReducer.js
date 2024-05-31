import { SIGN_OUT } from '../authActionsTypes';

// reducers/authReducer.js
const initialState = {
  token: localStorage.getItem('token') || null,
  error: null,
  user: {
    userName: '',
  },
};


const authReducer = (state = initialState, action) => { // Ici, je crée un reducer authReducer qui prend en paramètre l'état initial et une action
  switch (action.type) { // Je crée un switch pour gérer les différentes actions
    case 'LOGIN_SUCCESS': // Si l'action est LOGIN_SUCCESS 
      return { ...state, token: action.payload, error: null }; // Je retourne une state avec le token et l'erreur à null 
    case 'LOGIN_FAILURE': // Si l'action est LOGIN_FAILURE
      return { ...state, token: null, error: action.payload }; // Je retourne une state t avec le token à null et l'erreur à action.payload
    case 'UPDATE_USERNAME': // Si l'action est UPDATE_USERNAME
      console.log("New username:", action.payload); // Je console.log le nouveau nom d'utilisateur
      return { ...state, user: { ...state.user, userName: action.payload } }; // Je retourne une state avec le nouveau nom d'utilisateur
    case SIGN_OUT: // Si l'action est SIGN_OUT
      return { 
        ...state,
        token: null,
        error: null
      };
    default:
      return state;
  }
};


export default authReducer;
