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
      className={`fixed z-50 bg-white border cc py-4 px-6 transition-all rounded-tr-4xl rounded-br-4xl ${
        active ? "left-0 top-0 bottom-0" : "-left-[400px]"
      } max-w-[300px] w-full flex flex-col gap-8`}
    >
      <h3 className="text-2xl font-bold text-black">
        Olá, {user.displayName}!
      </h3>

      <ul className="flex flex-col gap-4">
        <LinkNav href="/dashboard/profile">
          <VscAccount className="text-xl" />
          Perfil
        </LinkNav>

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
