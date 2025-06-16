import { InputForm } from "../Input/InputForm";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "./Button";

export const LoginForm = ({ setIsLoading, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);

    try {
      await login(email, password);
      toast.success("Login realizado com sucesso!");
    } catch (erro) {
      switch (erro.code) {
        case "auth/invalid-credential":
          toast.error("E-mail ou senha incorretos.");
          break;
        case "auth/invalid-email":
          toast.error("E-mail inválido.");
          break;
        default:
          toast.error("Erro ao fazer login. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-[600px] w-full p-4 rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForm
        type="email"
        placeholder="E-mail"
        label="E-mail:"
        erro={errors.email}
        register={register("email", {
          required: "E-mail obrigatório!",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Formato de e-mail inválido",
          },
        })}
      />

      <InputForm
        type="password"
        placeholder="Senha"
        label="Senha:"
        erro={errors.password}
        register={register("password", {
          required: "Senha obrigatória!",
          minLength: {
            value: 6,
            message: "Mínimo 6 caracteres",
          },
        })}
      />

      <div className="w-full flex justify-between">
        <Link
          to="/forgot-password"
          className="text-secondary text-base transition-all hover:text-red-600"
          title="Alterar Senha"
        >
          Esqueceu a senha?
        </Link>

        <span className="text-base text-black">| ou |</span>

        <Link
          to="/register"
          className="text-secondary text-base transition-all hover:text-red-600"
          title="Não possui conta?"
        >
          Não possui conta?
        </Link>
      </div>

      <Button children="Entrar" title="Entrar" isLoading={isLoading} />
    </form>
  );
};
