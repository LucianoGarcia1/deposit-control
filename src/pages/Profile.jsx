import { ForgotPassword } from "../components/Forms/ForgotPassword";
import { Title } from "../components/Title/Title";
import { useAuth } from "../hooks/useAuth";
import { Layout } from "../components/Layout/Layout";
import perfil from "../../public/profile.svg";

function Profile() {
  const { user } = useAuth();
  return (
    <Layout>
      <div className="w-full flex justify-between">
        <div className="w-full max-w-[800px]">
          <Title>
            Perfil de {""}
            <span className="text-secondary">{user.displayName}</span>
          </Title>
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Alterar senha
          </h3>
          <ForgotPassword value={user.email} />
        </div>

        <div className="max-w-[600px] w-full md:block hidden">
          <img src={perfil} alt="Imagem de Perfil" className="transition-all" />
        </div>
      </div>
    </Layout>
  );
}
export default Profile;
