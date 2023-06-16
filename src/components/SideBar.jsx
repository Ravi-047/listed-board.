"use client";

import Link from "next/link";
import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";
import { BsTags } from "react-icons/bs";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { useState } from "react";

const SideBar = ({ onChange, state }) => {
  const [active, setActive] = useState("dashboard");
  return (
    <div
      className={`side_position_value w-[250px] h-[96.6%] bg-[#000000] text-[#FFFFFF] rounded-[30px] flex flex-col items-center gap-[30px] py-[30px] ${
        state ? "slide_sidebar" : "slide_sidebar_opne"
      }`}
    >
      <button onClick={onChange} type="button" className="_open_close_side_">
        {state ? <GoTriangleRight /> : <GoTriangleLeft />}
      </button>
      <div className="w-full pl-[40px] font-Montserrat font-bold text-3xl sm:leading-[44px]">
        Board.
      </div>

      <div className="w-full flex flex-col h-full justify-between">
        <div>
          <Link
            href="/dashboard"
            as=""
            className={`dash_option ${active === "dashboard" ? "active" : ""}`}
            onClick={() => setActive("dashboard")}
          >
            <span>
              <AiOutlinePieChart
                className={`${active === "dashboard" ? "side_font" : ""}`}
              />
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard"
            className={`dash_option ${
              active === "transaction" ? "active" : ""
            }`}
            onClick={() => setActive("transaction")}
          >
            <span>
              <BsTags
                className={`${active === "transaction" ? "side_font" : ""}`}
              />
            </span>
            <span>Transactions</span>
          </Link>
          <Link
            href="/dashboard"
            className={`dash_option ${active === "schedules" ? "active" : ""}`}
            onClick={() => setActive("schedules")}
          >
            <span>
              <TbCalendarTime
                className={`${active === "schedules" ? "side_font" : ""}`}
              />
            </span>
            <span>Schedules</span>
          </Link>
          <Link
            href="/dashboard"
            className={`dash_option ${active === "users" ? "active" : ""}`}
            onClick={() => setActive("users")}
          >
            <span>
              <BiUserCircle
                className={`${active === "users" ? "side_font" : ""}`}
              />
            </span>
            <span>Users</span>
          </Link>
          <Link
            href="/dashboard"
            className={`dash_option ${active === "settings" ? "active" : ""}`}
            onClick={() => setActive("settings")}
          >
            <span>
              <AiOutlineSetting
                className={`${active === "settings" ? "side_font" : ""}`}
              />
            </span>
            <span>Settings</span>
          </Link>
        </div>

        <div>
          <Link href="/dashboard" className="dash_option">
            Help
          </Link>
          <Link href="/dashboard" className="dash_option">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
