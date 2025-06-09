import { MdLogout } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../Loading/Loading";

export const Logout = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
      setTimeout(() => {
        navigate("/");
      }, 400);
    } catch (e) {
      setLoading(false);
      console.log("Erro ao fazer logut:", e);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <button
      className="w-full p-4 border rounded flex justify-center items-center gap-4 text-base cursor-pointer hover:border-black hover:text-red-600 transition-all text-black outline-2 outline-black hover:outline-red-600"
      title="Deslogar"
      onClick={handleLogout}
    >
      <MdLogout className="text-xl" />
      Sair
    </button>
  );
};
