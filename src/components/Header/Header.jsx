import { RiMenuFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

export const Header = ({ active, handleMenu }) => {
  return (
    <header className="w-full px-4 lg:text-left text-right">
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
