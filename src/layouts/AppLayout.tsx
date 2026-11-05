import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center  ">
      <main className="p-3 w-full flex flex-col items-center justify-center">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
