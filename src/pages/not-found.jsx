import { FaLongArrowAltRight } from "react-icons/fa";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="logo" />
        </div>
        <p>Ooooops! Page not found </p>
        <Button type="button" onClick={handleButtonClick}>
          <div className="flex justify-center gap-3 items-center">
            Proceed To Login <FaLongArrowAltRight />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
