import banner from "../assets/image/right-mobile.png";
import wandIcon from "../assets/image/f-icon-1.png";
import { FaFacebookSquare } from "react-icons/fa";
import Navigation from "../components/navigation";

const Landing = () => {
  const reasonsToUse = [
    {
      icon: wandIcon,
      title: "Anonymity",
      para: "Our Platform ensures your privacy so that you stay anonymous everytime you send someone a secret message. You are anonymous until you ever choose to reveal your identity.",
    },
    {
      icon: wandIcon,
      title: "Safe & Secure",
      para: "Safety of our users using this anonymous messaging platform is very important for us. We have got reporting systems so that you can report anything that you do not like to see.",
    },
    {
      icon: wandIcon,
      title: "24/7 Support",
      para: "If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you. 24 hours a day and 7 days a week.",
    },
    {
      icon: wandIcon,
      title: "Easy 2 Use",
      para: "We are constantly working on HushHive as a platform to make it as user friendly as possible. As of now you can just download our app, fill in your username & pass to get started.",
    },
  ];
  return (
    <div className="">
      <Navigation />
      <div className="bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4] flex justify-center">
        <div className="text-white w-full max-w-7xl py-16 px-8 md:px-16 flex items-center">
          <div className="w-full">
            <h1 className="text-2xl md:text-5xl xl:text-6xl font-bold leading-normal">
              Send Secret <br /> Anonymous Messages <br /> Online
            </h1>
            <p className="leading-relaxed md:text-lg text-sm mt-3">
              HushHive is an interactive anonymous messaging app with a dare
              game. <br />
              Create your Profile Link and Send it to all your contacts to check
              what do <br /> your friends think about you. With the help of
              HushHive, you can send <br /> and recieve anonymous compliments
              easily for free!
            </p>
            <button className="mt-6 px-10 py-4 text-sm md:text-lg rounded-md bg-white text-black">
              Download Now
            </button>
          </div>

          <div className="hidden md:block">
            <img className="w-[295px]" src={banner} alt="" />
          </div>
        </div>
      </div>

      <div className="px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center my-16">
          <h1 className="text-4xl my-4">Why use HushHive?</h1>
          <p>
            Our Anonymous Messaging App comes along with many great features.
            Here we are going <br /> to list some of them. Have a look below.
          </p>
        </div>
        <div className="mt-5 mb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasonsToUse.map((reason) => (
            <div
              key={reason.title}
              className="p-5 shadow-lg flex flex-col rounded-lg justify-between items-start gap-4"
            >
              <img src={reason.icon} alt={reason.title} />
              <h1>{reason.title}</h1>
              <p>{reason.para}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 py-20 ">
        <div className="px-8 md:px-16 flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <p className="text-white">
              Copyright © 2023 - HushHive
              <span className="text-yellow-500 inline">|</span>
              <span>
                <a href="#" className="text-[#6247EA]">
                  Privacy Policy
                </a>
              </span>
            </p>
            <p className="text-white">
              Shoutout to
              <span className="pl-2">
                <a
                  href="mailto:josephajibodu@gmail.com"
                  className="text-[#6247EA]"
                >
                  Yemi
                </a>
              </span>
            </p>
          </div>
          <i>
            <FaFacebookSquare className="text-3xl text-white fa w-8 h-8 hover:bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Landing;
