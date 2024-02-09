import Activeriders from "@/components/Activeriders";
import Linechart from "@/components/Linechart";
import Sidebar from "@/components/Sidebar";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-start">
      <div className="fixed hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full md:w-[calc(100vw-16rem)] p-4 md:ml-64 flex flex-col items-center justify-center">
        <Stats />
        <Linechart />
        <div className="w-full md:w-[calc(100vw-20rem)] mt-4 rounded-lg border p-4">
          <Activeriders />
        </div>
      </div>
    </div>
  );
}
