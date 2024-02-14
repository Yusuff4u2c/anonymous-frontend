import { FaLongArrowAltLeft } from "react-icons/fa";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Disclaimer</h1>
        <div className="flex gap-4 flex-col justify-center items-start">
          <p>
            <span className="font-bold">HushHive</span> is an interactive Dare
            Game by <span className="font-bold">HushHive Web,</span> <br />{" "}
            where you can compliment and get complimented by <br />
            your friends, family and the closed ones keeping the <br /> privacy
            of the users safe.
          </p>
          <p>
            Here is everything that you need to know!{" "}
            <span className="font-bold">Tap</span> on one of <br /> the
            following to get started.
          </p>
          <a href="">More Information About Us</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms and Conditions</a>
          <p>
            If you have any questions regarding our Privacy Policy <br /> or
            Terms and Conditions, feel free to contact us using <br />
            the <span className="font-bold"> contact page</span>!
          </p>
        </div>

        <Link to="/settings">
          <Button className=" my-3">
            <div className="flex w-full justify-center gap-3 items-center">
              <FaLongArrowAltLeft /> Go Back
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Disclaimer;
