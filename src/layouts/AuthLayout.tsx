import { Outlet } from "react-router";
import logo from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div
      className="w-screen h-screen bg-gray-400 flex 
    flex-col justify-center items-center text-gray-100"
    >
      <main
        className="bg-gray-500 p-8 rounded-3xl 
      flex items-center flex-col md:min-w-115.5"
      >
        <img src={logo} alt="Logo" className="my-8 w-40" />

        <Outlet />
      </main>
    </div>
  );
}
