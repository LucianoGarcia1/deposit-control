import { deleteDeposit } from "../../utils/depositFunctions";
import { ButtonUpdate } from "../Button/ButtonUpdate";
import { Link } from "react-router-dom";
import { ButtonDelete } from "../Button/ButtonDelete";
import toast from "react-hot-toast";

export const Deposits = ({ handleEdit, dados }) => {
  const handleDeleteDeposit = async (id, name) => {
    try {
      await deleteDeposit(id);
      toast.success(`${name} deletado com sucesso.`);
    } catch (erro) {
      console.log(erro);
    }
  };

  if (dados) {
    return (
      <div
        className={`w-full md:max-w-[750px] grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all md:grid-cols-3
        }`}
      >
        {dados.map((item) => (
          <Link
            key={item.id}
            className="sm:max-w-[300px] w-full bg-white border rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all"
            to={`/dashboard/deposit/${item.id}`}
          >
            <div className="flex justify-end items-center gap-4 mb-4">
              <ButtonUpdate
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleEdit(item);
                }}
              />
              <ButtonDelete
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleDeleteDeposit(item.id, item.name);
                }}
              />
            </div>

            <h3 className="text-2xl font-bold mb-2 text-black">{item.name}</h3>
            <p className="text-sm text-zinc-600 mb-1">{item.description}</p>
            <p className="text-sm text-neutral-500">
              Criado em:{" "}
              {item.creatAt
                ? item.creatAt.toDate().toLocaleDateString("pt-BR")
                : "Sem data"}
            </p>
          </Link>
        ))}
      </div>
    );
  }
};
