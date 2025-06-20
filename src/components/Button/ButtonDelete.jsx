import { AiOutlineDelete } from "react-icons/ai";

export const ButtonDelete = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      title="Deletar"
      className="text-red-500 cursor-pointer flex items-center justify-center border rounded p-2"
    >
      <AiOutlineDelete className="text-xl" />
    </button>
  );
};
