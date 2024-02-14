import logoIcon from "../assets/image/logo-icon.png";

const AwaitVerification = () => {
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <p>
          Verification link sent to your email address. Kindly open to complete
          your registration
        </p>
      </div>
    </div>
  );
};

export default AwaitVerification;
