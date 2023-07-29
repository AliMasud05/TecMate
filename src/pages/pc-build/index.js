import React from "react";
import { BsCpuFill, BsFillMotherboardFill, BsThreeDots } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";

const PcBuildPage = () => {
  return (
    <div className="flex justify-center mx-auto w-full max-w-xl border-gray-300 mt-5 border p-2 shadow-md rounded-md">
      <div className="w-full">
        <div>
          <h1 className="font-semibold text-lg text-center my-4">
            Build Your Own Computer
          </h1>
        </div>

        <div className="flex justify-between items-center gap-2 border-b border-gray-300 p-2">
          <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
            <BsCpuFill size={25} />
            <p className="mt-1 text-sm text-black">Processor</p>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
            </div>
          </div>

          <button className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full">
            Select
          </button>
        </div>

        <div className="flex justify-between items-center gap-2 border-b border-gray-300 p-2">
          <div className=" text-violet-600 shadow-gray-400 flex flex-col  w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
            <BsFillMotherboardFill size={25} />
            <p className="mt-1 text-sm text-black">Motherboard</p>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
            </div>
          </div>

          <button className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full">
            Select
          </button>
        </div>

        <div className="flex justify-between items-center gap-2 border-b border-gray-300 p-2">
          <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
            <CgSmartphoneRam size={25} />
            <p className="mt-1 text-sm text-black">Ram</p>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
            </div>
          </div>

          <button className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full">
            Select
          </button>
        </div>

        <div className="flex justify-between items-center gap-2 border-b border-gray-300 p-2">
          <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
            <ImPowerCord size={25} />
            <p className="mt-1 text-sm text-black">PSU</p>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
            </div>
          </div>

          <button className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full">
            Select
          </button>
        </div>

        <div className="flex justify-between items-center gap-2 border-b border-gray-300 p-2">
          <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
            <MdStorage size={25} />
            <p className="mt-1 text-sm text-black">Storage</p>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
            </div>
          </div>

          <button className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full">
            Select
          </button>
        </div>

        <div className="flex justify-between items-center gap-2 border-b border-gray-300 p-2">
          <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
            <FiMonitor size={25} />
            <p className="mt-1 text-sm text-black">Monitor</p>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
            </div>
          </div>

          <button className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full">
            Select
          </button>
        </div>

        <div className="flex justify-between items-center gap-2 border-b border-gray-300  p-2">
          <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
            <BsThreeDots size={25} />
            <p className="mt-1 text-sm text-black">Others</p>
          </div>
          <div>
            <div role="status" class="max-w-sm animate-pulse">
              <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
            </div>
          </div>

          <button className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full">
            Select
          </button>
        </div>

        <div className="text-center">
          <button className=" bg-slate-700 text-white px-4 py-1.5 my-5 font-medium rounded-sm">Complete Build</button>
        </div>
      </div>
    </div>
  );
};

export default PcBuildPage;
