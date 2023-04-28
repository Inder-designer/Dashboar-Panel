import React from "react";
import style from "./welcomePage.module.scss";
import {
  faCoffee,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "flowbite-react";
import UserTransaction from "../userTransaction/UserTransaction";
import UserDashboard from "../userDashboard/UserDashboard";
import UserSetting from "../userSettings/UserSetting";
import NuggetsRequest from "../nuggetsRequest/NuggetsRequest";
import AdminDashboard from "../adminDashboard/AdminDashboard";
import AdminRequests from "../adminAllRequest/AdminRequests";
import AllUsers from "../adminAllUsers/AllUsers";
import AllTransaction from "../adminAllTransaction/AllTransaction";
import AdminSettings from "../adminSettings/AdminSettings";

const WelcomePage = () => {
  return (
    <div className="">
      <div
        className={` panelBG h-[260px] w-full pt-10 px-5 ${style.welcomePage}`}
      >
        <div className="container mx-auto">
          <nav className="flex items-center justify-between pb-[26px] border-b border-[#D2D2D2]">
            <ul className={`flex ${style.navbar_nav}`}>
              <li className={` me-[14px] ${style.nav_item} ${style.active}`}>
                <a
                  href="#"
                  className="py-2 lg:py-[13px] px-2 lg:px-[24px] inline-block text-white text-xs lg:text-base font-medium"
                >
                  Dashboard
                </a>
              </li>
              <li className={` me-[14px] ${style.nav_item}`}>
                <a
                  href="#"
                  className="py-2 lg:py-[13px] px-2 lg:px-[24px] inline-block text-white text-xs lg:text-base font-medium"
                >
                  Transactions
                </a>
              </li>
              <li className={` me-[14px] ${style.nav_item}`}>
                <a
                  href="#"
                  className="py-2 lg:py-[13px] px-2 lg:px-[24px] inline-block text-white text-xs lg:text-base font-medium"
                >
                  Request Nuggets
                </a>
              </li>
              <li className={` me-[14px] ${style.nav_item}`}>
                <a
                  href="#"
                  className="py-2 lg:py-[13px] px-2 lg:px-[24px] inline-block text-white text-xs lg:text-base font-medium"
                >
                  Settings
                </a>
              </li>
            </ul>
            <div className="flex ">
              <div className="w-[50px] h-[50px] rounded-full bg-black me-5 relative">
                <img src="/images/Rectangle 34624172.png" alt="" className="object-cover" />
                <span className="absolute w-[10px] h-[10px] bg-gradient-to-b from-[#00F0FF] to-[#E0FF64] rounded-full top-0 right-1"></span>
              </div>
              <button className="text-white text-base leading-6 font-medium">
                Shubham T{" "}
                <FontAwesomeIcon icon={faCaretDown} className="ms-[10px]" />
              </button>
            </div>
          </nav>
          {/* <h2 className="text-2xl font-bold leading-9 mt-5 text-white">Welcome Back!</h2> */}
        </div>
      </div>
      <div className="mt-[-78px] px-5">
        <div className="container mx-auto">
          {/* User Dashboard  */}
          {/* <UserDashboard/> */}

          {/* User Transaction */}
          {/* <UserTransaction/> */}

          {/* User Settings */}
          {/* <UserSetting/> */}

          {/* Nuggets Request  */}
          {/* <NuggetsRequest/> */}


          {/* Admin Panel */}

          {/* Admin Dashboard */}
          {/* <AdminDashboard/> */}

          {/* Admin All Requests */}
          {/* <AdminRequests/> */}

          {/* Admin All Users */}
          {/* <AllUsers/> */}

          {/* Admin All Transaction */}
          {/* <AllTransaction/> */}

          {/* Admin Settings */}
          <AdminSettings/>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
