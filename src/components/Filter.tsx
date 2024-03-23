"use client";
import * as React from "react";

const DateFilter: React.FC<DateFilterProps> = ({ label, date, onClick }) => {
  return (
    <div className="flex gap-2 mt-4">
      <div className="my-auto font-medium tracking-normal leading-6">
        {label}
      </div>
      <button
        className="flex gap-2 justify-center px-3 py-1 whitespace-nowrap bg-white border border-solid border-zinc-100 leading-[155%] rounded-[80px]"
        onClick={onClick}
      >
        <div>{date}</div>
        <img
          src="/frame-40.svg"
          alt="Close icon"
          className="shrink-0 my-auto w-3.5 aspect-square"
        />
      </button>
    </div>
  );
};

const StatusFilter: React.FC<StatusFilterProps> = ({ status, onClick }) => {
  return (
    <button
      className="flex gap-2 justify-center px-3 py-1 bg-white border border-solid border-zinc-100 rounded-[80px]"
      onClick={onClick}
    >
      <div>{status}</div>
      <img
        src="/frame-40.svg"
        alt="Close icon"
        className="shrink-0 my-auto w-3.5 aspect-square"
      />
    </button>
  );
};

const MachineFilter: React.FC<MachineFilterProps> = ({ machine, onClick }) => {
  return (
    <button
      className="flex gap-2 justify-center px-3 py-1 bg-white border border-solid border-zinc-100 rounded-[80px]"
      onClick={onClick}
    >
      <div>{machine}</div>
      <img
        src="/frame-40.svg"
        alt="Close icon"
        className="shrink-0 my-auto w-3.5 aspect-square"
      />
    </button>
  );
};

const Filter: React.FC = () => {
  const statusFilters = [
    "Success",
    "Failure",
    "Pending",
    "Refund Completed",
    "Refund Initiated",
    "Sent",
  ];
  const machineFilters = [
    "Aahaar Stall 23",
    "Aahaar Stall 37",
    "Aahaar Stall 88",
  ];

  const handleDateFromClick = () => {
    console.log("Date From clicked");
  };

  const handleDateToClick = () => {
    console.log("Date To clicked");
  };

  const handleStatusClick = (status: string) => {
    console.log(`Status ${status} clicked`);
  };

  const handleMachineClick = (machine: string) => {
    console.log(`Machine ${machine} clicked`);
  };

  const handleSelectFiltersClick = () => {
    console.log("Select Filters clicked");
  };

  const handleClearAllClick = () => {
    console.log("Clear All clicked");
  };

  const handleSeeMoreClick = () => {
    console.log("See More clicked");
  };

  return (
    <div className="flex flex-col px-8 py-4 max-w-xs text-xs text-gray-500 bg-white rounded-3xl shadow-md absolute left-[1104px] top-[185px]">
      <div className="self-center font-bold tracking-wider leading-6">
        FILTERS
      </div>
      <div className="flex gap-5 mt-4 font-medium leading-9">
        <button
          className="flex-1 justify-center px-5 py-px bg-white rounded-lg border border-gray-400 border-solid"
          onClick={handleSelectFiltersClick}
        >
          Select Filters
        </button>
        <button
          className="flex flex-col flex-1 justify-center bg-white rounded-lg"
          onClick={handleClearAllClick}
        >
          <div className="justify-center px-5 py-px underline bg-white rounded-lg">
            Clear All
          </div>
        </button>
      </div>
      <DateFilter
        label="Date From:"
        date="21/03/2022"
        onClick={handleDateFromClick}
      />
      <DateFilter
        label="Date To:"
        date="21/03/2023"
        onClick={handleDateToClick}
      />
      <div className="flex gap-2 pr-5 mt-4 whitespace-nowrap leading-[155%]">
        <div className="font-medium tracking-normal leading-6">Status:</div>
        {statusFilters.slice(0, 2).map((status) => (
          <StatusFilter
            key={status}
            status={status}
            onClick={() => handleStatusClick(status)}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-2 leading-[155%]">
        {statusFilters.slice(2, 4).map((status) => (
          <StatusFilter
            key={status}
            status={status}
            onClick={() => handleStatusClick(status)}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-2 leading-[155%]">
        {statusFilters.slice(4).map((status) => (
          <StatusFilter
            key={status}
            status={status}
            onClick={() => handleStatusClick(status)}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-4 leading-6">
        <div className="font-medium tracking-normal">Machines:</div>
        <MachineFilter
          machine={machineFilters[0]}
          onClick={() => handleMachineClick(machineFilters[0])}
        />
      </div>
      <div className="flex gap-2 mt-2 leading-6">
        {machineFilters.slice(1).map((machine) => (
          <MachineFilter
            key={machine}
            machine={machine}
            onClick={() => handleMachineClick(machine)}
          />
        ))}
      </div>
      <button
        className="self-end mt-2 font-medium tracking-normal leading-6 underline"
        onClick={handleSeeMoreClick}
      >
        see more
      </button>
    </div>
  );
};

export default Filter;
