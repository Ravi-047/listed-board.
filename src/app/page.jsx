"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Home() {
  const [message, setMessage] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <section className="w-full h-screen sm:flex">
      {/* left  */}
      <div className="w-full sm:w-[40%] h-[70px] sm:h-[100vh] text-[20px] bg-[#000000] flex items-center justify-center text-white">
        <p className=" text-[#FFFFFF] font-Montserrat font-bold sm:text-7xl sm:leading-[88px] ">
          Board.
        </p>
      </div>

      {/* right  */}
      <div className="bg-[#F5F5F5] w-full sm:w-[60%] flex items-center justify-center">
        <div className="sm:w-[385px] p-[10px] sm:p-[0px]">
          {message ? (
            <p className="text-[12px] text-red-600 text-center">
              Please sign in with google to go to Dashboard
            </p>
          ) : (
            ""
          )}
          <h1 className="font-Montserrat font-bold text-3xl sm:text-4xl leading-[44px] mt-[25px] sm:mt-[0px]">
            Sign In
          </h1>
          <p className="font-Lato font-normal text-base leading-[19px]">
            Sign in to your account
          </p>

          {/* google & apple authentication  */}
          <div className="flex flex-col gap-[10px] sm:flex-row items-center justify-between mt-[26px] sm:gap-[25px]">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="flex items-center justify-center gap-[10px] cursor-pointer bg-[#FFFFFF] h-[30px] rounded-[10px] w-full"
            >
              <Image
                src="/googleLogo.png"
                width={14}
                height={14}
                alt="googleLogo"
              />
              <span className="font-Montserrat font-normal text-xs leading-[15px] text-[#858585] text-center">
                Sign in with Google
              </span>
            </button>

            <div className="flex items-center justify-center gap-[10px] cursor-pointer  bg-[#FFFFFF] h-[30px] rounded-[10px] w-full">
              <Image
                src="/appleLogo.png"
                width={20}
                height={20}
                alt="googleLogo"
              />
              <span className="font-Montserrat font-normal text-xs leading-[15px] text-[#858585] text-center">
                Sign in with Apple
              </span>
            </div>
          </div>

          {/* login and sign up form  */}
          <form
            className="bg-[#FFFFFF] mt-[25px] p-[30px] rounded-[20px] flex flex-col gap-[20px]"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col gap-[10px]">
              <label className="font-Lato font-normal text-base leading-[19px]">
                Email address
              </label>
              <input
                type="text"
                className="bg-[#EAEAEA;] rounded-[10px] h-[40px] font-Lato font-normal text-base leading-[19px] text-[#000000] placeholder:text-[#000000] pl-[15px]"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <label className="font-Lato font-normal text-base leading-[19px]">
                Password
              </label>
              <input
                type="password"
                className="bg-[#EAEAEA;] rounded-[10px] h-[40px] font-Lato font-normal text-base leading-[19px] text-[#000000] placeholder:text-[#000000] pl-[15px]"
                placeholder="Enter Password"
              />
            </div>

            <Link
              href="/"
              className="text-[#346BD5] font-Lato font-normal text-base leading-[19px]"
            >
              Forgot password?
            </Link>

            <button
              type="submit"
              className="bg-[#000000] rounded-[10px] w-full text-[#FFFFFF] h-[40px] text-center font-Montserrat font-bold text-base leading-[20px]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-[20px] text-center mb-[40px] sm:mb-[0px]">
            <p className="font-Lato font-normal text-base leading-[19px] text-[#858585]">
              Don’t have an account?{" "}
              <Link href="/" className="text-[#346BD4]">
                Register here
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
