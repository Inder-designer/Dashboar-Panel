import React from 'react'
import style from './allUsers.module.scss'
import {
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "flowbite-react";

const AllUsers = () => {
  return (
    <div className={` ${style.allUsers}`}>
        <div className="flex items-center justify-between ">
            <h4 className="text-2xl leading-9 font-semibold text-white ">
                All Users
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
                    <Table.HeadCell>Account No.</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Total Gold Deposited</Table.HeadCell>
                    <Table.HeadCell>Bedrock Nuggets</Table.HeadCell>
                    <Table.HeadCell>Segrated bullion</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>8861</Table.Cell>
                        <Table.Cell className='!text-[#4B70E2]'>nevaeh.simmons@example.com</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>1148</Table.Cell>
                        <Table.Cell className='!text-[#4B70E2]'>georgia.young@example.com</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>8861</Table.Cell>
                        <Table.Cell className='!text-[#4B70E2]'>nevaeh.simmons@example.com</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>1148</Table.Cell>
                        <Table.Cell className='!text-[#4B70E2]'>georgia.young@example.com</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>8861</Table.Cell>
                        <Table.Cell className='!text-[#4B70E2]'>nevaeh.simmons@example.com</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>1148</Table.Cell>
                        <Table.Cell className='!text-[#4B70E2]'>georgia.young@example.com</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>8861</Table.Cell>
                        <Table.Cell className='!text-[#4B70E2]'>nevaeh.simmons@example.com</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                        <Table.Cell>583</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>1148</Table.Cell>
                        <Table.Cell className='!text-[#4B70E2]'>georgia.young@example.com</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                        <Table.Cell>196</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    </div>
  )
}

export default AllUsers