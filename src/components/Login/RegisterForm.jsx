import { InputForm } from "./InputForm";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";

export const RegisterForm = ({ setLoading }) => {
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
    } catch (erro) {
      setLoading(false);
      console.log("Login inválido:", erro);
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
        className="text-secondary text-base"
        title="Já possui conta?"
      >
        Já possui conta?
      </Link>

      <button
        className="border border-white max-w-[200px] w-full cursor-pointer p-3 rounded bg-secondary text-white text-base"
        title="Registrar"
      >
        Registrar
      </button>
    </form>
  );
};
