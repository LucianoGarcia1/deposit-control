import { RiMenuFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useMenu } from "../../hooks/useMenu";

export const Header = ({ active, handleMenu }) => {
  const { activeMenu } = useMenu();
  return (
    <header
      className={`w-full px-4 lg:text-left text-right transition-all duration-400 ${
        activeMenu ? "pl-[300px]" : ""
      }`}
    >
      <button
        className="cursor-pointer bg-white p-4 rounded transition-all duration-300 text-xl hover:bg-secondary border hover:text-white outline-2 outline-white"
        title={active ? "Fechar Menu" : "Abrir Menu"}
        onClick={handleMenu}
      >
        {active ? <MdClose /> : <RiMenuFill />}
      </button>
    </header>
  );
};
