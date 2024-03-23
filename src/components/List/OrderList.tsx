"use client";
import { useTableId } from "@/context/tableContext";
import { getStatusClass } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

const MachineName = ({ name, id }: MachineNameProps) => (
  <td className="w-[20px] mb-2">
    <span>{name}</span>
    <span className="text-stone-400">({id})</span>
  </td>
);

const Amount = ({ amount }: AmountProps) => (
  <td className="flex gap-0 w-[20px] mb-2">
    <Image
      src="/rupee.png"
      width={26}
      height={26}
      className="shrink-0  "
      alt=""
    />
    <span>{amount}</span>
  </td>
);

const Status = ({ status }: StatusProps) => (
  <td className="mb-2">
    <span
      className={`flex font-bold  justify-center items-start px-1 py-1.5 uppercase whitespace-nowrap border ${getStatusClass(
        status
      )}  rounded-[32px]`}
    >
      {status}
    </span>
  </td>
);

const orders: Order[] = [
  {
    id: "OD101",
    date: "21/03/2023",
    time: "13:58:21",
    machineName: "Aahaar Stall 23",
    machineId: "MI102",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 199,

    status: "SUCCESS",
  },
  {
    id: "OD100",
    date: "21/03/2023",
    time: "13:57:12",
    machineName: "Aahaar Stall 37",
    machineId: "MI103",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 99,
    status: "FAILURE",
  },
  {
    id: "OD099",
    date: "21/03/2023",
    time: "13:56:32",
    machineName: "Aahaar Stall 88",
    machineId: "MI104",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 298,
    status: "PENDING",
  },
  {
    id: "OD098",
    date: "21/03/2023",
    time: "13:54:59",
    machineName: "Aahaar Stall 88",
    machineId: "MI104",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 345,
    status: "SENT",
  },
  {
    id: "OD097",
    date: "21/03/2023",
    time: "13:54:32",
    machineName: "Aahaar Stall 88",
    machineId: "MI104",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 666,
    status: "REFUND INITIATED",
  },
  {
    id: "OD096",
    date: "21/03/2023",
    time: "13:43:33",
    machineName: "Aahaar Stall 88",
    machineId: "MI104",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 765,
    status: "REFUND COMPLETED",
  },
  {
    id: "OD095",
    date: "21/03/2023",
    time: "13:38:02",
    machineName: "Aahaar Stall 88",
    machineId: "MI104",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 328,
    status: "SUCCESS",
  },
  {
    id: "OD094",
    date: "21/03/2023",
    time: "13:30:48",
    machineName: "Aahaar Stall 88",
    machineId: "MI104",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 199,
    status: "SUCCESS",
  },
  {
    id: "OD093",
    date: "21/03/2023",
    time: "13:30:15",
    machineName: "Aahaar Stall 88",
    machineId: "MI104",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 199,
    status: "SUCCESS",
  },
  {
    id: "OD092",
    date: "21/03/2023",
    time: "13:28:32",
    machineName: "Aahaar Stall 88",
    machineId: "MI104",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    amount: 499,
    status: "SUCCESS",
  },
];

const OrderList: React.FC = () => {
  const { tableId } = useTableId();
  return (
    <div className="bg-white rounded-xl  text-sm p-5">
      <table id={tableId} className="text-center">
        <thead>
          <tr className="text-blue-400">
            <th className="px-3 py-4 text-left">S.No.</th>{" "}
            <th className="px-3 py-4 text-left">Date</th>
            <th className="px-3 py-4 text-left">Order ID</th>
            <th className="px-3 py-4 text-left">Machine Name</th>
            <th className="px-3 py-4 text-left">Customer Name</th>
            <th className="px-3 py-4 text-left">Contact Number</th>
            <th className="px-3 py-4 text-left">Total Amount</th>
            <th className="px-3 py-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="mb-2">{index + 1}</td>
              <td className="flex flex-col mt-6 mb-2">
                <span>{order.date}</span>
                <span>{order.time}</span>
              </td>
              <td className="mb-2">{order.id}</td>
              <MachineName name={order.machineName} id={order.machineId} />
              <td className=" w-[20px] mb-2">{order.customerName}</td>
              <td className="mb-2">{order.contactNumber}</td>
              <Amount amount={order.amount} />
              <Status status={order.status} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
