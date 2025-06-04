import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RouteGuard = ({ children, isPrivate = false }) => {
  const { isAuthenticated } = useAuth();

  if (isPrivate && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!isPrivate && isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

