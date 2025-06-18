import { Link } from "react-router-dom";
import { ForgotPassword } from "../components/Forms/ForgotPassword";
import { Title } from "../components/Title/Title";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();
  return (
    <section className="bg-white w-full min-h-screen p-4 flex gap-4 flex-col">
      <nav className="max-w-[100px] w-full">
        <Link
          to="/dashboard"
          className="flex items-center gap-4 border border-black rounded text-base justify-center py-2 text-black mb-8 transition-all hover:bg-secondary hover:text-white"
        >
          <IoReturnUpBackSharp className="text-xl" />
          Voltar
        </Link>
      </nav>
      <Title>
        Perfil de {""}
        <span className="text-secondary">{user.displayName}</span>
      </Title>

      <div className="w-full">
        <h3 className="text-2xl font-bold text-secondary mb-4">
          Alterar senha
        </h3>
        <ForgotPassword value={user.email} />
      </div>
    </section>
  );
}
export default Profile;
