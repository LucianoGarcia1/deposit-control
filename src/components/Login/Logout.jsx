import { MdLogout } from "react-icons/md";

export const Logout = () => {
  return (
    <button className="w-full p-4 border rounded flex justify-center items-center gap-4 text-base cursor-pointer hover:border-red-500 hover:text-red-500 transition-all">
      <MdLogout className="text-xl"/>
      Sair
    </button>
  );
};
