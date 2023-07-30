import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import logo from "../../assets/logo.png";
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
    <div className="bg-white/60 py-4 px-2 backdrop-blur-lg z-20 flex items-center justify-between container mx-auto">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            className="w-24 sm:w-32 rounded-md h-full cursor-pointer"
            alt="logo"
          />
        </Link>
        <Dropdown
          className="ml-5"
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <span className="cursor-pointer font-medium text-slate-600">
            Category
          </span>
        </Dropdown>
      </div>
      <div>
        <button
          onClick={() => router.push("/pc-build")}
          className="border-0 bg-purple-800 text-white py-1.5 px-3 text-xs font-semibold rounded-full cursor-pointer hover:bg-purple-900 transition-all duration-200"
        >
          PC Builder
        </button>
        {session?.user ? (
          <button
            onClick={() => signOut()}
            className="ml-5 border-0 bg-red-500 text-white py-1.5 px-3 text-xs font-semibold rounded-full cursor-pointer hover:bg-red-600 transition-all duration-200"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="ml-5 border-0 bg-slate-300 text-black py-1.5 px-3 text-xs font-semibold rounded-full cursor-pointer transition-all duration-200"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
