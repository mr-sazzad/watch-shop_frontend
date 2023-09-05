import RootLayout from "@/components/layout/RootLayout";
import { useLoginUserMutation } from "@/redux/api/apiSlice";
import { signUpData } from "@/types";
import Cookies from "js-cookie";
import Link from "next/link";
import { ReactElement, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import Swal from "sweetalert2";

const SignInPage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  const { handleSubmit } = useForm<signUpData>();

  const [loginUser, { isSuccess, data, error }] = useLoginUserMutation();

  const onSubmit = async () => {
    try {
      const user = await loginUser({ email, password });

      if (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      } else if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign In Successfully !",
          showConfirmButton: true,
          timer: 1500,
        });

        setEmail("");
        setPassword("");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign In Successfully !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isSuccess) {
    console.log({ accessToken: data.accessToken });
    Cookies.set("access_token:", data.accessToken);
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log in!</h1>
          <p className="py-6">
            👋🏽 Welcome To Watch Shop! Please Log in for getting exiting
            experience 🎁
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={handleEmailChange}
                  value={email}
                />
                {email &&
                  (!email.includes("@gmail.com") || email.length < 13 ? (
                    <div className="text-xs font-medium flex items-center justify-start gap-1 mt-1 ml-2">
                      <RiErrorWarningLine className="text-rose-400 mt-1" />
                      <p className="text-rose-400">please include @gmail.com</p>
                    </div>
                  ) : (
                    <div className="text-xs font-medium flex items-center justify-start gap-1 mt-1 ml-2">
                      <IoMdCheckmarkCircleOutline className="text-green-300 mt-1 text-xs font-bold" />
                      <p className="text-green-300 font-normal">good job</p>
                    </div>
                  ))}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-start gap-3">
                <span className="text-xs font-medium">New To Watch Shop? </span>
                <Link
                  href="sign-up"
                  className="text-xs font-medium text-gray-700 border-b-2 border-indigo-500"
                >
                  Create An Account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout key={null}>{page}</RootLayout>;
};
