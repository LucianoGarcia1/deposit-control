import { useState } from "react";
import { Nav } from "../components/Nav/Nav";
import { Header } from "../components/Header/Header";
import { Modal } from "../components/Modal/Modal";
import { IoAddOutline } from "react-icons/io5";
import { ButtonModal } from "../components/Button/Button_Modal";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  const handleModal = () => {
    setActiveModal((prev) => !prev);
  };

  return (
    <section
      className={`w-full h-screen relative transition-all duration-300 bg-white ${
        activeMenu ? "lg:pl-[300px]" : "pl-0"
      }`}
    >
      <main className="w-full min-h-screen bg-white p-4 flex flex-col gap-8">
        <Header active={activeMenu} handleMenu={handleMenu} />
        <div className="w-full px-4">
          <h1 className="text-black text-5xl font-bold">
            Gerenciador de Depósitos
          </h1>

          <div className="w-full mt-8">
            
          </div>

          <ButtonModal
            title="Criar Depósito"
            onClick={handleModal}
            className="bg-secondary border p-4 rounded text-base cursor-pointer text-white max-w-[75px] w-full transition-all flex items-center justify-center gap-4 border-white outline-2 outline-secondary fixed z-50 bottom-12 right-8"
          >
            <IoAddOutline className="text-3xl" />
          </ButtonModal>

          {activeModal && (
            <Modal
              handleClose={handleModal}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          )}
        </div>
      </main>
      <Nav active={activeMenu} />
    </section>
  );
}

export default Dashboard;
