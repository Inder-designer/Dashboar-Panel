import React from 'react'
import style from "./userDashboard.module.scss";
import {
  faCoffee,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserDashboard = () => {
  return (
    <div className="userDashboard">
      <div className="grid grid-cols-3 gap-[30px] xl:gap-[60px]">
        <div className="pt-[18px] px-[22px] pb-7 bg-white rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
          <h4 className="flex items-center text-base leading-6 font-bold ">
            <img src="/images/wallet.png" alt="" className="w-[42px] me-[15px]" />
            Create Wallet
          </h4>
          <div className="ps-[57px]">
            <p className="text-sm leading-5 font-medium mb-[10px]">Create your wallet to continue</p>
            <button className="py-[8.5px] px-[22.5px] bg-[#5B58E3] rounded-lg text-white text-xs leading-[18px] font-semibold ">Connect Wallet</button>
          </div>
        </div>
        <div className="pt-[18px] px-[22px] pb-7 bg-white rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
          <h4 className="flex items-center text-base leading-6 font-bold ">
            <img src="/images/wallet (1).png" alt="" className="w-[42px] me-[15px]" />
            Balance Nuggets
          </h4>
          <div className="ps-[57px]">
            <p className="text-sm leading-5 font-medium mb-[10px]">Create your wallet to continue</p>
            <button className="py-[8.5px] px-[22.5px] bg-[#5B58E3] rounded-lg text-white text-xs leading-[18px] font-semibold ">Connect Wallet</button>
          </div>
        </div>
        <div className="pt-[18px] px-[22px] pb-7 bg-white rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
          <h4 className="flex items-center text-base leading-6 font-bold ">
            <img src="/images/sent 1.png" alt="" className="w-[42px] me-[15px]" />
            Sent Nuggets
          </h4>
          <div className="ps-[57px]">
            <p className="text-sm leading-5 font-medium mb-[10px]">Create your wallet to continue</p>
            <button className="py-[8.5px] px-[22.5px] bg-[#5B58E3] rounded-lg text-white text-xs leading-[18px] font-semibold ">Connect Wallet</button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h4 className="text-xl leading-[30px] font-medium">Send & Receive</h4>
        <div className="flex mt-5 gap-[30px] xl:gap-16">
          <div className="w-[60%] p-5 rounded-lg shadow-[0px_4px_7px_rgba(0,0,0,0.25)]">
            <h6 className="text-[#606060] text-base leading-6 font-semibold ">Send Nuggets</h6>
            <div className="mt-5">
              <form action="#">
                <div className="mb-[30px]">
                  <label className="text-[#606060] text-sm leading-5 font-medium">Account Number</label>
                  <input type="text" name="" id="" className="bg-[#F1F1F1] rounded-lg w-full text-sm border-none !ring-0 !outline-0 mt-[10px] p-[15px]" />
                </div>
                <div className="mb-[30px]">
                  <label className="text-[#606060] text-sm leading-5 font-medium">Amount/Nuggets</label>
                  <input type="text" name="" id="" className="bg-[#F1F1F1] rounded-lg w-full text-sm border-none !ring-0 !outline-0 mt-[10px] p-[15px]" />
                </div>
                <button className="py-[14.5px] min-w-[100px] px-[20px] bg-[#5B58E3] rounded-lg text-white text-sm leading-[21px] font-semibold ">Send</button>
              </form>
            </div>
          </div>
          <div className="w-[40%] p-5 rounded-lg shadow-[0px_4px_7px_rgba(0,0,0,0.25)]">
            <h6 className="text-[#606060] text-base leading-6 font-semibold ">Receive Nuggets</h6>
            <div className="mt-5">
              <form action="#">
                <div className="mb-[30px]">
                  <label className="text-[#606060] text-sm leading-5 font-medium">Amount of Gold Deposited</label>
                  <input type="text" name="" id="" className="bg-[#F1F1F1] rounded-lg w-full text-sm border-none !ring-0 !outline-0 mt-[10px] p-[15px]" />
                </div>
                <div className="mb-[30px]">
                  <label className="text-[#606060] text-sm leading-5 font-medium">Equivalent Nuggets</label>
                  <input type="text" name="" id="" className="bg-[#F1F1F1] rounded-lg w-full text-sm border-none !ring-0 !outline-0 mt-[10px] p-[15px]" />
                </div>
                <button className="py-[14.5px] min-w-[100px] px-[20px] bg-[#5B58E3] rounded-lg text-white text-sm leading-[21px] font-semibold ">Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard