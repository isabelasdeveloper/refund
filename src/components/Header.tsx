import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center pl-6 pr-6">
      <img src={logo} className="h-9" />
      <div className="flex items-center gap-2">
        <span className="flex text-sm font-semibold text-gray-200">
          Olá, Isabela!
        </span>
        <img
          src={logout}
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
