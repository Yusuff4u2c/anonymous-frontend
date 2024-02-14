import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Forgot Password</h1>
        <p className="text-sm ">
          Forgot your password? Don't worry! Reset it here.
        </p>
        <form action="" className="border-b-2 border-[rgb(142,28,177)] pb-6">
          <div>
            <label htmlFor="psw">Your Username</label> <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username "
              className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
            />{" "}
          </div>

          <Button>
            <div className="flex  justify-center gap-3 items-center">
              Reset Password <FaLongArrowAltRight />
            </div>
          </Button>
        </form>
        <Link to="/login">
          <Button>
            <div className="flex w-full justify-center gap-3 items-center">
              <FaLongArrowAltLeft /> Go Back
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
