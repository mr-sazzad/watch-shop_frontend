import RootLayout from "@/components/layout/RootLayout";
import { useCreateUserMutation } from "@/redux/api/apiSlice";
import { signUpData } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import Swal from "sweetalert2";

const SignUpPage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  toast.error("something went wrong!");

  const router = useRouter();

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
  const handleConfirmPasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setConfirmPassword(e.target.value);
  };

  const isFilled =
    email !== "" &&
    email.length > 10 &&
    email.includes("@gmail.com") &&
    password !== "" &&
    confirmPassword !== "";

  const isMatched =
    isFilled && password === confirmPassword && password.length > 5;

  const { handleSubmit } = useForm<signUpData>();

  const [createUser, { error }] = useCreateUserMutation();

  const onSubmit = async () => {
    try {
      const res = await createUser({ email, password }).unwrap();

      if (error) {
        toast.error("something went wrong!");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up Successfully !",
          showConfirmButton: false,
          timer: 1500,
        });

        router.push("/sign-in");
      }
    } catch (err) {
      toast.error("something went wrong!");
      console.error(err, "signUp Error");
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
          <p className="py-6">
            👋🏽 Welcome from Watch Shop! Please Sign Up Now for getting exiting
            experience 🎁
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
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
                  value={password}
                  onChange={handlePasswordChange}
                />
                {password &&
                  (password.length <= 5 ? (
                    <div className="text-xs font-medium flex items-center justify-start gap-1 mt-1 ml-2">
                      <RiErrorWarningLine className="text-rose-400 mt-1" />
                      <p className="text-rose-400">
                        password must be 6 or grater
                      </p>
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
                  <span className="label-text font-medium">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                  type="submit"
                  disabled={!isMatched}
                >
                  Sign Up
                </button>
              </div>
              <div className="flex justify-start gap-3">
                <span className="text-xs font-medium">
                  Already Have An Account?
                </span>
                <Link
                  href="sign-in"
                  className="text-xs font-medium text-gray-700 border-b-2 border-indigo-500"
                >
                  Please Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout key={null}>{page}</RootLayout>;
};
