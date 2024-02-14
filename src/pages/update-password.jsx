import { FaLongArrowAltLeft } from "react-icons/fa";
import logoIcon from "../assets/image/logo-icon.png";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../components/input";

const passwordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(5, "password must be at least 5 characters")
    .required("current password is required"),
  newPassword: Yup.string()
    .min(5, "password must be at least 5 characters")
    .required("new password is required"),
  confirmNewPassword: Yup.string()
    .min(5, "password must be at least 5 characters")
    .required("new password confirmation is required"),
});

const UpdatePassword = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = async (data) => {
    try {
      if (data.newPassword !== data.confirmNewPassword) {
        toast.error("password is not a match");
        return;
      }

      const res = await fetch("http://localhost:8000/auth/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        }),
      });
      const responseData = await res.json();
      if (!res.ok) {
        toast.error(responseData.message);
        return;
      }
      toast.success("Password updated succefully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center text-white bg-gradient-to-r from-[rgb(167,49,167)] from-25% to-[#7a4cc4]">
      <div className="bg-[#250933] flex flex-col justify-center items-center gap-8 p-10 my-4 rounded-2xl w-[90%] sm:max-w-2xl">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <h1 className="text-4xl">Update Password</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="cpsw">Current Password</label> <br />
            <Input
              type="password"
              id="cpsw"
              suggested="current-password"
              placeholder="Enter your current password"
              className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
              {...register("currentPassword")}
              error={errors.currentPassword?.message}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="npsw">New Password</label> <br />
            <Input
              type="password"
              id="npsw"
              suggested="new-password"
              placeholder="Enter new password"
              className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
              {...register("newPassword")}
              error={errors.newPassword?.message}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="cnpsw">Confirm Password</label> <br />
            <Input
              type="password"
              id="cnpsw"
              suggested="confirm-new-password"
              placeholder="Confirm new password"
              className="outline-none bg-transparent w-[400px] pb-5 my-5 border-b-2"
              {...register("confirmNewPassword")}
              error={errors.confirmNewPassword?.message}
            />
          </div>
          <Button type="submit" className={"w-full sm:w-[60%]"}>
            <div className="flex text-sm justify-center gap-3 items-center">
              Update Password
            </div>
          </Button>
        </form>

        <Link to="/settings">
          <Button className="my-3">
            <div className="flex w-full justify-center gap-3 items-center">
              <FaLongArrowAltLeft /> Go Back
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UpdatePassword;
