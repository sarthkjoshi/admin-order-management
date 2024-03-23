"use client";
import Image from "next/image";

import { useTableId } from "@/context/tableContext";
import { useEffect } from "react";
import { exportTableToExcel, exportTableToPDF } from "@/lib/utils";

export default function ExportBar() {
  const { setTableId } = useTableId();

  const handleExportToPDF = () => {
    exportTableToPDF("order-table");
  };

  const handleExportToExcel = () => {
    exportTableToExcel("order-table");
  };

  useEffect(() => {
    setTableId("order-table");
  }, []);
  return (
    <div className="flex absolute w-[1328px] h-[68px] rounded-b-3xl  left-[96px] top-[101px] rounded-lg pt-4 pr-8 pb-4 pl-0 gap-[36px]">
      <div className="w-[951px] h-[36px] gap-[483px]">
        <div className="relative flex h-[38px]  w-[225px]  border border-solid border-gray-300 rounded-lg pt-[10px] pr-[17px] pb-[10px] pl-[37px] ">
          <Image
            src="/svgtablericon-1.svg"
            width={16}
            height={16}
            alt=""
            className="absolute top-[11px] left-[10px]  "
          />
          <input
            type="text"
            placeholder="Search"
            className="w-[173px]  [border:none] [outline:none] bg-[transparent] h-[18px]"
          />
        </div>
      </div>
      <div className="flex w-[575px] h-[36px] gap-[21px] justify-end">
        <div className="w-[114px] h-[36px] gap-[24px]">
          <button></button>
        </div>
        <div className="w-[36px] h-[36px]  border border-solid border-gray-300 rounded-lg items-center justify-center flex">
          <button onClick={handleExportToExcel}>
            <Image alt="" src="/frame-9.svg" width={24} height={24} />
          </button>
        </div>

        <div className="w-[36px] h-[36px]  border border-solid border-gray-300 rounded-lg items-center justify-center flex">
          <button onClick={handleExportToPDF}>
            <Image alt="" src="/frame-10.svg" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
