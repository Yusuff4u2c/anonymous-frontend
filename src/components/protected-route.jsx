import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { user } = useAuth();
  const location = useLocation(); // "/messages"

  // if its still loading

  if (!user) {
    return (
      <Navigate to="/login" replace={true} state={{ referrer: location }} />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
