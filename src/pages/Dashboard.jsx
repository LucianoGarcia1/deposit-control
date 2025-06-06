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
        active ? "lg:pl-[300px]" : "pl-0"
      }`}
    >
      <main className={`w-full min-h-screen p-4 flex flex-col gap-8 ${active && "opacity-70 "}`}>
        <header className="w-full px-4 lg:text-left text-right">
          <button
            className="cursor-pointer bg-white p-4 rounded transition-all duration-300 text-xl hover:bg-secondary hover:border-white border hover:text-white"
            title={active ? "Fechar Menu" : "Abrir Menu"}
            onClick={handleMenu}
          >
            {active ? <MdClose /> : <RiMenuFill />}
          </button>
        </header>
        <div className="w-full">
          <h1 className="text-white text-5xl font-bold">
            Gerenciador de Depósitos
          </h1>
        </div>
      </main>
      <Nav active={active} />
    </section>
  );
}
export default Dashboard;
