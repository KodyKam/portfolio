//client/auth/PrivateRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './auth-helper'; // ✅ updated import

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  return isAuthenticated() ? (  // ✅ updated function call
    children
  ) : (
    <Navigate
      to="/signin"
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;