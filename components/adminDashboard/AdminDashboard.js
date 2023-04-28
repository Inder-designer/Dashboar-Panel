import React from 'react'
import style from "./adminDashboard.module.scss";
import {
  faCoffee,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashboard = () => {
  return (
    <div className="adminDashboard">
      <div className="grid grid-cols-3 gap-[30px] xl:gap-[60px]">
        <div className="pt-[18px] px-[32px] xl:px-[78px] pb-7 bg-white rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
            <h4 className="text-base leading-6 font-bold ">
                Total Bullion Gold
            </h4>
            <p className="text-[#5B58E3] text-[25px] leading-[38px] font-bold mt-3">5749 Troy Ounce</p>
        </div>
        <div className="pt-[18px] px-[32px] xl:px-[78px] pb-7 bg-white rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
            <h4 className="text-base leading-6 font-bold ">
                Nuggets Digitised
            </h4>
            <p className="text-[#5B58E3] text-[25px] leading-[38px] font-bold mt-3">5749 </p>
        </div>
        <div className="pt-[18px] px-[32px] xl:px-[78px] pb-7 bg-white rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
            <h4 className="text-base leading-6 font-bold ">
                Pending Requests
            </h4>
            <p className="text-sm leading-5 font-medium ">See all requests</p>
            <button className="py-[8.5px] px-[22.5px] bg-[#5B58E3] rounded-lg text-white text-xs leading-[18px] font-semibold mt-[10px]">All Requests</button>
        </div>
      </div>
      <div className="mt-14">
        <div className="flex mt-5 gap-[30px] xl:gap-[60px]">
          <div className="w-[68%] px-7 py-5 rounded-lg shadow-[0px_4px_7px_rgba(0,0,0,0.25)]">
            <h6 className="text-[#000] text-xl leading-6 font-medium ">Gold Deposited</h6>
            <div className='mt-5'>
                <img src="/images/graph.png" alt="" />
            </div>
          </div>
          <div className="w-[32%] px-7 py-5 rounded-lg shadow-[0px_4px_7px_rgba(0,0,0,0.25)]">
            <h6 className="text-[#000] text-xl leading-6 font-medium ">Monthly Cycle</h6>
            <div className="mt-5">
                <div className='mt-5 text-center relative'>
                    <img src="/images/pie.png" alt="" className='w-[300px] mx-auto' />
                    <span className='text-[#5463E2] text-[22px] leading-8 font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] ' >5749 Ounce</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard