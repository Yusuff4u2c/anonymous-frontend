import { useForm } from "react-hook-form";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../components/input";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const logInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "password must be at least 5 characters")
    .required("password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { signUserIntoApp } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(logInSchema),
  });

  async function onSubmit(data) {
    try {
      setLoading(true);
      const res = await fetch("https://hushhive-v2.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const responseData = await res.json();
      if (!res.ok) {
        toast.error(responseData.message);
        return;
      }
      signUserIntoApp(responseData.user);
      console.log(responseData);
      toast.success("Login Succesful");
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
        <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
          <div>
            <img src={logoIcon} alt="" />
          </div>
          <h1 className="text-4xl">Login</h1>
          <p className="text-sm">
            Recieve anonymous compliments from your friends <br /> and send
            anonymous messages to your friends for free.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)} // 2.
          >
            <div className="mb-5">
              <label htmlFor="user-name">Your Email</label> <br />
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
                {...register("email")}
                error={errors.email?.message}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="psw">Password</label> <br />
              <Input
                type="password"
                id="psw"
                suggested="password"
                placeholder="Enter your password"
                className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
                {...register("password")}
                error={errors.password?.message}
              />
            </div>
            <Button disabled={loading} type="submit">
              <div className="flex justify-center gap-3 items-center">
                Log in <FaLongArrowAltRight />
              </div>
            </Button>
          </form>
          <Link to="/forgotpassword" className="text-gray-500">
            Forgot Password
          </Link>
          <Link to="/register" className="text-gray-500 my-0">
            Don't Have an Account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
