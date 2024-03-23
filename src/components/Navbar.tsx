import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex  absolute w-[1328px] h-[85px] rounded-b-3xl bg-white shadow-lg left-[96px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] max-w-full gap-[669px]">
      <div className="flex flex-col w-[246px] h-[53px] gap-[16px] font-lato">
        <h2 className="w-[92px] h-[22px] leading-[21.95px] font-semibold">
          All Orders
        </h2>
        <div className="text-xs leading-[15px]  text-blue-500 w-[55px] whitespace-nowrap">
          All Orders
        </div>
      </div>
      <div className="w-[349px] h-[38px] gap-[32px] flex">
        <div className="relative flex h-[38px]  w-[225px]  border border-solid  border-gray-300 rounded-lg pt-[10px] pr-[17px] pb-[10px] pl-[37px]">
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

        <div className="w-[92px] h-[36px] gap-[32px] flex">
          <Image src="/bell.svg" width={24} height={24} alt="" />
          <Image src="/avatar.png" width={36} height={36} alt="" />
        </div>
      </div>
    </div>
  );
}
