import { FaFacebook } from "react-icons/fa";
const footer = () => {
  return (
    <div className="bg-gray-600 pb-20 pt-10 px-16 ">
      <div className="flex flex-col justify-center items-center">
        <p className="text-white">
          © 2023 - <span className="text-gray-300">HushHive</span>{" "}
        </p>
        <div className="text-gray-300 text-sm">
          <a href="#" className="px-1">
            Home
          </a>
          <a href="#" className="px-1 border-x-2">
            Disclaimer
          </a>
          <a href="#" className="px-1">
            Contact Us
          </a>
        </div>
      </div>{" "}
    </div>
  );
};

export default footer;
