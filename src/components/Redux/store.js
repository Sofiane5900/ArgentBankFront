import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'; // Import your auth reducer

// Create the Redux store with reducers
const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if needed
  },
});

export default store;
