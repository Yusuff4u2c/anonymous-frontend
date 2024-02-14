import { Link } from "react-router-dom";
import Button from "../components/button";

import {
  FaLongArrowAltRight,
  FaShareAlt,
  FaFacebookSquare,
  FaWhatsapp,
  FaCogs,
  FaClipboard,
  FaTwitter,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import toast from "react-hot-toast";

const Home = () => {
  const { user } = useAuth();
  const appUrl = import.meta.env.VITE_APP_URL;
  const [, copy] = useCopyToClipboard();
  const userUrl = `${appUrl}/${user?.username}`;

  const handleClick = (platform) => {
    const defaultMessage =
      "Write a *secret anonymous message* for me. I *won't know* who wrote it...";
    switch (platform) {
      case "whatsapp":
        const whatsappLink = `https://api.whatsapp.com/send?text=${defaultMessage}%0A${userUrl}`;
        window.open(whatsappLink);
        break;
      case "twitter":
        const twitterLink = `https://twitter.com/intent/tweet?url=${userUrl}&text=${defaultMessage}`;
        window.open(twitterLink);
        break;
      case "facebook":
        const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${userUrl}`;
        window.open(facebookLink);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
        <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-4 sm:p-10 my-4 rounded-2xl w-[90%] sm:w-auto sm:max-w-2xl">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl sm:text-4xl text-center capitalize">
              {user?.username ?? "Nil"}'s <br />
              Profile
            </h1>
            <span className="flex items-center gap-1 text-[12px]">
              <a
                href={`/${user?.displayName}`}
                rel="noreferrer"
                target="_blank"
              >
                {appUrl}/{user?.username}
              </a>
              <FaClipboard
                onClick={() => {
                  if (copy(`${appUrl}/${user?.displayName}`)) {
                    toast("URL copied to clipboard");
                  }
                }}
                className="cursor-pointer"
              />
            </span>
            <p className="text-[14px]">
              <span className="font-bold">Share your profile link</span> ❤️ to
              get responses from your <br /> friend. Go to
              <span className="font-bold">"View Messages"</span> to check out
              the <br />
              responses.
            </p>
          </div>
          <div className="border-b-2 w-full flex flex-col pb-6 text-center">
            <Link to="/messages">
              <Button className={"w-full"}>
                <div className="flex justify-center gap-3 items-center">
                  View Messages <FaLongArrowAltRight />
                </div>
              </Button>
            </Link>
            <Link>
              <a className="bg-[rgb(218,48,90)] flex justify-center items-center gap-4 my-3 p-3 rounded-lg hover:bg-gradient-to-r from-[rgb(212,39,160)] from-10% to-[#7a4cc4]">
                <FaShareAlt className="hover:-translate-x-3" /> Share My Profile
              </a>
            </Link>
            <Link onClick={() => handleClick("whatsapp")}>
              <a
                href="#"
                className="bg-[#25d366] flex justify-center items-center gap-4 my-3 p-3 rounded-lg hover:bg-gradient-to-r from-[rgb(212,39,160)] from-10% to-[#7a4cc4]"
              >
                <FaWhatsapp className="hover:-translate-x-3" /> Share on
                Whatsapp
              </a>
            </Link>
            <Link onClick={() => handleClick("facebook")}>
              <a
                href="#"
                className=" bg-[#3b5998] flex justify-center items-center gap-4 my-3 p-3 rounded-lg hover:bg-gradient-to-r from-[rgb(212,39,160)] from-10% to-[#7a4cc4]"
              >
                <FaFacebookSquare className="hover:-translate-x-3" /> Share on
                Facebook
              </a>
            </Link>
            <Link onClick={() => handleClick("twitter")}>
              <a
                href="#"
                className=" bg-[#e4405f] flex justify-center items-center gap-4 my-3 p-3 rounded-lg hover:bg-gradient-to-r from-[rgb(212,39,160)] from-10% to-[#7a4cc4]"
              >
                <FaTwitter className="hover:-translate-x-3" /> Share on Twitter
              </a>
            </Link>
          </div>
          <Link to="/settings" className="w-full">
            <Button className={"w-full"}>
              <div className="flex justify-center gap-3 items-center">
                Settings <FaCogs />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
