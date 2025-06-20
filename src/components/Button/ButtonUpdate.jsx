import { FaEdit } from "react-icons/fa";

export const ButtonUpdate = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      title="Editar"
      className="text-xl text-secondary cursor-pointer  p-2 border rounded flex justify-center items-center"
    >
      <FaEdit />
    </button>
  );
};
