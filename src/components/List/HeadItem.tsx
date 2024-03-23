import Image from "next/image";
import * as React from "react";

const StatItem: React.FC<StatItemProps> = ({ label, value, icon }) => {
  return (
    <div className="flex gap-1 tracking-normal whitespace-nowrap">
      <div className="font-medium">{label}:</div>
      {icon ? (
        <div className="flex gap-0 justify-center whitespace-nowrap">
          <Image
            src={icon}
            alt=""
            width={16}
            height={16}
            className="shrink-0 my-auto w-4 aspect-square"
          />
          <div>{value}</div>
        </div>
      ) : (
        <div>{value}</div>
      )}
    </div>
  );
};

const stats = [
  { label: "Machines", value: 6 },
  { label: "Orders", value: 28 },
  { label: "Customers", value: 28 },
  { label: "Drinks", value: 28 },
  {
    label: "Total Amount",
    value: 25999,
    icon: "/rupee.png",
  },
  { label: "Refunds Initiated", value: 3 },
];

export default function HeadItem() {
  return (
    <section className="flex flex-col justify-center self-stretch px-8 py-5 text-xs leading-6 bg-white rounded-xl shadow-md max-w-[992px] text-zinc-800 max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
}
