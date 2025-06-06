import { useState } from "react";
import { Nav } from "../components/nav/nav";
import { Header } from "../components/Header/Header";

function Dashboard() {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <section
      className={`w-full h-screen relative transition-all duration-300 ${
        active ? "lg:pl-[300px]" : "pl-0"
      }`}
    >
      <main
        className={`w-full min-h-screen bg-secondary p-4 flex flex-col gap-8 transition-all ${
          active && "opacity-75"
        }`}
      >
        <Header active={active} handleMenu={handleMenu} />
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
