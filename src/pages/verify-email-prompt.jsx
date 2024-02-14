import { FaLongArrowAltLeft } from "react-icons/fa";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { Link } from "react-router-dom";

const VerifyEmailPrompt = () => {
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl text-center">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Email Verification</h1>
        <p className="text-sm max-w-prose">
          You're almost there! We sent an email verification to your email
          address.
        </p>

        <p className="text-sm max-w-prose">
          Just click on the link in that email to get verified. If you don't see
          it, you may need to check your spam folder.
        </p>

        <p className="text-sm max-w-prose">Still can't find the email?</p>

        <Button>
          <div className="flex justify-center gap-3 items-center">
            Resend Email
          </div>
        </Button>

        <Link to="/">
          <Button>
            <div className="flex w-full justify-center gap-3 items-center">
              <FaLongArrowAltLeft /> Go Home
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmailPrompt;
