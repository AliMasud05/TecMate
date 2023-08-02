import Image from "next/image";
import { useRouter } from "next/router";
import { BsCpuFill, BsFillMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { MdStorage } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
const createSVGIcon = () => (
  <svg
    className="rating-icon"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 20"
    fill="orange"
    height="15px"
    width="15px"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const PcBuildPage = () => {
  const router = useRouter();
  const { cpu, motherboard, ram, psu, storage, monitor } = useSelector(
    (state) => state.pcBuild
  );
  console.log(cpu);

  const isDataFulfilled = () => {
    return cpu && motherboard && ram && psu && storage && monitor;
  };
  return (    

    <div className="lg:mx-8">
      <div>
        <h1 className="font-semibold text-lg text-center my-4">
          Choose Your Computer Parts & Make a Computer
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs ">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="">
              <td>
                <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                  <BsCpuFill size={25} />
                  <p className="mt-1 text-sm text-black">Processor</p>
                </div>
              </td>

              <td>
                <div>
                  <div role="status" className="max-w-sm animate-pulse">
                    <h1>{cpu ? "Product Selected" : "Select a Processor"}</h1>
                  </div>
                </div>
              </td>

              <td>
                {cpu && (
                  <div className="flex justify-between items-center gap-2  p-2">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                        <Image src={cpu?.image} height={35} width={35} />
                      </div>
                      <div className="flex justify-between w-full gap-3">
                        <div>
                          <p className="font-medium">{cpu.name}</p>
                          <p className="flex">
                            {Array.from({ length: cpu?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                        <p className="text-red-500 font-medium whitespace-nowrap">
                          {cpu.price} /-
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td>
                <button
                  onClick={() => router.push("/select/cpu")}
                  className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full"
                >
                  {cpu ? "selected" : "select"}
                </button>
              </td>
            </tr>

            {/* row 2 */}
            <tr className="">
              <td>
                <div className=" text-violet-600 shadow-gray-400 flex flex-col  w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
                  <BsFillMotherboardFill size={25} />
                  <p className="mt-1 text-sm text-black">Motherboard</p>
                </div>
              </td>
              <td>
                <div>
                  <div role="status" className="max-w-sm animate-pulse">
                    <h1>
                      {motherboard
                        ? "Product Selected"
                        : "Select a Motherboard"}
                    </h1>
                  </div>
                </div>
              </td>

              <td>
                {motherboard && (
                  <div className="flex justify-between items-center gap-2  p-2">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                        <Image
                          src={motherboard?.image}
                          height={35}
                          width={35}
                        />
                      </div>
                      <div className="flex justify-between w-full gap-3">
                        <div>
                          <p className="font-medium">{motherboard.name}</p>
                          <p className="flex">
                            {Array.from({ length: motherboard?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                        <p className="text-red-500 font-medium whitespace-nowrap">
                          {motherboard.price} /-
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td>
                <button
                  onClick={() => router.push("/select/motherboard")}
                  className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full"
                >
                  {motherboard ? "selected" : "select"}
                </button>
              </td>
            </tr>

            {/* row 3 */}
            <tr className="">
              <td>
                <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
                  <CgSmartphoneRam size={25} />
                  <p className="mt-1 text-sm text-black">Ram</p>
                </div>
              </td>
              <td>
                <div>
                  <div role="status" className="max-w-sm animate-pulse">
                    <h1>{ram ? "Product Selected" : "Select a Ram"}</h1>
                  </div>
                </div>
              </td>

              <td>
                {ram && (
                  <div className="flex justify-between items-center gap-2  p-2">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                        <Image src={ram?.image} height={35} width={35} />
                      </div>
                      <div className="flex justify-between w-full gap-3">
                        <div>
                          <p className="font-medium">{ram.name}</p>
                          <p className="flex">
                            {Array.from({ length: ram?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                        <p className="text-red-500 font-medium whitespace-nowrap">
                          {ram.price} /-
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td>
                <button
                  onClick={() => router.push("/select/ram")}
                  className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full"
                >
                  {cpu ? "selected" : "select"}
                </button>
              </td>
            </tr>

            {/* row 4 */}
            <tr className="">
              <td>
                <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
                  <ImPowerCord size={25} />
                  <p className="mt-1 text-sm text-black">PSU</p>
                </div>
              </td>
              <td>
                <div>
                  <div role="status" className="max-w-sm animate-pulse">
                    <h1>{psu ? "Product Selected" : "Select a PSU"}</h1>
                  </div>
                </div>
              </td>

              <td>
                {psu && (
                  <div className="flex justify-between items-center gap-2  p-2">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                        <Image src={psu?.image} height={35} width={35} />
                      </div>
                      <div className="flex justify-between w-full gap-3">
                        <div>
                          <p className="font-medium">{psu.name}</p>
                          <p className="flex">
                            {Array.from({ length: psu?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                        <p className="text-red-500 font-medium whitespace-nowrap">
                          {psu.price} /-
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td>
                <button
                  onClick={() => router.push("/select/psu")}
                  className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full"
                >
                  {psu ? "selected" : "select"}
                </button>
              </td>
            </tr>

            {/* row 5*/}
            <tr className="">
              <td>
                <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                  <MdStorage size={25} />
                  <p className="mt-1 text-sm text-black">Processor</p>
                </div>
              </td>
              <td>
                <div>
                  <div role="status" className="max-w-sm animate-pulse">
                    <h1>{storage ? "Product Selected" : "Select a Storage"}</h1>
                  </div>
                </div>
              </td>

              <td>
                {storage && (
                  <div className="flex justify-between items-center gap-2  p-2">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                        <Image src={storage?.image} height={35} width={35} />
                      </div>
                      <div className="flex justify-between w-full gap-3">
                        <div>
                          <p className="font-medium">{storage.name}</p>
                          <p className="flex">
                            {Array.from({ length: storage?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                        <p className="text-red-500 font-medium whitespace-nowrap">
                          {storage.price} /-
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td>
                <button
                  onClick={() => router.push("/select/storage")}
                  className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full"
                >
                  {storage ? "selected" : "select"}
                </button>
              </td>
            </tr>
            {/* row 6*/}
            <tr className="">
              <td>
                <div className=" text-violet-600 shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 cursor-pointer">
                  <FiMonitor size={25} />
                  <p className="mt-1 text-sm text-black">Monitor</p>
                </div>
              </td>
              <td>
                <div>
                  <div role="status" className="max-w-sm animate-pulse">
                    <h1>{monitor ? "Product Selected" : "Select a Monitor"}</h1>
                  </div>
                </div>
              </td>

              <td>
                {monitor && (
                  <div className="flex justify-between items-center gap-2  p-2">
                    <div className="flex items-center w-full">
                      <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                        <Image src={monitor?.image} height={35} width={35} />
                      </div>
                      <div className="flex justify-between w-full gap-3">
                        <div>
                          <p className="font-medium">{monitor.name}</p>
                          <p className="flex">
                            {Array.from({ length: monitor?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                        <p className="text-red-500 font-medium whitespace-nowrap">
                          {monitor.price} /-
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td>
                <button
                  onClick={() => router.push("/select/monitor")}
                  className="bg-violet-600 font-medium text-xs text-white py-1 cursor-pointer px-3 rounded-full"
                >
                  {monitor ? "selected" : "select"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button
            disabled={!isDataFulfilled()}
            onClick={() => toast.success("Build completed successfully")}
            className=" bg-slate-700 text-white px-4 py-1.5 my-5 font-medium rounded-sm"
          >
            Complete Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuildPage;
