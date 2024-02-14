import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const EmailVerificationProtection = () => {
  const { user } = useAuth();
  const location = useLocation(); // "/messages"

  if (!user.emailIsVerified) {
    return (
      <Navigate
        to="/verify-email-prompt"
        replace={true}
        state={{ referrer: location }}
      />
    );
  }

  return <Outlet />;
};

export default EmailVerificationProtection;
