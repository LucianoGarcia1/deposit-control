import { InputForm } from "../Input/InputForm";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "./Button";

export const RegisterForm = ({ setLoading, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ name, email, password }) => {
    try {
      setLoading(true);
      const useRegister = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(useRegister.user, { displayName: name });
      toast.success("Conta criada com sucesso!");

    } catch (erro) {
      switch (erro.code) {
        case "auth/email-already-in-use":
          toast.error("Este e-mail já está cadastrado.");
          break;
        case "auth/invalid-email":
          toast.error("E-mail inválido.");
          break;
        case "auth/weak-password":
          toast.error("A senha precisa ter no mínimo 6 caracteres.");
          break;
        default:
          toast.error("Erro ao criar conta. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-[600px] w-full p-4 rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForm
        type="text"
        placeholder="Nome"
        label="Nome:"
        erro={errors.name}
        register={register("name", {
          required: "Nome obrigatório!",
          minLength: {
            value: 4,
            message: "Mínimo 4 caracteres",
          },
        })}
      />
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

      <Link
        to="/"
        className="text-secondary text-base transition-all hover:text-red-600"
        title="Já possui conta?"
      >
        Já possui conta?
      </Link>

      <Button children="Cadastrar" title="Criar conta" isLoading={isLoading} />
    </form>
  );
};
