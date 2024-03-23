import ExportBar from "@/components/ExportBar";
import Filter from "@/components/Filter";
import List from "@/components/List/List";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-start justify-start pt-0 pb-[115px] pr-4 pl-0 box-border gap-[16px] tracking-[normal]">
      <SideBar />
      <Navbar />
      <ExportBar />
      <List />
      <Filter />
    </div>
  );
}
