import { IoAddOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { LinkNav } from "./LinkNav";
import { Logout } from "../Forms/Logout";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Forms/Button";

export const Nav = ({ active }) => {
  const { user } = useAuth();

  return (
    <nav
      className={`max-w-[300px] w-full rounded p-4 bg-white absolute border left-4 top-4 bottom-4 transition-transform duration-300 ${
        active ? "flex flex-col gap-8 opacity-100" : "hidden"
      }`}
    >
      <h3 className="text-2xl font-bold text-black">{`Olá, ${user.displayName}!`}</h3>

      <ul className="flex flex-col gap-4 w-full">
        <li className="w-full">
          <LinkNav href="/dashboard/profile" title="profile">
            <VscAccount className="text-xl" />
            Perfil
          </LinkNav>
        </li>
        <li className="w-full">
          <LinkNav href="/dashboard/deposit/b" title="Depósito [B]">
            <MdOutlineRoomPreferences className="text-xl" /> Depósito [B]
          </LinkNav>
        </li>
        <li className="w-full">
          <LinkNav href="/dashboard/deposit/c" title="Depósito [C]">
            <MdOutlineRoomPreferences className="text-xl" />
            Depósito [C]
          </LinkNav>
        </li>
      </ul>

      <Button
        className="bg-secondary border p-4 rounded text-base cursor-pointer text-white w-full transition-all flex items-center justify-center gap-4 flex-row-reverse border-white outline-2 outline-secondary"
        title="Adicionar Depósito"
      >
        Adicionar <IoAddOutline className="text-xl border rounded" />
      </Button>

      <Logout />
    </nav>
  );
};
