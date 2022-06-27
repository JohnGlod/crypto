import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';

export const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useMoralis();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={'/'} state={{ from: location }} />;
  }

  return children;
};
