import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import logo from "../../assets/logo.png";
import navImage from "../../../public/db.json";
import Image from "next/image";


const Navbar = () => {
  const { data: session } = useSession();
  const items = [
    {
      key: "1",
      label: <Link href="/cpu">Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="/ram">Ram</Link>,
    },
    {
      key: "4",
      label: <Link href="/psu">Power Supply</Link>,
    },
    {
      key: "5",
      label: <Link href="/storage">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/monitor">Monitor</Link>,
    },
    {
      key: "7",
      label: <Link href="/others">Others</Link>,
    },
  ];
  const router = useRouter();
  return (    
    <div className="bg-inherit grid grid-cols-4 py-1 px-2 bg-slate-500 ">
      <div className="flex col-span-2">
        <div>
          <h1
            onClick={() => router.push("/")}
            className="font-serif text-2xl bg-slate-700 italic px-2 py-1 rounded-md ml-1 cursor-pointer border-s"
          >
            TECMATE
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between  col-span-2">
        <button
          className="ml-3 text-white bg-slate-400 shadow-md font-serif rounded-md px-2 "
          onClick={() => router.push("/pc-build")}
        >
          Pc Builder
        </button>
        <Dropdown
          className="ml-3 text-white bg-slate-400  px-1 rounded shadow-md font-serif  "
          menu={{ items }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>Hover me</Space>
          </a>
        </Dropdown>
        <div className="ml-3 text-white bg-slate-400 px-2 rounded shadow-md font-serif">
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="ml-5 border-0  shadow-md font-serif bg-red-500 rounded text-white py-1.5 px-3 text-xs font-semibold cursor-pointer hover:bg-red-600 transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className=" border-0 shadow-md font-serif text-slate-200 bg-zinc-900 rounded px-2 py-1   text-xs font-semibold  cursor-pointer transition-all duration-200"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
