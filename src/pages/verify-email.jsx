import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const handleSendVerificationEmail = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/auth/verify-email/${token}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          const errorResponse = await res.json();
          toast.error(errorResponse.message);
          return;
        }
        toast.success("Verification successful");
        navigate("/email-verified");
      } catch (error) {
        toast.error(error.message);
      }
    };

    handleSendVerificationEmail();
  }, [token, navigate]);

  return null;
};

export default VerifyEmail;
