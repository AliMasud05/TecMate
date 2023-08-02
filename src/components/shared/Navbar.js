import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Dropdown, Space } from "antd";
import Link from "next/link";

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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Dropdown
                className="ml-3 text-white bg-slate-400  px-1 rounded shadow-md font-serif  "
                menu={{ items }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>Category</Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <button
                className="ml-3 text-white bg-slate-400 shadow-md font-serif rounded-md px-2 "
                onClick={() => router.push("/pc-build")}
              >
                Pc Builder
              </button>
            </li>
          </ul>
        </div>
        <button
          onClick={() => router.push("/")}
          className="font-serif text-2xl  italic px-2 py-1 rounded-md ml-1 cursor-pointer border-s"
        >
          TECMATE
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Dropdown
              className="ml-3 text-white bg-slate-400  px-1 rounded shadow-md font-serif  "
              menu={{ items }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Category</Space>
              </a>
            </Dropdown>
          </li>

          <li>
            <button
              className="ml-3 text-white bg-slate-400 shadow-md font-serif rounded-md px-2 "
              onClick={() => router.push("/pc-build")}
            >
              Pc Builder
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="ml-3 text-white  px-2 rounded shadow-md font-serif">
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className=" border-0 shadow-lg text-md font-serif  bg-zinc-900 rounded px-2 py-2  font-semibold  cursor-pointer transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className=" border-0 shadow-lg text-md font-serif  bg-zinc-900 rounded px-2 py-2  font-semibold  cursor-pointer transition-all duration-200"
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
