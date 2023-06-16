"use client";

import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import Image from "next/image";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

const TopNav = () => {
  const { data: session } = useSession();

  const [toggleDropdown, setToggeDropdown] = useState(false);

  return (
    <div className="top_nav">
      <p className="top_header">Dashboard</p>
      <div className="flex items-center gap-5 mobile_d">
        <div className="top_search">
          <input
            type="text"
            placeholder="Search..."
            className="font-Lato text-[14px] font-normal leading-[17px]"
          />
          <span>
            <BsSearch />
          </span>
        </div>
        <div className="font-[900]">
          <BsBell />
        </div>
        <div>
          {session?.user?.image && (
            <Image
              src={session?.user?.image}
              width={30}
              height={30}
              className="rounded-full image_hover"
              alt="profile"
              onClick={() => setToggeDropdown((prev) => !prev)}
            />
          )}

          {toggleDropdown && (
            <div className="dropdown">
              <button
                className="mt-5 w-full black_btn"
                type="button"
                onClick={() => {
                  setToggeDropdown(false);
                  signOut({ callbackUrl: "/" });
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
