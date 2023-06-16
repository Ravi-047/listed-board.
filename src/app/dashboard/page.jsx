"use client";

import LineCart from "@/components/LineCart";
import PieChart from "@/components/PieChart";
import Statics from "@/components/Statics";

import SideBar from "@/components/SideBar";
import TopNav from "@/components/TopNav";
import { useState } from "react";

export default function DashboardLayout() {
  const [toogle, setToogle] = useState(false);

  const onChange = () => {
    setToogle((prev) => !prev);
  };

  return (
    <section className="bg-[#F5F5F5] w-full h-[100dvh] sm:p-[15px] overflow-hidden">
      {/*----  side nav ---- */}
      <SideBar onChange={onChange} state={toogle} />

      {/* top nav & main content  */}
      <div className={`main_content ${toogle ? "wide_main_montent" : ""}`}>
        <TopNav />
        <div className="p-[10px]">
          <section className="mt-[20px] z-[1]">
            <Statics />

            {/* graph  */}
            <LineCart />

            {/* pie chart  */}
            <div className="pie_graph z-[1]">
              <PieChart />

              <div>
                <div className="pie_totoal_p">
                  <p>Today’s schedule</p>
                  <select>
                    <option value="">See All</option>
                  </select>
                </div>

                <div className="today_shedule_list">
                  <div className="shedule_data border_left_1">
                    <p>Meeting with suppliers from Kuta Bali</p>
                    <p>14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali </p>
                  </div>

                  <div className="shedule_data border_left_2">
                    <p>Meeting with suppliers from Kuta Bali</p>
                    <p>14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
