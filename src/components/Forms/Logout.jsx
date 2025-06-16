import { MdLogout } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import toast from "react-hot-toast";

export const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await logout();
      toast.success("Usuário deslogado.");
      navigate("/");
    } catch (e) {
      console.log(e);
      toast.error("Erro ao tentar deslogar!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="w-full p-4 border rounded flex justify-center items-center gap-4 text-base cursor-pointer hover:border-red-600 hover:text-red-600 transition-all text-black outline-2 outline-black hover:outline-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Deslogar"
      disabled={isLoading}
      onClick={handleLogout}
    >
      {isLoading ? (
        <FiLoader className="animate-spin text-xl" />
      ) : (
        <>
          <MdLogout className="text-xl" />
          Sair
        </>
      )}
    </button>
  );
};
