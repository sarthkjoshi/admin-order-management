import Image from "next/image";

export default function SideBar() {
  return (
    <div className="flex flex-col w-[80px] h-[1105px] items-center   shadow-lg  px-4 py-4 bg-white">
      <div className="flex flex-col items-center justify-start gap-[57px]">
        <Image
          src="/Basil brand stamps POS-02 1.png"
          width={32}
          height={32}
          alt=""
        />

        <div className="flex flex-col items-center justify-start py-[5px] px-0 gap-[24px]">
          <div className="h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center p-1.5 box-border ">
            <Image
              className=" relative overflow-hidden shrink-0"
              alt=""
              src="/frame.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center p-1.5 box-border">
            <Image
              className=" relative overflow-hidden shrink-0"
              alt=""
              src="/frame-1.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="h-9 rounded-md bg-blue-500 overflow-hidden shrink-0 flex flex-col items-center justify-center p-1.5 box-border">
            <Image
              className=" relative overflow-hidden shrink-0"
              alt=""
              src="/frame-2.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center p-1.5 box-border">
            <Image
              className="relative overflow-hidden shrink-0"
              alt=""
              src="/frame-3.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center p-1.5 box-border">
            <Image
              className="relative overflow-hidden shrink-0"
              alt=""
              src="/frame-4.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center p-1.5 box-border">
            <Image
              className=" relative overflow-hidden shrink-0"
              alt=""
              src="/frame-5.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center p-1.5 box-border">
            <Image
              className="relative overflow-hidden shrink-0"
              alt=""
              src="/frame-6.svg"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="h-[94px] flex flex-col items-center justify-start py-[5px] px-0 box-border gap-[24px]">
          <Image
            className="relative overflow-hidden shrink-0"
            alt=""
            src="/frame-7.svg"
            width={24}
            height={24}
          />
          <div className="h-9 overflow-hidden shrink-0 flex flex-col items-center justify-center p-1.5 box-border">
            <Image
              className="relative overflow-hidden shrink-0"
              alt=""
              src="/svgtablericon.svg"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
