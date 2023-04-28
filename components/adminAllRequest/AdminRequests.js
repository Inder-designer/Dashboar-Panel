import React from 'react'
import style from './adminRequests.module.scss'
import {
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "flowbite-react";

const AdminRequests = () => {
  return (
    <div className={` ${style.adminRequests}`}>
        <div className="flex items-center justify-between ">
            <h4 className="text-2xl leading-9 font-semibold text-white ">
                All Requests
            </h4>
            <div className="flex items-center gap-[15px]">
                <div className="flex bg-[rgba(255,255,255,0.25)] rounded px-[5px] py-1 gap-[5px]">
                    <input
                        type="date"
                        className="border-none !outline-0 !ring-0 cstmDate px-[10px] py-1 rounded bg-white text-xs leading-5 font-normal"
                        placeholder="From"
                    />
                    <input
                        type="date"
                        className="border-none !outline-0 !ring-0 cstmDate px-[10px] py-1 rounded bg-white text-xs leading-5 font-normal"
                        placeholder="To"
                    />
                </div>
                <div className="relative bg-[#EEEEEE] px-[10px] py-[6px] rounded">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-[#969696] me-[10px]"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        className=" bg-transparent p-0 border-none !outline-0 !ring-0 text-xs leading-5 font-normal placeholder:text-[#969696] "
                        placeholder="Search"
                    />
                </div>
            </div>
        </div>
        <div className="mt-5">
            <Table className="">
                <Table.Head>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Gold Amount </Table.HeadCell>
                    <Table.HeadCell>Equivalent Nuggets</Table.HeadCell>
                    <Table.HeadCell>Account No.</Table.HeadCell>
                    <Table.HeadCell>Date</Table.HeadCell>
                    <Table.HeadCell>Time</Table.HeadCell>
                    <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>8861</Table.Cell>
                        <Table.Cell className='!text-[#5B58E3]'>556</Table.Cell>
                        <Table.Cell className='!text-[#008D0E]'>1439</Table.Cell>
                        <Table.Cell className='!font-medium'>1148</Table.Cell>
                        <Table.Cell className='!font-medium'>22 Oct, 2020</Table.Cell>
                        <Table.Cell className='!font-medium'>06:32 pm</Table.Cell>
                        <Table.Cell className='!text-[#CD6F00]'>
                            <div className=''>
                                <button className='me-5 font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#0803F1] rounded text-white '>Approve</button>
                                <button className='font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#E30404] rounded text-white '>Approve</button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>1148</Table.Cell>
                        <Table.Cell className='!text-[#5B58E3]'>130</Table.Cell>
                        <Table.Cell className='!text-[#008D0E]'>6025</Table.Cell>
                        <Table.Cell className='!font-medium'>5028</Table.Cell>
                        <Table.Cell className='!font-medium'>1 Feb, 2020</Table.Cell>
                        <Table.Cell className='!font-medium'>05:51 am</Table.Cell>
                        <Table.Cell className='!text-[#CD6F00]'>
                            <div className=''>
                                <button className='me-5 font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#0803F1] rounded text-white '>Approve</button>
                                <button className='font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#E30404] rounded text-white '>Approve</button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>8861</Table.Cell>
                        <Table.Cell className='!text-[#5B58E3]'>556</Table.Cell>
                        <Table.Cell className='!text-[#008D0E]'>1439</Table.Cell>
                        <Table.Cell className='!font-medium'>1148</Table.Cell>
                        <Table.Cell className='!font-medium'>22 Oct, 2020</Table.Cell>
                        <Table.Cell className='!font-medium'>06:32 pm</Table.Cell>
                        <Table.Cell className='!text-[#CD6F00]'>
                            <div className=''>
                                <button className='me-5 font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#0803F1] rounded text-white '>Approve</button>
                                <button className='font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#E30404] rounded text-white '>Approve</button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>1148</Table.Cell>
                        <Table.Cell className='!text-[#5B58E3]'>130</Table.Cell>
                        <Table.Cell className='!text-[#008D0E]'>6025</Table.Cell>
                        <Table.Cell className='!font-medium'>5028</Table.Cell>
                        <Table.Cell className='!font-medium'>1 Feb, 2020</Table.Cell>
                        <Table.Cell className='!font-medium'>05:51 am</Table.Cell>
                        <Table.Cell className='!text-[#CD6F00]'>
                            <div className=''>
                                <button className='me-5 font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#0803F1] rounded text-white '>Approve</button>
                                <button className='font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#E30404] rounded text-white '>Approve</button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>8861</Table.Cell>
                        <Table.Cell className='!text-[#5B58E3]'>556</Table.Cell>
                        <Table.Cell className='!text-[#008D0E]'>1439</Table.Cell>
                        <Table.Cell className='!font-medium'>1148</Table.Cell>
                        <Table.Cell className='!font-medium'>22 Oct, 2020</Table.Cell>
                        <Table.Cell className='!font-medium'>06:32 pm</Table.Cell>
                        <Table.Cell className='!text-[#CD6F00]'>
                            <div className=''>
                                <button className='me-5 font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#0803F1] rounded text-white '>Approve</button>
                                <button className='font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#E30404] rounded text-white '>Approve</button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>1148</Table.Cell>
                        <Table.Cell className='!text-[#5B58E3]'>130</Table.Cell>
                        <Table.Cell className='!text-[#008D0E]'>6025</Table.Cell>
                        <Table.Cell className='!font-medium'>5028</Table.Cell>
                        <Table.Cell className='!font-medium'>1 Feb, 2020</Table.Cell>
                        <Table.Cell className='!font-medium'>05:51 am</Table.Cell>
                        <Table.Cell className='!text-[#CD6F00]'>
                            <div className=''>
                                <button className='me-5 font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#0803F1] rounded text-white '>Approve</button>
                                <button className='font-semibold text-xs leading-[18px] py-[6px] px-[22px] bg-[#E30404] rounded text-white '>Approve</button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    </div>
  )
}

export default AdminRequests