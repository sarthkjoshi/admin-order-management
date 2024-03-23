import React from "react";
import HeadItem from "./HeadItem";
import OrderList from "./OrderList";

export default function List() {
  return (
    <div className="flex  flex-col w-[992px] h-[1182px] gap-[16px] absolute top-[185px] left-[96px]  rounded-lg   ">
      <HeadItem />
      <OrderList />
    </div>
  );
}
