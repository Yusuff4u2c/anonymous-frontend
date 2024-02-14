import { FaLongArrowAltLeft } from "react-icons/fa";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const newEmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "password must be at least 5 characters")
    .required("password is required"),
  newemail: Yup.string().email("Invalid email").required("Email is required"),
});

const UpdateEmail = () => {
  const { user, signUserOutOfApp } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email,
      password: "",
      newemail: "",
    },
    resolver: yupResolver(newEmailSchema),
  });
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      AuthenticationService.updateEmail(data);
      AuthenticationService.logout();
      signUserOutOfApp();

      toast.success("Email changed. You are required to login again");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Update Email</h1>
        <p className="text-sm ">You can update your email from here.</p>
        <form
          action=""
          className="border-b-2 border-[rgb(142,28,177)] pb-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="email">Current Email</label> <br />
            <Input
              type="email"
              id="current-email"
              placeholder="your current email"
              name="email"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>

          <div>
            <label htmlFor="email">Enter New Email</label> <br />
            <Input
              type="email"
              id="new-email"
              placeholder="your new email"
              name="newemail"
              {...register("newemail")}
              error={errors.newemail?.message}
            />
          </div>

          <div>
            <label htmlFor="email">Password</label> <br />
            <Input
              type="password"
              id="password"
              placeholder="password"
              name="password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <Button type="submit">Update Email</Button>
        </form>
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

export default UpdateEmail;
