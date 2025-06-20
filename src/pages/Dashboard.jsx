import { useState } from "react";
import { Nav } from "../components/Nav/Nav";
import { Header } from "../components/Header/Header";
import { Modal } from "../components/Modal/Modal";
import { IoAddOutline } from "react-icons/io5";
import { ButtonModal } from "../components/Button/Button_Modal";
import { Title } from "../components/Title/Title";
import { Deposits } from "../components/Deposits/Deposits";
import Ilustration from "../../public/deposit.svg";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [depositSelected, setDepositSelected] = useState(null);

  const handleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  const handleModal = () => {
    setActiveModal((prev) => !prev);
  };

  const handleEdit = (deposito) => {
    setDepositSelected(deposito);
    setActiveModal(true);
  };

  return (
    <section
      className={`w-full h-screen relative transition-all duration-300 bg-white ${
        activeMenu ? "lg:pl-[300px]" : "pl-0"
      }`}
    >
      <main className="w-full min-h-screen bg-white py-4 sm:p-4 flex flex-col gap-8">
        <Header active={activeMenu} handleMenu={handleMenu} />
        <div className="w-full px-4">
          <Title mxWidth="max-w-[400px]">Gerenciador de Depósitos</Title>

          <div className="w-full mt-6 flex gap-10 items-start flex-col-reverse md:flex-row relative">
            <Deposits handleEdit={handleEdit} />

            <div className="max-w-[550px] xl:fixed xl:right-24">
              <img src={Ilustration} alt="Deposits Ilustration" />
            </div>
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
              depositSelected={depositSelected}
            />
          )}
        </div>
      </main>
      <Nav active={activeMenu} />
    </section>
  );
}

export default Dashboard;
