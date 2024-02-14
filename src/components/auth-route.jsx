import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRoute = ({ children }) => {
  const { user } = useAuth();
  const { state } = useLocation();
  const referrer = state?.referrer;

  if (user) {
    return <Navigate to={referrer || "/home"} replace={true} />;
  }

  return children;
};

export default AuthRoute;
