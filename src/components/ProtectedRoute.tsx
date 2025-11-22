import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../lib/mockAuth';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Protected route wrapper that redirects to login if not authenticated
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = auth.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
