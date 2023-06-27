import Link from "next/link";
import SigninBttn from "./SigninBttn";

const Navbar = () => {
  return (
    <nav className="w-full py-3 px-5 flex items-center justify-between border-b border-gray-800">
      <h1 className={`text-white text-xl font-bold`}>Products App</h1>
      <ul className="w-2/6 flex items-center justify-between">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <SigninBttn />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
