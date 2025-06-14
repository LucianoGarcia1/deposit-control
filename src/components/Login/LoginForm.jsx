import { InputForm } from "./InputForm";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const LoginForm = ({ setLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formError, setFormError] = useState("");

  const { login } = useAuth();

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    setFormError("");

    try {
      await login(email, password);
    } catch (erro) {
      alert("E-mail ou senha incorretos", erro)
      setFormError("E-mail ou Senha incorretos!");
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

      <Link to="" className="text-secondary text-base" title="Alterar Senha">
        Esqueceu a senha?
      </Link>

      {formError && (
        <>
          {console.log("renderizou o erro:", formError)}
          <p className="text-red-600 text-base">{formError}</p>
        </>
      )}

      <button
        className="border border-white outline-2 outline-black max-w-[200px] w-full cursor-pointer p-3 rounded bg-secondary text-white text-base"
        title="Logar"
      >
        Login
      </button>
    </form>
  );
};
