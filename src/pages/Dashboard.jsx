import { useState } from "react";
import { Nav } from "../components/nav/nav";
import { RiMenuFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Dashboard() {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <section
      className={`w-full h-screen bg-secondary p-4 relative transition-all duration-300 ${
        active ? "pl-[300px]" : "pl-0"
      }`}
    >
      <header className="w-full px-4">
        <button
          className="cursor-pointer bg-white p-4 rounded transition-all duration-300 text-xl"
          title={active ? "Fechar Menu": "Abrir Menu"}
          onClick={handleMenu}
        >
          {active ? <MdClose /> : <RiMenuFill />}
        </button>
      </header>

      <Nav active={active} />

      <main className="p-4">
        <h1 className="text-white text-5xl font-bold">
          Gerenciador de Depósitos
        </h1>
      </main>
    </section>
  );
}
export default Dashboard;
