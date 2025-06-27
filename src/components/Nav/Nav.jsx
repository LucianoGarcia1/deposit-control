import { VscAccount } from "react-icons/vsc";
import { GoDatabase } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { LinkNav } from "./LinkNav";
import { Logout } from "../Forms/Logout";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export const Nav = ({ active }) => {
  const { user } = useAuth();
  const [hours, setHours] = useState("");
  useEffect(() => {
    const hour = new Date().getHours();

    const hoursValidate = () => {
      if (hour >= 6 && hour < 12) {
        return "Bom dia!";
      }
      if (hour >= 12 && hour < 18) {
        return "Boa tarde!";
      }
      return "Boa noite!";
    };

    setHours(hoursValidate());
  }, []);
  return (
    <nav
      className={`fixed z-50 bg-white border cc py-4 px-6 transition-all duration-400 rounded-tr-4xl rounded-br-4xl ${
        active ? "left-0 top-0 bottom-0" : "-left-[400px]"
      } max-w-[300px] w-full flex flex-col gap-8`}
    >
      <h3 className="text-2xl font-bold text-black">
        Olá, {user.displayName}
        <p className="text-xl font-normal text-black">{hours}</p>
      </h3>

      <ul className="flex flex-col gap-4">
        <LinkNav href="/dashboard/profile" title="perfil">
          <VscAccount className="text-xl" />
          Perfil
        </LinkNav>

        <li className="w-full">
          <LinkNav href="/dashboard" title="Dashboard">
            <RxDashboard className="text-xl" />
            Dashboard
          </LinkNav>
        </li>
        <li className="w-full">
          <LinkNav href="/dashboard/setup" title="Base de Dados">
            <GoDatabase className="text-xl" />
            Base de Dados
          </LinkNav>
        </li>
      </ul>

      <Logout />
    </nav>
  );
};
