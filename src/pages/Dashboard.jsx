import { useEffect, useState } from "react";
import { Nav } from "../components/Nav/Nav";
import { Header } from "../components/Header/Header";
import { Modal } from "../components/Modal/Modal";
import { IoAddOutline } from "react-icons/io5";
import { ButtonModal } from "../components/Button/Button_Modal";
import { Title } from "../components/Title/Title";
import { Deposits } from "../components/Deposits/Deposits";
import Ilustration from "../../public/deposit.svg";
import { getDeposits } from "../utils/depositFunctions";
import { Layout } from "../components/Layout/Layout";

function Dashboard() {
  const [activeModal, setActiveModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [depositSelected, setDepositSelected] = useState(null);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const unsubscribe = getDeposits(setDados);
    return () => unsubscribe();
  }, []);

  const handleOpenModal = () => {
    setActiveModal(true);
    setDepositSelected(null);
  };

  const handleCloseModal = () => {
    setActiveModal(false);
    setDepositSelected(null);
  };

  const handleEdit = (deposito) => {
    setDepositSelected(deposito);
    setActiveModal(true);
  };

  return (
    <Layout>
      <Title mxWidth="max-w-[400px]">Gerenciador de Depósitos</Title>

      <div className="w-full mt-6 flex gap-10 items-start flex-col-reverse xl:flex-row relative">
        {dados.length > 0 ? (
          <Deposits handleEdit={handleEdit} dados={dados} />
        ) : (
          <div className="w-full">
            <p className="text-xl text-secondary">
              Nenhum depósito encontrado.
            </p>
          </div>
        )}
        <div className="max-w-[600px]">
          <img
            src={Ilustration}
            alt="Deposits Ilustration"
            className="transition-all"
          />
        </div>
      </div>

      <ButtonModal
        title="Criar Depósito"
        onClick={handleOpenModal}
        className="bg-secondary border p-4 rounded text-base cursor-pointer text-white max-w-[75px] w-full transition-all flex items-center justify-center gap-4 border-white outline-2 outline-secondary fixed z-50 bottom-12 right-8"
      >
        <IoAddOutline className="text-3xl" />
      </ButtonModal>

      {activeModal && (
        <Modal
          handleClose={handleCloseModal}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          depositSelected={depositSelected}
        />
      )}
    </Layout>
  );
}

export default Dashboard;
