import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Title } from "../components/Title/Title";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { Loading } from "../components/Loading/Loading";
import toast from "react-hot-toast";

function Deposit() {
  const { id } = useParams();
  const [deposit, setDeposit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDeposit = async () => {
      try {
        const refDoc = doc(db, "deposits", id);
        const response = await getDoc(refDoc);
        if (response.exists()) {
          setDeposit({ id: response.id, ...response.data() });
          toast.dismiss();
          toast.success(`Depósito encontrado com sucesso.`);
        } else {
          toast.error("Depósito não foi encontrado!");
        }
      } catch (erro) {
        console.log(erro);
        toast.error("Erro ao buscar depósito!");
      } finally {
        setIsLoading(false);
      }
    };

    getDeposit();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  if (!deposit) {
    return (
      <div>
        <p>Nenhum depósito foi encontrado!</p>
      </div>
    );
  }
  return (
    <Layout>
      <div className="w-full flex flex-col gap-4">
        <Title>{deposit.name}</Title>
        <p className="text-zinc-600">
          Criado em:{" "}
          {deposit.creatAt
            ? deposit.creatAt.toDate().toLocaleDateString("pt-BR")
            : "Sem data"}
        </p>
        <p className="text-zinc-600">Descrição: {deposit.description}</p>
      </div>

      <div className="mt-8">aqui vai ficar a movimentação dos items: Entrada,Saída, equipamento, data, editar</div>

      <Link to>Estoque do Deposito</Link>
    </Layout>
  );
}
export default Deposit;
