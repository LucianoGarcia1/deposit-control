import { IoAddOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { LinkNav } from "./LinkNav";
import { Logout } from "../Login/Logout";

export const Nav = ({ active }) => {
  return (
    <nav
      className={`max-w-[300px] w-full p-4 bg-white absolute left-0 top-0 bottom-0 transition-transform duration-300 ${
        active ? "flex flex-col gap-8" : "hidden"
      }`}
    >
      <ul className="flex flex-col gap-4 w-full">
        <li className="w-full">
          <LinkNav
            href="/dashboard/profile"
            title="profile"
          >
            <VscAccount className="text-xl" />
            Profile
          </LinkNav>
        </li>
        <li className="w-full">
          <LinkNav
            href="/dashboard/deposit/b"
            title="Depósito [B]"
          >
            <MdOutlineRoomPreferences className="text-xl" /> Depósito [B]
          </LinkNav>
        </li>
        <li className="w-full">
          <LinkNav
            href="/dashboard/deposit/c"
            title="Depósito [C]"
          >
            <MdOutlineRoomPreferences className="text-xl" />
            Depósito [C]
          </LinkNav>
        </li>
      </ul>

      <button className="bg-secondary border p-4 rounded text-base cursor-pointer text-white w-full transition-all flex items-center justify-center gap-4 flex-row-reverse hover:bg-primary" title="Adicionar">
        Adicionar <IoAddOutline className="text-xl border rounded" />
      </button>

      <Logout/>  
    </nav>
  );
};
