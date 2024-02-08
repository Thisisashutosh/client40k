import Linechart from "@/components/Linechart";
import Sidebar from "@/components/Sidebar";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-start">
      <Sidebar/>
      <div className="w-[calc(100vw-16rem)] flex flex-col items-start justify-center">
        <Stats/>
        <Linechart/>
      </div>
    </div>
  );
}
