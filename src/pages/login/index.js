import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="flex items-center  justify-center h-screen">
      <div className="border w-full max-w-xs p-2 mx-2 bg-black rounded-md py-7 border-gray-300 shadow-md shadow-gray-300">
        <h1 className="text-center font-semibold text-xl ">Login</h1>

        <div
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://tec-mate-a4hde4a2l-alimasud05.vercel.app",
            })
          }
          className="flex justify-center mt-5 border border-gray-300 hover:bg-slate-300 bg-slate-200 transition-all duration-200 rounded-full cursor-pointer "
        >
          <FcGoogle size={30} className="p-1" />
        </div>
        <div
          onClick={() =>
            signIn("github", {
              callbackUrl: "https://tec-mate-a4hde4a2l-alimasud05.vercel.app",
            })
          }
          className="flex justify-center mt-5 border border-gray-300 hover:bg-slate-300 bg-slate-200 transition-all duration-200 rounded-full cursor-pointer "
        >
          <BsGithub size={30} className="p-1" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
