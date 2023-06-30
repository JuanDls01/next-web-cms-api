import SigninBttn from "@/app/(webapp)/components/SigninBttn";
import Link from "next/link";

const AdminNavBar = () => {
  return (
    <nav className="w-full py-3 px-5 flex items-center justify-between border-b border-gray-800">
      <h1 className={`text-white text-xl font-bold`}>Admin Back Office</h1>
      <ul className="w-2/6 flex items-center justify-between">
        <li>
          <Link href="/admin">Admin Home</Link>
        </li>
        <li>
          <Link href="/admin/users">Users</Link>
        </li>
        <li>
          <SigninBttn />
        </li>
      </ul>
    </nav>
  );
};
export default AdminNavBar;
