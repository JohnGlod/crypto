import { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';

interface AuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: AuthProps): ReactNode => {
  const { isAuthenticated } = useMoralis();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={'/'} state={{ from: location }} />;
  }

  return children;
};
