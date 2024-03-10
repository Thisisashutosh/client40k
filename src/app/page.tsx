import Activeriders from "@/components/Activeriders";
import Linechart from "@/components/Linechart";
import Menu from "@/components/Menu";
import Sidebar from "@/components/Sidebar";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex justify-start overflow-x-hidden">
      <div className="fixed hidden md:block">
        <Sidebar />
      </div>
      <div className="fixed block md:hidden z-50">
        <Menu/>
      </div>
      <div className="w-full md:w-[calc(100vw-16rem)] p-4 mt-5 md:mt-0 md:ml-64 flex flex-col items-center justify-center">
        <Stats />
        <Linechart />
        <div className="w-full md:w-[calc(100vw-20rem)] mt-4 rounded-lg border p-4">
          <Activeriders />
        </div>
      </div>
    </div>
  );
}
