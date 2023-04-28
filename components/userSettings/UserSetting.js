import React from 'react'
import style from "./userSetting.module.scss";
import { faEdit, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiPencilFill } from 'react-icons/ri';
import { IoIosCopy } from 'react-icons/io';

const UserSetting = () => {
  return (
    <div className={` ${style.userSetting}`}>
        <div className="container mx-auto">
            <h4 className="text-2xl leading-9 font-semibold text-white ">
                Settings
            </h4>
            <div className="bg-white cstmShadow rounded px-9 py-11 mt-5">
                <div className='flex gap-7'>
                    <div className='min-h-[480px] py-[22px] px-9 panelBG rounded-lg w-1/2 lg:w-[40%] xl:w-[30%]'>
                        <div className='text-center'>
                            <div className='w-[100px] h-[100px] rounded-full mx-auto'>
                                <img src="/images/Rectangle 34624172.png" alt="" />
                            </div>
                            <button className=' rounded-md mt-3 text-[11px] leading-4 font-medium text-white bg-[rgba(255,255,255,0.25)] py-2 px-[14.5px] '>Edit profile pic</button>
                        </div>
                        <div className='mt-6'>
                            <ul className='list-none '>
                                <li className='text-white text-sm leading-5 font-medium mb-[14px]'>Name: 
                                    <span className='text-base leading-6 font-bold ms-[5px] me-[8px]'>Shubham T</span> 
                                    <FontAwesomeIcon icon={faEdit} className='text-[11px] cursor-pointer'/>
                                </li>
                                <li className='text-white text-sm leading-5 font-medium mb-[14px]'>Email: 
                                    <span className=' ms-[5px] '>shubhamt@gmail.com</span>
                                </li>
                            </ul>
                            <div>
                                <p className='text-white text-sm leading-5 font-medium mb-[10px] '>Password</p>
                                <div className='relative rounded-lg bg-[#ffffff8a] ps-5'>
                                    <input type="password" name="" id="" placeholder='************' className=' text-sm leading-5 text-white placeholder:text-white border-none !outline-0 !ring-0 bg-transparent w-full ps-0 pe-9' />
                                    <RiPencilFill className='text-[20px] cursor-pointer absolute right-3 top-[8px] text-white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-[22px] w-1/2 lg:w-[60%] xl:w-[70%]'>
                        <p className='text-base leading-6 font-extrabold text-black mb-3 '>My Account Number</p>
                        <div className='bg-[#D1D1D1] rounded-md relative px-[10px] py-[8.5px] w-full max-w-[280px]'>
                            <input disabled type="text" name="" id="" value="26545613265445465465723333" className='text-black text-xs font-semibold border-none !outline-0 !ring-0 bg-transparent w-full p-0 pe-9' />
                            <IoIosCopy className='text-[18px] cursor-pointer absolute right-3 top-[12px] '/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSetting