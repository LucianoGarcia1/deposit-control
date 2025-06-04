import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineRoomPreferences } from "react-icons/md";


export const Nav = ({ active }) => {
  return (
    <nav
      className={`max-w-[300px] w-full p-4 bg-white absolute left-0 top-0 bottom-0 transition-transform duration-300 ${
        active ? "flex flex-col gap-8" : "hidden"
      }`}
    >
      <ul className="flex flex-col gap-4 w-full">
        <li className="w-full">
          <Link
            to="/dashboard/profile"
            className="w-full flex items-center gap-4 border p-4 rounded"
          >
            <VscAccount className="text-xl"/>
            Profile
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/dashboard/deposit/b"
            className="w-full block border p-4 rounded"
          >
            Depósito [B]
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/dashboard/deposit/c"
            className="w-full block border p-4 rounded"
          >
            Depósito [C]
          </Link>
        </li>
      </ul>

      <button className="bg-secondary border p-4 rounded text-base cursor-pointer text-white w-full transition-all flex items-center justify-center gap-4 flex-row-reverse hover:bg-highlight">
        Adicionar <IoAddOutline className="text-xl border rounded" />
      </button>
    </nav>
  );
};
